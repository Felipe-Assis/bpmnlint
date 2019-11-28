module.exports = function() {

  function check(node, reporter) {

    if (!isConditionalForking(node)) {
      return;
    }
    console.log(node);
    const outgoing = node.outgoing || [];

    outgoing.forEach((flow) => {
      const missingCondition = (
        !hasCondition(flow) &&
        !isDefaultFlow(node, flow)
      );

      if (outgoing.length == 1) {
        reporter.report(flow.id, 'B.6 A conditional Sequence Flow cannot be used if there is only one sequence flow out of the element');
      }
    });
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