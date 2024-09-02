// tests/ios/example.test.js
import { remote } from 'webdriverio';
import { assert } from 'chai';
import allureReporter from '@wdio/allure-reporter';
import { config } from '../../config/ios.conf.js';

describe('iOS App Test', function() {
    let driver;

    this.timeout(300000); // 5 minutos

    before(async function() {
        allureReporter.addFeature('iOS Settings App');
        driver = await remote({
            ...config,
            capabilities: config.capabilities[0]
        });
    });

    it('should open the app', async function() {
        allureReporter.addStory('App Launch');
        console.log('Esperando a que la aplicación se abra...');
        await driver.pause(5000); // Esperar 5 segundos para que la app se inicie completamente
        const appElement = await driver.$('~Settings');
        await appElement.waitForDisplayed({ timeout: 30000 });
        assert.isTrue(await appElement.isDisplayed(), 'La app de Configuración debería estar visible');
        allureReporter.addAttachment('Screenshot', Buffer.from(await driver.takeScreenshot(), 'base64'), 'image/png');
    });

    it('should have General option', async function() {
        allureReporter.addStory('General Option');
        const generalOption = await driver.$('~General');
        await generalOption.waitForDisplayed({ timeout: 30000 });
        assert.isTrue(await generalOption.isDisplayed(), 'La opción General debería estar visible');
        allureReporter.addAttachment('Screenshot', Buffer.from(await driver.takeScreenshot(), 'base64'), 'image/png');
    });

    it('should be able to tap on General', async function() {
        allureReporter.addStory('Navigation');
        const generalOption = await driver.$('~General');
        await generalOption.click();
        const aboutOption = await driver.$('~About');
        await aboutOption.waitForDisplayed({ timeout: 30000 });
        assert.isTrue(await aboutOption.isDisplayed(), 'La opción About debería estar visible en la pantalla General');
        allureReporter.addAttachment('Screenshot', Buffer.from(await driver.takeScreenshot(), 'base64'), 'image/png');
    });

    after(async function() {
        if (driver) {
            await driver.deleteSession();
        }
    });
});