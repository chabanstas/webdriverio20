
const assert = require('assert')
const Page = require('./page');

class LoginPage extends Page {

    get Telnyxbt () {
        return $('[href="/#/"]');
    }

    get emailField () {
        return $('form[aria-label="loginForm"] input[name="email"]');
    }

    async Telnyxcl () {
        await this.Telnyxbt.click();
    }

    async fillEmailField(text){
        await this.emailField.setValue(text);
    }

    async checkEmailValue(){
        assert.notStrictEqual(await this.emailField.getAttribute('value'), ''); 
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('https://portal.telnyx.com/#/login/sign-in');
    }
}

module.exports = new LoginPage();
