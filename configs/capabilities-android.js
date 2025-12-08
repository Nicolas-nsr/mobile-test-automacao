const { join } = require('path');

module.exports = {
    platformName: 'Android',
    'appium:platformVersion': '10', // Ajuste conforme seu emulador
    'appium:deviceName': 'Pixel_7', // Ajuste conforme seu AVD
    'appium:automationName': 'UiAutomator2',
    'appium:app': join(process.cwd(), './apps/android.wdio.native.app.v1.0.8.apk'),
    'appium:autoGrantPermissions': true,
};