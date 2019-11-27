const {
  is
} = require('bpmnlint-utils');

var nodeNames = [];
//
//	B.10 Two Activities in the same Process should not have the same name
//

module.exports = function() {
  function check(node, reporter) {
    if (nodeNames.includes(node.name) == true && node.name != undefined) {
      reporter.report(node.id, 'Model has duplicate activity name');
    }
    if (nodeNames != undefined) {
    	nodeNames.push(node.name);
    }
  }

  return {
    check: check
  };
};
