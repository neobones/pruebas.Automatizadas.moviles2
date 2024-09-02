// tests/ios/example.test.js
import { remote } from 'webdriverio';
import { assert } from 'chai';
import { config } from '../../config/ios.conf.js';

describe('iOS App Test', function() {
    let driver;

    before(async function() {
        driver = await remote(config);
    });

    it('should open the app', async function() {
        console.log('La aplicación se ha abierto correctamente');
        // Aquí puedes agregar tus pruebas
    });

    after(async function() {
        if (driver) {
            await driver.deleteSession();
        }
    });
});