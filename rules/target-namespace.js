const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports missing targetNamespace on bpmn:Definitions.
 */
module.exports = function() {
  reporter.report('aaaaa', 'bbbb');
  function check(node, reporter) {
    if (is(node, 'bpmn:Definitions') && !node.targetNamespace) {
      reporter.report(node.id, 'Element is missing targetNamespace');
    }
  }

  return {
    check: check
  };
};
