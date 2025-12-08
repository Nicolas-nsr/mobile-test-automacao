const HomePage = require('../pages/home.page');
const FormsPage = require('../pages/forms.page');

describe('Formulários', () => {

    it('Deve preencher e enviar formulário simples', async () => {
        await HomePage.goToForms();
        await FormsPage.fillSimpleForm('Olá, mundo!');
        await expect(FormsPage.successModal).toBeDisplayed();
    });

    it('Deve preencher formulário completo', async () => {
        await HomePage.goToForms();
        await FormsPage.fillFullForm({
            text: 'Teste avançado',
            switch: true,
            dropdown: 'Appium is awesome'
        });
        await expect(FormsPage.successModal).toBeDisplayed();
    });

});
