const {
  isAny
} = require('bpmnlint-utils');

/**
 * A rule that checks that no fake join is modeled by attempting
 * to give a task or event join semantics.
 *
 * Users should model a parallel joining gateway
 * to achieve the desired behavior.
 */
module.exports = function() {

  function check(node, reporter) {

      reporter.report(node.id, 'Testing!!!');

  return {
    check
  };

};