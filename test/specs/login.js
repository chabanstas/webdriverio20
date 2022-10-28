const LoginPage = require('../pageobjects/login.page');

const allureReporter = require('@wdio/allure-reporter').default

const Title = "Login / Telnyx Customer Portal"
const Url = "https://portal.telnyx.com/#/login/sign-in"
const text = "test123"

before('Open the login url', async () => {
    await LoginPage.open();
  });

describe('Telnyx Login page test', () => {
    
    it('Checks if login page has a specific title.', async () => {
        
        await LoginPage.getTitle(Title)
        allureReporter.addFeature('Checks if login page has a specific title.')
    });
    it('Checks if login page is on a specific page.', async () => {
        
        await LoginPage.getUrl(Url)
        allureReporter.addFeature('Checks if login page is on a specific page.')
    });
    it('Checks if the "Telnyx" logo button refreshes the page.', async () => {
        
        await LoginPage.fillEmailField(text);
        await LoginPage.Telnyxcl();
        await LoginPage.checkEmailValue();
        allureReporter.addFeature('Checks if the "Telnyx" logo button refreshes the page.')
    });
});