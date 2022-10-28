
const Page = require('./page');
const assert = require('assert')

class MainHeaderPage extends Page {
    
    get menuSection () {
        return $('[class="sc-14c941d7-7 hhCIhu"]');
    }

    get ProductsMS(){
        return $('//span[text()="Products"]');
    }

    get NetworkMS(){
        return $('a[href="/solutions/global-ip-network"][class*=fVDMEa]');
    }

    get elem1FromOpenMS () {
        return $('div>[href="/products/sip-trunks"]');
    }

    get TalkToExpertbt () {
        return $('[class*="fVDMEa"][href="/contact-us"]');
    }

    get SignIpbt () {
        return $('ul>li>div[class="sc-5d3a275a-0 eKznVb"] [href="/sign-up"]');
    }

    get CallUsbt () {
        return $('[type="button"][class$="bJzgmA"]')
    }

    get SupportCenterLink () {
        return $('header [href="https://support.telnyx.com/en/"]')
    }

    get LogInLink () {
        return $('header [href="https://portal.telnyx.com/"]')
    }

    open () {
        return super.open('https://telnyx.com/');
    }

    async MSisDispInViewport() {
        assert.equal(await this.menuSection.isDisplayedInViewport(), true); 
    }

    async elem1FromOpenMSisDisplayed(){
        assert.equal(await this.elem1FromOpenMS.isDisplayed(), true); 
    }

    async mouseHoverProductsMS(){
        await this.ProductsMS.moveTo(450,200);
    }

    async TalkToExpertIsClickable () {
        assert.equal(await this.TalkToExpertbt.isClickable(), true); 
    }

    async SignUpIsClickable () {
        assert.equal(await this.SignIpbt.isClickable(), true); 
    }

    async CallUsIsDispInViewport() {
        assert.equal(await this.CallUsbt.isDisplayedInViewport(), true); 
    }

    async SupportCenterIsDispInViewport () {
        assert.equal(await this.SupportCenterLink.isDisplayedInViewport(), true); 
    }

    async LogInIsDispInViewport () {
        assert.equal(await this.LogInLink.isDisplayedInViewport(), true); 
    }

    async ProductsMSIsFocused () {

        assert.equal(await this.ProductsMS.isFocused(), false); 
        this.ProductsMS.click();
        assert.notEqual(await this.ProductsMS.isFocused(), true); 
    }

    async NetworkMSIsFocused () {

        assert.equal(await this.NetworkMS.isFocused(), false); 
        this.NetworkMS.click();
        assert.notEqual(await this.NetworkMS.isFocused(), true); 
    }
}

module.exports = new MainHeaderPage();
