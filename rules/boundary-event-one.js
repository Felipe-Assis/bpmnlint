module.exports = function() {

  function check(node, reporter) {

    const outgoing = node.outgoing || [];
    console.log(node.type);
    if (node.type == 'bpmn:BoundaryEvent' && node.outgoing != 1) {
      reporter.report(node.id, 'B.7 A Boundary Event must have exactly one outgoing Sequence Flow');
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