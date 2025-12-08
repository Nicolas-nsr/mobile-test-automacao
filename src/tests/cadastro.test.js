const LoginPage = require('../pages/login.page');
const SignupPage = require('../pages/signup.page');
import { expect } from 'chai';

describe('Cadastro de usuário', () => {

    it('Deve cadastrar novo usuário com sucesso', async () => {
        await LoginPage.goToSignup();
        await SignupPage.register('Nicolas', 'nicolas@example.com', '12345678');
        await expect(SignupPage.successMessage).toBeDisplayed();
    });

    it('Deve exibir erro ao tentar cadastrar sem preencher os campos', async () => {
        await LoginPage.goToSignup();
        await SignupPage.submitEmptyForm();
        await expect(SignupPage.errorMessage).toBeDisplayed();
    });

});
