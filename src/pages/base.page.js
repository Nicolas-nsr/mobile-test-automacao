class BasePage {

    async click(element) {
        await element.waitForDisplayed();
        await element.click();
    }

    async type(element, text) {
        await element.waitForDisplayed();
        await element.setValue(text);
    }

    async isDisplayed(element) {
        return await element.waitForDisplayed({ timeout: 5000 });
    }
}

module.exports = new BasePage();
