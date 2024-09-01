exports.config = {
    port: 4723,
    specs: [
        './tests/android/**/*.js'
    ],
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:platformVersion': '11.0', // Ajusta esto a la versión de Android que estés usando
        'appium:automationName': 'UiAutomator2',
        'appium:app': '/path/to/your/app.apk' // Reemplaza esto con la ruta a tu archivo .apk
    }],
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};