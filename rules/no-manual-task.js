const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports manual tasks being used.
 */
module.exports = function() {

  function check(node, reporter) {
  	reporter.report(node.id, 'This will report an error every time!');
    if (is(node, 'bpmn:ManualTask')) {
      reporter.report(node.id, 'Element has disallowed type bpmn:ManualTask');
    }
  }

  return {
    check: check
  };
};
