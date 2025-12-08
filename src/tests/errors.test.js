const FormsPage = require('../pages/forms.page');

describe('Mensagens de Erro', () => {

    it('Deve exibir erro ao enviar campo vazio', async () => {
        await FormsPage.open();
        await FormsPage.submitEmpty();
        await expect(FormsPage.errorMessage).toBeDisplayed();
    });

    it('Deve validar texto de erro específico', async () => {
        await FormsPage.open();
        await FormsPage.submitEmpty();
        const text = await FormsPage.errorMessage.getText();
        expect(text).toContain('Please enter a message');
    });

});
