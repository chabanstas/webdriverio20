
const assert = require('assert')
const Page = require('./page');

class MainFooterPage extends Page {

    get LinkedinLink () {
        return $('[href*="linkedin.com"]>span');
    }

    get TelnyxFooter () {
        return $('#__next');
    }

    get TwitterLink () {
        return $('[href*="twitter.com"]>span');
    }

    get FacebookLink () {
        return $('[href*="facebook.com"]>span');
    }

    get HeaderMenu () {
        return $('header[class="sc-6ef4e600-2 gfBKJB"]');
    }

    open () {
        return super.open('https://telnyx.com/');
    }

    async LinkedinLinkIsCl () {
        assert.equal(await this.LinkedinLink.isClickable(), true); 
    }

    async scrollToFooter() {
        await this.TelnyxFooter.scrollIntoView();
    }

    async FooterIsDispInViewport() {
        assert.equal(await this.TelnyxFooter.isDisplayedInViewport(), true); 
    }

    async TwitterLinkIsCl () {
        assert.equal(await this.TwitterLink.isClickable(), true); 
    }

    async FacebookLinkIsCl () {
        assert.equal(await this.FacebookLink.isClickable(), true); 
    }

    async HeaderMenuIsDispInViewport () {
        assert.notEqual(await this.HeaderMenu.isDisplayedInViewport(), true); 
    }
}

module.exports = new MainFooterPage();
