import setup from './setup';
const { percySnapshot } = require('@percy/webdriverio')

describe('Testing the static text in Game intro', () => {

    beforeAll(() => {
        browser.url(setup.url);
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

    it('Should display score from local storrage correctly', () => {
        const resetButton = browser.$('.restart-btn');
        browser.localStorage('POST', {key: 'gameState', value: '{"cell":[{"val":4,"index":0},{"val":8,"index":1},{"val":2,"index":2},{"val":2,"index":3},{"val":2,"index":4},{"val":8,"index":5},{"val":32,"index":6},{"val":4,"index":7},{"val":0,"index":8},{"val":0,"index":9},{"val":0,"index":10},{"val":0,"index":11},{"val":0,"index":12},{"val":0,"index":13},{"val":2,"index":14},{"val":0,"index":15}],"socre":92}'});
        browser.refresh();

        const score = browser.$('.score').getText();
        expect(score).toBe('92');
        resetButton.click(); // Reset
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
});