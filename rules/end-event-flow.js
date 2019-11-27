const {
  is,
  isAny
} = require('bpmnlint-utils');


/**
B.2 Outgoing Sequence Flow not allowed in an End Event
 */
module.exports = function() {

  function hasEndEvent(node) {
    const flowElements = node.flowElements || [];

    return (
      flowElements.some(node => is(node, 'bpmn:EndEvent'))
    );
  }


  function check(node, reporter) {

      if (node.type == 'bpmn:EndEvent' && node.flowElements != undefined) {
        reporter.report(node.id, 'B.2 Outgoing Sequence Flow not allowed in an End Event');
      }
  }

  return { check };
};
