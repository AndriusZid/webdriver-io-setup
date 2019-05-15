const assert = require('assert');

describe('google page', () => {
    it('should have the right title', () => {
        browser.url('https://google.com');
        const title = browser.getTitle();
        assert.equal(title, 'Google');

        browser.$('.gLFyf.gsfi').setValue('webdriver io');
        browser.$('.gNO89b').waitForDisplayed(2000);
        browser.$('.gNO89b').click();
        browser.$('a[href="https://webdriver.io/"').waitForExist(2000);
    });
});