import setup from './setup';
const { percySnapshot } = require('@percy/webdriverio')

describe('Testing the static default numbers in Game intro', () => {

    beforeAll(() => {
        browser.url(setup.url);
        browser.waitForVisible('.tile.new-tile');
    });

    it('2 tiles have values as 2 by default.', () => {
        const tileContainer = browser.$('.tile-container');
        const tile1 = tileContainer.$$('div')[0].getText();
        expect(tile1).toBe('2', "Tile 1 value is not 2.");
        const tile2 = tileContainer.$$('div')[1].getText();
        expect(tile2).toBe('2', "Tile 2 value is not 2.");
        expect(tileContainer.$$('[data-val="2"]').length).toBe(2, 
            "There are incorrect number of tiles of their values are incorrect.");
    });

    it('There are displayed only 2 tiles by default.', () => {
        const tileContainer = browser.$('.tile-container');
        const tileCount = tileContainer.$$('div').length;
        expect(tileCount).toBe(2, "There are different number of tiles than 2 by default.");
    });

});