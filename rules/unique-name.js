const {
  is
} = require('bpmnlint-utils');

var nodeNames = [];
//
//	B.10 Two Activities in the same Process should not have the same name
//

module.exports = function() {
  function check(node, reporter) {
  	console.log(nodeNames)
    if (nodeNames.includes(node.name) == true) {
      reporter.report(node.id, 'Model has duplicate activity name');
    }
    nodeNames.push(node.name);
  }

  return {
    check: check
  };
};
