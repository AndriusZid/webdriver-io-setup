const { percySnapshot } = require('@percy/webdriverio')

describe('Testing the static text in Game intro', () => {

    beforeAll(() => {
        browser.url('https://4ark.me/2048/');
        browser.pause(1000);
    });

    it('Game intro should have the right text', () => {
        const subtitle = browser.$('.subtitle').getText();
        expect(subtitle).toBe('Play 2048 Game Online');

        const subtitleColor = browser.$('.subtitle').getCssProperty('color');
        expect(subtitleColor.parsed.hex).toBe('#776e65');
    });

    it('Text above game should be the same', () => {
        const textAboveGame = browser.$('.above-game').getText();
        expect(textAboveGame).toBe('Join the numbers and get to the 2048 tile!');

        const aboveGameTextColor = browser.$('.above-game').getCssProperty('color');
        expect(aboveGameTextColor.parsed.hex).toBe('#776e65', 'Text above game color is #776e65');
    })

    it ('should display properly New Game button', () => {
        const newGameButton = browser.$('.restart-btn').getText();
        expect(newGameButton).toBe('New Game');
        percySnapshot(browser, 'Initial texts and colors');
        browser.pause(10000);
    })
});