import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
    //
    // ====================
    // Runner Configuration
    // ====================
    /**
     * NOTE: This is just a place holder and will be overwritten by each specific configuration
     */
    specs: [],
    //
    // ============
    // Capabilities
    // ============
    /**
     * NOTE: This is just a place holder and will be overwritten by each specific configuration
     */
    capabilities: [],
    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'debug',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 45000,
    connectionRetryTimeout: 120000,
    // Default request retries count
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',
    reporters: [
        'spec',
        ['allure', { outputDir:'allure-results', disableWebdriverStepsReporting: true, disableWebdriverScreenshotsReporting: false }]
    ],
    mochaOpts: {
        ui: 'bdd',
        /**
         * NOTE: This has been increased for more stable Appium Native app
         * tests because they can take a bit longer.
         */
        timeout: 3 * 60 * 1000, // 3min
    },
};
