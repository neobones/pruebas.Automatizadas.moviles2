// config/ios.conf.js
export const config = {
    runner: 'local',
    port: 4723,
    path: '/',
    specs: [
        './tests/ios/**/*.js'
    ],
    capabilities: [{
        platformName: "iOS",
        "appium:deviceName": "iPhone 14",
        "appium:platformVersion": "16.2",
        "appium:automationName": "XCUITest",
        "appium:app": "com.apple.Preferences",
        "appium:newCommandTimeout": 300,
        "appium:wdaLaunchTimeout": 120000,
        "appium:wdaConnectionTimeout": 120000
    }],
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 30000,
    connectionRetryTimeout: 300000,
    connectionRetryCount: 5,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 600000
    },
};