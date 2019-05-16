const { percySnapshot } = require('@percy/webdriverio')

describe('Testing the static text in Game intro', () => {

    beforeAll(() => {
        browser.url('https://4ark.me/2048/');
        browser.waitForVisible('.tile.new-tile');
    });

    it('Title 2048 text is correct.', () => {
        const title = browser.$('.title').getText();
        expect(title).toBe('2048');
    });

    //SCORE CONTAINER
    it('Score container text is correct.', () => {
        const scoreContainer = browser.$('.score-container').getText();
        const newScore = scoreContainer.substring(0, 5);
        expect(newScore).toBe('SCORE');
    });
  
    it('Score container value is correct.', () => {
        const scoreContainer = browser.$('.score-container').getText();
        const newScore = scoreContainer.substring(6);
        expect(newScore).toBe('0');
    });

    //BEST CONTAINER
    it('Best container text is correct.', () => {
        const bestContainer = browser.$('.best-container').getText();
        const newScore = bestContainer.substring(0, 4);
        expect(newScore).toBe('BEST');
    });
  
    it('Best container value is correct.', () => {
        const bestContainer = browser.$('.best-container').getText();
        const newScore = bestContainer.substring(5);
        expect(newScore).toBe('0');
    });

    it('2 tiles have values as 2 by default.', () => {
        const tileContainer = browser.$('.tile-container');
        const tile1 = tileContainer.$$('div')[0].getText();
        expect(tile1).toBe('2');
        const tile2 = tileContainer.$$('div')[1].getText();
        expect(tile2).toBe('2');
    });

    it('There are displayed only 2 tiles.', () => {
        const tileContainer = browser.$('.tile-container');
        const tileCount = tileContainer.$$('div').length;
        expect(tileCount).toBe(2);
    });

});