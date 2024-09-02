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
        "appium:deviceName": "iPhone 14", // xcrun simctl list devices, para configurar es necesario poner la información exacta de tu pc
        "appium:platformVersion": "16.2",
        "appium:automationName": "XCUITest",
        "appium:app": "com.apple.Preferences"
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