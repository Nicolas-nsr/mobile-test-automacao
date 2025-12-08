const Base = require('./base.page');

class LoginPage {

    get emailInput() { return $('~input-email'); }
    get passwordInput() { return $('~input-password'); }
    get loginBtn() { return $('~button-login'); }
    
    get errorMessage() { return $('~error-message'); }
    get signupLink() { return $('~button-sign-up'); }

    async login(email, password) {
        await Base.type(this.emailInput, email);
        await Base.type(this.passwordInput, password);
        await Base.click(this.loginBtn);
    }

    async goToSignup() {
        await Base.click(this.signupLink);
    }
}

module.exports = new LoginPage();
