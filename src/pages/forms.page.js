const Base = require('./base.page');

class FormsPage {

    get formsTitle() { return $('~forms-screen'); }

    // Simple form
    get inputField() { return $('~input-field'); }
    get submitBtn() { return $('~button-submit'); }
    get successModal() { return $('~modal-success'); }
    get errorMessage() { return $('~input-error'); }

    // Full form
    get switchBtn() { return $('~switch'); }
    get dropdownBtn() { return $('~dropdown'); }
    get dropdownOption() { return $('android=new UiSelector().text("Appium is awesome")'); }
    get fullFormSubmit() { return $('~button-submit-full-form'); }

    async fillSimpleForm(text) {
        await Base.type(this.inputField, text);
        await Base.click(this.submitBtn);
    }

    async submitEmpty() {
        await Base.click(this.submitBtn);
    }

    async toggleSwitch(state) {
        const isSelected = await this.switchBtn.getAttribute('checked') === 'true';
        if (isSelected !== state) {
            await Base.click(this.switchBtn);
        }
    }

    async fillFullForm({ text, switch: sw, dropdown }) {
        await Base.type(this.inputField, text);
        
        await this.toggleSwitch(sw);

        await Base.click(this.dropdownBtn);
        await Base.click(this.dropdownOption);

        await Base.click(this.fullFormSubmit);
    }

    async open() {
        // quando precisar abrir diretamente
    }
}

module.exports = new FormsPage();
