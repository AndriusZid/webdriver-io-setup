import setup from './setup';
const assert = require('assert');

describe('Game reset tests', () => {
    beforeAll(() => {
        browser.url(setup.url);
        browser.pause(1000);
    });

    it('should reset the game when `New Game` is pressed', () => {
        // Arrange
        const resetButton = browser.$('.restart-btn');
        browser.localStorage('POST', {key: 'gameState', value: '{"cell":[{"val":4,"index":0},{"val":8,"index":1},{"val":2,"index":2},{"val":2,"index":3},{"val":2,"index":4},{"val":8,"index":5},{"val":32,"index":6},{"val":4,"index":7},{"val":0,"index":8},{"val":0,"index":9},{"val":0,"index":10},{"val":0,"index":11},{"val":0,"index":12},{"val":0,"index":13},{"val":2,"index":14},{"val":0,"index":15}],"socre":92}'});
        browser.refresh();
        // Act
        resetButton.click();
        // Assert
        const data = browser.localStorage('GET', 'gameState');
        expect(JSON.parse(data.value).cell[0].val).not.toBe(4);
    });

    it('should wipe score when `New Game` is pressed', () => {
        // Arrange
        const resetButton = browser.$('.restart-btn');
        browser.localStorage('POST', {key: 'gameState', value: '{"cell":[{"val":4,"index":0},{"val":8,"index":1},{"val":2,"index":2},{"val":2,"index":3},{"val":2,"index":4},{"val":8,"index":5},{"val":32,"index":6},{"val":4,"index":7},{"val":0,"index":8},{"val":0,"index":9},{"val":0,"index":10},{"val":0,"index":11},{"val":0,"index":12},{"val":0,"index":13},{"val":2,"index":14},{"val":0,"index":15}],"socre":92}'});
        browser.refresh();
        // Act
        resetButton.click();
        // Assert
        const data = browser.localStorage('GET', 'gameState');
        const scores = browser.$$('.score');
        const currentScore = scores[0].getText();
        expect(currentScore).toBe("0");
        expect(JSON.parse(data.value).score).not.toBe(92);
    });

    it('should not wipe `bestScore` when `New Game` is pressed', () => {
        // Arrange
        const resetButton = browser.$('.restart-btn');
        browser.localStorage('POST', {key: 'bestScore', value: '25'});
        browser.refresh();
        // Act
        resetButton.click();
        // Assert
        let scores = browser.$$('.score');
        let bestScore = scores[1].getText();
        expect(bestScore).toBe("25");
    });

    it('should clear table and add two tiles when `New Game` is pressed', () => {
        // Arrange
        const resetButton = browser.$('.restart-btn');
        browser.localStorage('POST', {key: 'gameState', value: '{"cell":[{"val":4,"index":0},{"val":8,"index":1},{"val":2,"index":2},{"val":2,"index":3},{"val":2,"index":4},{"val":8,"index":5},{"val":32,"index":6},{"val":4,"index":7},{"val":0,"index":8},{"val":0,"index":9},{"val":0,"index":10},{"val":0,"index":11},{"val":0,"index":12},{"val":0,"index":13},{"val":2,"index":14},{"val":0,"index":15}],"socre":92}'});
        browser.refresh();
        // Act
        resetButton.click();
        // Assert
        const tiles = browser.$$('.tile');
        expect(tiles.length).toBe(2);
    });
});