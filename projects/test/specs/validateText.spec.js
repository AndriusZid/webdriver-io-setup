const { percySnapshot } = require('@percy/webdriverio')

describe('Testing the static text in Game intro', () => {

    beforeAll(() => {
        browser.url('https://4ark.me/2048/');
        browser.waitForVisible('.tile.new-tile');
    });

    it('Title 2048 text is correct.', () => {
        const title = browser.$('.title').getText();
        expect(title).toBe('2048', "Title should be 2048.");
    });

    //SCORE CONTAINER
    it('Score container text is correct.', () => {
        const scoreContainer = browser.$('.score-container').getText();
        const newScore = scoreContainer.substring(0, 5);
        expect(newScore).toBe('SCORE', "Score title is incorrect");
    });
  
    it('Score container default value is correct.', () => {
        const scoreContainer = browser.$('.score-container').getText();
        const newScore = scoreContainer.substring(6);
        expect(newScore).toBe('0', "Score default value is incorrect");
    });

    //BEST CONTAINER
    it('Best container text is correct.', () => {
        const bestContainer = browser.$('.best-container').getText();
        const newScore = bestContainer.substring(0, 4);
        expect(newScore).toBe('BEST', "Best title is incorrect");
    });
  
    it('Best container default value is correct.', () => {
        const bestContainer = browser.$('.best-container').getText();
        const newScore = bestContainer.substring(5);
        expect(newScore).toBe('0', "Best default value is incorrect");
    });

    it('2 tiles have values as 2 by default.', () => {
        const tileContainer = browser.$('.tile-container');
        const tile1 = tileContainer.$$('div')[0].getText();
        expect(tile1).toBe('2', "Tile 1 value is not 2.");
        const tile2 = tileContainer.$$('div')[1].getText();
        expect(tile2).toBe('2', "Tile 2 value is not 2.");
    });

    it('There are displayed only 2 tiles by default.', () => {
        const tileContainer = browser.$('.tile-container');
        const tileCount = tileContainer.$$('div').length;
        expect(tileCount).toBe(2, "There are different number of tiles than 2 by default.");
    });

});