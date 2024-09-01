exports.config = {
    port: 4723,
    specs: [
        './tests/ios/**/*.js'
    ],
    capabilities: [{
        platformName: 'iOS',
        'appium:deviceName': 'iPhone Simulator',
        'appium:platformVersion': '15.0', // Ajusta esto a la versión de iOS que estés usando
        'appium:automationName': 'XCUITest',
        'appium:app': '/path/to/your/app.ipa' // Reemplaza esto con la ruta a tu archivo .ipa
    }],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};