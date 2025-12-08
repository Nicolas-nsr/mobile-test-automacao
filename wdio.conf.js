const { join } = require('path');

exports.config = {
    runner: 'local',

    specs: ['./src/tests/**/*.js'],
    exclude: [],

    maxInstances: 1,

    logLevel: 'info',
    bail: 0,
    baseUrl: '',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    mochaOpts: {
        timeout: 60000
    },

    reporters: [
        'spec',
        ['allure', {
            outputDir: './reports/allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    services: [
        [
            'appium',
            {
                command: 'appium',
                args: {
                    port: 4723
                }
            }
        ]
    ],

    afterTest: async function (test, context, { error }) {
        if (error) {
            await browser.takeScreenshot();
        }
    },
};