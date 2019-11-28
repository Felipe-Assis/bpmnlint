const {
  is,
  isAny
} = require('bpmnlint-utils');


module.exports = function() {

  function check(node, reporter) {

    const outgoing = node.outgoing || [];
    if ((is(node, 'bpmn:BoundaryEvent')) && outgoing.length != 1) {
      reporter.report(node.id, 'B.7 A Boundary Event must have exactly one outgoing Sequence Flow');
    }
    if ((is(node, 'bpmn:BoundaryEvent'))) {
      node.eventDefinitions.forEach((definition) => {
        console.log(definition);
      });
    }
  }

  return {
    check
  };

};


// helpers /////////////////////////////

function isConditionalForking(node) {

  const defaultFlow = node['default'];
  const outgoing = node.outgoing || [];

  return defaultFlow || outgoing.find(hasCondition);
}

function hasCondition(flow) {
  return !!flow.conditionExpression;
}

function isDefaultFlow(node, flow) {
  return node['default'] === flow;
}