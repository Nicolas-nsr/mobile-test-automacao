const LoginPage = require('../pages/login.page');
const HomePage = require('../pages/home.page');

describe('Login - Native Demo App', () => {

    it('Deve realizar login com sucesso', async () => {
        await LoginPage.login('bob@example.com', '10203040');
        await expect(HomePage.homeTitle).toBeDisplayed();
    });

    it('Não deve logar com credenciais inválidas', async () => {
        await LoginPage.login('email@errado.com', 'senhaerrada');
        await expect(LoginPage.errorMessage).toBeDisplayed();
    });

});
