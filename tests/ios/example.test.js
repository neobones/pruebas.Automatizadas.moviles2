// tests/ios/example.test.js
import { remote } from 'webdriverio';
import { assert } from 'chai';
import allure from '@wdio/allure-reporter';
import { config } from '../../config/ios.conf.js';

describe('iOS App Test', function() {
    let driver;
    let errorCount = 0;
    const MAX_ERRORS = 3;

    this.timeout(150000); // 2.5 minutos

    function incrementErrorCount() {
        errorCount++;
        if (errorCount >= MAX_ERRORS) {
            console.log(`Se alcanzó el número máximo de errores (${MAX_ERRORS})`);
        }
    }

    async function runTest(testName, testFunction) {
        allure.addFeature(testName);
        try {
            await testFunction();
            allure.addStep(testName, {status: 'passed'});
        } catch (error) {
            console.error(`Error en el test "${testName}":`, error);
            allure.addStep(testName, {status: 'failed', details: error.message});
            if (driver) {
                const screenshot = await driver.takeScreenshot().catch(e => console.error('Error al tomar screenshot:', e));
                if (screenshot) {
                    allure.addAttachment('Error Screenshot', Buffer.from(screenshot, 'base64'), 'image/png');
                }
            }
            incrementErrorCount();
        }
    }

    before(async function() {
        allure.addFeature('iOS Settings App');
        try {
            driver = await remote({
                ...config,
                capabilities: config.capabilities[0]
            });
        } catch (error) {
            console.error('Error al inicializar el driver:', error);
            allure.addAttachment('Error', JSON.stringify(error, null, 2), 'application/json');
            throw error;
        }
    });

    it('should open the app', async function() {
        await runTest('App Launch', async () => {
            allure.addStory('App Launch');
            console.log('Esperando a que la aplicación se abra...');
            await driver.pause(10000);

            const isAppInstalled = await driver.isAppInstalled('com.apple.Preferences');
            console.log('¿La app está instalada?', isAppInstalled);
            assert.isTrue(isAppInstalled, 'La aplicación no está instalada');

            const appElement = await driver.$('//XCUIElementTypeApplication[@name="Settings"]');
            const isActive = await appElement.isDisplayed();
            console.log('Is app active?', isActive);
            assert.isTrue(isActive, 'La aplicación no está activa');

            console.log('Buscando el elemento de la aplicación...');
            console.log('Elemento encontrado:', await appElement.isExisting());

            const source = await driver.getPageSource();
            console.log('Page source:', source);

            assert.isTrue(await appElement.isDisplayed(), 'La app de Configuración debería estar visible');
            allure.addAttachment('Screenshot', Buffer.from(await driver.takeScreenshot(), 'base64'), 'image/png');
        });
    });

    it('should have General option', async function() {
        await runTest('General Option', async () => {
            allure.addStory('General Option');
            const generalOption = await driver.$('~General');
            assert.isTrue(await generalOption.isDisplayed(), 'La opción General debería estar visible');
            allure.addAttachment('Screenshot', Buffer.from(await driver.takeScreenshot(), 'base64'), 'image/png');
        });
    });

    it('should be able to tap on General', async function() {
        await runTest('Navigation', async () => {
            allure.addStory('Navigation');
            const generalOption = await driver.$('~General');
            await generalOption.click();
            const aboutOption = await driver.$('~About');
            assert.isTrue(await aboutOption.isDisplayed(), 'La opción About debería estar visible en la pantalla General');
            allure.addAttachment('Screenshot', Buffer.from(await driver.takeScreenshot(), 'base64'), 'image/png');
        });
    });

    after(async function() {
        if (driver) {
            try {
                await driver.deleteSession();
            } catch (error) {
                console.error('Error al cerrar la sesión:', error);
            }
        }
    });
});