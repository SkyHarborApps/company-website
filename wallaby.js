/**
 * Created by danielhollcraft on 10/18/16.
 */
module.exports = function () {

  return {
    files: [
      'src/**/*',
      '!src/**/*test.js'
    ],

    tests: ['src/**/*test.js'],

    env: {
      type: 'node',
      runner: 'node'
    },

    testFramework: 'jest'
  };
};