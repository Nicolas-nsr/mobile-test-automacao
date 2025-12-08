const HomePage = require('../pages/home.page');
const MenuPage = require('../pages/menu.page');

describe('Navegação no aplicativo', () => {

    it('Deve navegar entre telas pelo menu lateral', async () => {
        await HomePage.openMenu();
        await MenuPage.goToForms();
        await expect(MenuPage.formsTitle).toBeDisplayed();
    });

    it('Deve retornar para a Home com sucesso', async () => {
        await HomePage.openMenu();
        await MenuPage.goToForms();
        await MenuPage.goHome();
        await expect(HomePage.homeTitle).toBeDisplayed();
    });

});
