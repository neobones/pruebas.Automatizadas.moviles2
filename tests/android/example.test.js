const { remote } = require('webdriverio');
const { assert } = require('chai');

describe('Android App Test', function() {
    let driver;

    before(async function() {
        driver = await remote(require('../../config/android.conf').config);
    });

    it('should open the app', async function() {
        // Aquí puedes agregar tus pruebas
        // Por ejemplo:
        // const element = await driver.$('~testElement');
        // assert.isTrue(await element.isDisplayed());
    });

    after(async function() {
        if (driver) {
            await driver.deleteSession();
        }
    });
});