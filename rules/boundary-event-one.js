module.exports = function() {

  function check(node, reporter) {

    console.log(node);
    // if (!isConditionalForking(node)) {
    //   return;
    // }
    // const outgoing = node.outgoing || [];

    // if (outgoing.length == 1) {
    //   reporter.report(node.id, 'B.6 A conditional Sequence Flow cannot be used if there is only one sequence flow out of the element');
    // }
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