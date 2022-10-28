const MainFooterPage = require('../pageobjects/main.footer.page');

const allureReporter = require('@wdio/allure-reporter').default

before('Open the main url', async () => {
    await MainFooterPage.open();
    await MainFooterPage.CloseAndDenycl();
    await MainFooterPage.scrollToFooter();
  });
  

describe('Telnyx main page test', () => {
    
    it('should detect if the footer is visible', async () => {
        
        await MainFooterPage.FooterIsDispInViewport();
        allureReporter.addFeature('should detect if the footer is visible')
    });
    
    it('should detect if the LinkedIn link is clickable', async () => {
        
        await MainFooterPage.LinkedinLinkIsCl();
        allureReporter.addFeature('should detect if the LinkedIn link is clickable')
    });

    it('should detect if the Twitter link is clickable', async () => {
        
        await MainFooterPage.TwitterLinkIsCl();
        allureReporter.addFeature('should detect if the Twitter link is clickable')
    });

    it('should detect if the Facebook link is clickable', async () => {
        
        await MainFooterPage.FacebookLinkIsCl();
        allureReporter.addFeature('should detect if the Facebook link is clickable')
    });

    it('should detect if the header menu is visible', async () => {
        
        await MainFooterPage.HeaderMenuIsDispInViewport();
        allureReporter.addFeature('should detect if the header menu is visible')
    });
});