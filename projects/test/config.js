export default {
    default: {
      baseUrl: 'https://www.google.com',
      specs: ['./specs/**/*.spec.js'],
      exclude: [],
      maxInstances: 1,
      capabilities: [
        {
          browserName: 'chrome',
          chromeOptions: {
            // to run chrome headless the following flags are required
            // (see https://developers.google.com/web/updates/2017/04/headless-chrome)
            // args: ['--headless', '--disable-gpu'],
            args: ['--start-maximized']
          },
        },
      ],
      waitforTimeout: 1000,
  
      /**
       * Gets executed once before all workers get launched.
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       */
      onPrepare(/* config, capabilities */) {},
      /**
       * Gets executed just before initialising the webdriver session and test framework.
       * It allows you to manipulate configurations depending on the capability or spec.
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {Array.<String>} specs List of spec file paths that are to be run
       */
      beforeSession(/* config, capabilities, specs */) {},
      /**
       * Hook that gets executed before the suite starts
       * @param {Object} suite suite details
       */
      beforeSuite(/* suite */) {},
      /**
       * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
       * beforeEach in Mocha)
       */
      beforeHook() {},
      /**
       * Hook that gets executed _after_ a hook within the suite ends (e.g. runs after calling
       * afterEach in Mocha)
       */
      afterHook() {},
      /**
       * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
       * @param {Object} test test details
       */
      beforeTest(/* test */) {},
      /**
       * Runs before a WebdriverIO command gets executed.
       * @param {String} commandName hook command name
       * @param {Array} args arguments that command would receive
       */
      beforeCommand(/* commandName, args */) {},
      /**
       * Runs after a WebdriverIO command gets executed
       * @param {String} commandName hook command name
       * @param {Array} args arguments that command would receive
       * @param {Number} result 0 - command success, 1 - command error
       * @param {Object} error error object if any
       */
      afterCommand(/* commandName, args, result, error */) {},
      /**
       * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) ends.
       * @param {Object} test test details
       */
      afterTest(/* test */) {},
      /**
       * Hook that gets executed after the suite has ended
       * @param {Object} suite suite details
       */
      afterSuite(/* suite */) {},
      /**
       * Gets executed after all tests are done. You still have access to all global variables from
       * the test.
       * @param {Number} result 0 - test pass, 1 - test fail
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {Array.<String>} specs List of spec file paths that ran
       */
      after(/* result, capabilities, specs */) {},
      /**
       * Gets executed right after terminating the webdriver session.
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       * @param {Array.<String>} specs List of spec file paths that ran
       */
      afterSession(/* config, capabilities, specs */) {},
      /**
       * Gets executed after all workers got shut down and the process is about to exit.
       * @param {Object} exitCode 0 - success, 1 - fail
       * @param {Object} config wdio configuration object
       * @param {Array.<Object>} capabilities list of capabilities details
       */
      onComplete(/* exitCode, config, capabilities */) {},
    },
  };