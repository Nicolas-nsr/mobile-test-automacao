const { default: allure } = require('@wdio/allure-reporter').default;

class AllureSteps {

    step(name, fn) {
        return allure.startStep(name, async () => {
            try {
                const result = await fn();
                allure.endStep('passed');
                return result;
            } catch (error) {
                allure.addAttachment(
                    'Erro',
                    error.stack || error.message,
                    'text/plain'
                );

                // Screenshot automático em caso de erro
                await this.takeScreenshot(`Erro - ${name}`);

                allure.endStep('failed');
                throw error;
            }
        });
    }

    log(message) {
        allure.addStep(message);
    }

    async takeScreenshot(name = 'screenshot') {
        const screenshot = await browser.takeScreenshot();
        allure.addAttachment(name, Buffer.from(screenshot, 'base64'), 'image/png');
    }

    async stepScreenshot(name = 'passo') {
        const shot = await browser.takeScreenshot();
        allure.addAttachment(`Screenshot - ${name}`, Buffer.from(shot, 'base64'), 'image/png');
    }
}

module.exports = new AllureSteps();
