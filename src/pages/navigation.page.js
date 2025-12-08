const Base = require('./base.page');

class NavigationPage {

    get backBtn() { return $('~nav-back'); }

    async back() {
        await Base.click(this.backBtn);
    }
}

module.exports = new NavigationPage();
