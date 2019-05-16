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

});