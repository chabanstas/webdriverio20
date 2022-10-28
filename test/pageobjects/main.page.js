
const Page = require('./page');

class MainPage extends Page {
   
     get Telnyxbt () {
        return $('#Logo-Dark_svg__Layer_1');
    }

    get NetworkMS () {
        return $('a[href="/solutions/global-ip-network"][class*=fVDMEa]');
    }

    async goToNetworkPage() {
        await this.NetworkMS.click();
    }

    async Telnyxcl() {
        await this.Telnyxbt.click();
    }

    open () {
        return super.open('https://telnyx.com/');
    }
}

module.exports = new MainPage();
