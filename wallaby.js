/**
 * Created by danielhollcraft on 10/18/16.
 */
var babel = require('babel-core');
process.env.BABEL_ENV = 'test';

module.exports = function (wallaby) {

  return {
    files: [
      'src/**/*',
      '!src/**/*test.js'
    ],

    tests: ['src/**/*test.js'],

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel: babel,
        presets: ['react-app']
      })
    },

    env: {
      type: 'node',
      runner: 'node',
    },

    testFramework: 'jest',

    bootstrap: function (wallaby) {
      wallaby.testFramework.configure({
        "moduleFileExtensions": [
          "jsx",
          "js",
          "json"
        ],
        "moduleNameMapper": {
          "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": wallaby.localProjectDir + "config/jest/FileStub.js",
          "^.+\\.css$": wallaby.localProjectDir + "/config/jest/CSSStub.js",
          "^.+\\.scss$": wallaby.localProjectDir + "/config/jest/SCSSStub.js"
        },
        "setupFiles": [
          wallaby.localProjectDir + "/config/polyfills.js"
        ],
        "testPathIgnorePatterns": [
          "(build|docs|node_modules)/"
        ],
        "testEnvironment": "node",
        "testRegex": "(/__tests__/.*|\\.(test|spec))\\.(js|jsx)$"
      });
    }
  };
};