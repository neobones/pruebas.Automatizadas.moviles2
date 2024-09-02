// tests/ios/example.test.js
import { remote } from 'webdriverio';
import { assert } from 'chai';
import { config } from '../../config/ios.conf.js';

describe('iOS App Test', function() {
    let driver;

    before(async function() {
        driver = await remote({
            ...config,
            capabilities: config.capabilities[0]  // Pasamos directamente el objeto de capacidades
        });
    });

    it('should open the app', async function() {
        console.log('La aplicación se ha abierto correctamente');
        // Aquí puedes agregar aserciones para verificar que la app se abrió correctamente
        // Por ejemplo:
        // const elem = await driver.$('~Settings');
        // assert.isTrue(await elem.isDisplayed());
    });

    after(async function() {
        if (driver) {
            await driver.deleteSession();
        }
    });
});