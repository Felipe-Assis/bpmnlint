const {
  is
} = require('bpmnlint-utils');


/**
 * Rule that reports missing targetNamespace on bpmn:Definitions.
 */
module.exports = function() {

  function check(node, reporter) {
      reporter.report(node.id, 'MY CUSTOM ERROR!');
  }

  return {
    check: check
  };
};
