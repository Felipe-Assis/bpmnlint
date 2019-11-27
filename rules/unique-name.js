const {
  is
} = require('bpmnlint-utils');


//
//	B.10 Two Activities in the same Process should not have the same name
//

module.exports = function() {
	
  function check(node, reporter) {
    if (is(node, 'bpmn:Definitions') && !node.targetNamespace) {
      reporter.report(node.id, 'Element is missing targetNamespace');
    }
  }

  return {
    check: check
  };
};
