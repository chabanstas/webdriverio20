/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    //class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    get Closebtn () {
        return $('button[aria-label="close and deny"][class$="jRrWoh"]');
    }

    open (path) {
        return browser.url(`${path}`)
    }

    async getTitle(title){
        await expect(browser).toHaveTitle(title);
    }

    async getUrl(url){
        await expect(browser).toHaveUrl(url);
    }

    async CloseAndDenycl() {
        await this.Closebtn.click();
    }
}

//module.exports = new Page();