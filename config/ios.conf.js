// config/ios.conf.js
export const config = {
    runner: 'local',
    port: 4723,
    path: '/',
    specs: [
        './tests/ios/**/*.js'
    ],
    capabilities: [{
        "platformName": "iOS",
        "appium:deviceName": "iPhone Simulator",
        "appium:platformVersion": "14.0",
        "appium:automationName": "XCUITest",
        "appium:app": "/path/to/your/app.ipa"
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
};