const Base = require('./base.page');

class HomePage {

    get homeTitle() { return $('~home-screen'); }
    get menuButton() { return $('~open-menu'); }
    get formsBtn() { return $('~goto-forms'); }

    async openMenu() {
        await Base.click(this.menuButton);
    }

    async goToForms() {
        await Base.click(this.formsBtn);
    }
}

module.exports = new HomePage();
