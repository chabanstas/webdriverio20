const MainPage = require('../pageobjects/main.page');

const allureReporter = require('@wdio/allure-reporter').default

const Title = "Telnyx | Communication APIs for Seamless Connectivity"
const Url = "https://telnyx.com/"
const NatworkUrl = "https://telnyx.com/solutions/global-ip-network"

before('Open the main url', async () => {
    await MainPage.open();
    await MainPage.CloseAndDenycl();
  });

describe('Telnyx main page test', () => {
    it('Checks if main page has a specific title.', async () => {
        
        await MainPage.getTitle(Title)
        allureReporter.addFeature('Checks if main page has a specific title.')
    });
    it('Checks if main page is on a specific page.', async () => {
        
        await MainPage.getUrl(Url)
        allureReporter.addFeature('Checks if main page is on a specific page.')
    });
    it('Checks if "Telnyx" logo button returns to the main page.', async () => {
        
        await MainPage.goToNetworkPage();
        await MainPage.getUrl(NatworkUrl);
        browser.pause(1000);
        await MainPage.Telnyxcl();
        await MainPage.getUrl(Url)
        allureReporter.addFeature('Checks if "Telnyx" logo button returns to the main page.')
    });
});