const {
  is,
  isAny
} = require('bpmnlint-utils');


/**
 * A rule that checks the presence of an end event per scope.
 */
module.exports = function() {

  function hasEndEvent(node) {
    const flowElements = node.flowElements || [];

    return (
      flowElements.some(node => is(node, 'bpmn:EndEvent'))
    );
  }


  function check(node, reporter) {


    console.log(node);
  //   if (node.)
  // const outgoing = node.outgoing || [];

  }

  return { check };
};
