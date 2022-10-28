const MainHeaderPage = require('../pageobjects/main.header.page');

const allureReporter = require('@wdio/allure-reporter').default

before('Open the main url', async () => {
    await MainHeaderPage.open();
    await MainHeaderPage.CloseAndDenycl();
  });

describe('Telnyx header test', () => {
    it('should detect if the menu section is visible', async () => {
        
        await MainHeaderPage.MSisDispInViewport();
        allureReporter.addFeature('should detect if the menu section is visible')
    });

    it('should detect if the Elastic SIP Trunking section is displayed', async () => {
        
        await MainHeaderPage.mouseHoverProductsMS();
        browser.pause(1000);
        await MainHeaderPage.elem1FromOpenMSisDisplayed();
        browser.pause(1000);
        allureReporter.addFeature('should detect if the Elastic SIP Trunking section is displayed')
    });

    it('should detect if the talk to expert button is clickable', async () => {
        
        await MainHeaderPage.TalkToExpertIsClickable();
        allureReporter.addFeature('should detect if the talk to expert button is clickable')
    });

    it('should detect if the Sign up button is clickable', async () => {
        
        await MainHeaderPage.SignUpIsClickable();
        allureReporter.addFeature('should detect if the Sign up button is clickable')
    });

    it('should detect if the Call Us buttom is visible', async () => {
        
        await MainHeaderPage.CallUsIsDispInViewport();
        allureReporter.addFeature('should detect if the Call Us buttom is visible')
    });

    it('should detect if the Support Center link is visible', async () => {
        
        await MainHeaderPage.SupportCenterIsDispInViewport();
        allureReporter.addFeature('should detect if the Support Center link is visible')
    });

    it('should detect if the Log In link is visible', async () => {
        
        await MainHeaderPage.LogInIsDispInViewport();
        allureReporter.addFeature('should detect if the Log In link is visible')
    });

    it('should detect the focus of the Products section', async () => {
        
        await MainHeaderPage.ProductsMSIsFocused();
        allureReporter.addFeature('should detect the focus of the Products section')
    });

    it('should detect the focus of the Network section', async () => {
        
        await MainHeaderPage.NetworkMSIsFocused();
        allureReporter.addFeature('should detect the focus of the Network section')
    });
});