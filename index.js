module.exports = {
  configs: {
    recommended: {
      rules: {
        'target-namespace': 'error',
        'myRule': 'error'
      }
    },
    all: {
      rules: {
        'target-namespace': 'warn',
        'no-manual-task': 'warn',
        'myRule': 'error'
      }
    }
  }
}