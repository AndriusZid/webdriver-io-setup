import setup from './setup';
const { percySnapshot } = require('@percy/webdriverio')

describe("Test failure", () => {
    beforeAll(() => {
      browser.url(setup.url);
      browser.waitForVisible(".tile.new-tile");
    });
  
    it("Should test if failure message appears when there are no empty tiles", () => {
      browser.localStorage("POST", {
        key: "gameState",
        value:
          '{"cell":[{"val":4,"index":0},{"val":2,"index":1},{"val":4,"index":2},{"val":2,"index":3},{"val":2,"index":4},{"val":4,"index":5},{"val":2,"index":6},{"val":4,"index":7},{"val":4,"index":8},{"val":2,"index":9},{"val":4,"index":10},{"val":2,"index":11},{"val":2,"index":12},{"val":4,"index":13},{"val":2,"index":14},{"val":4,"index":15}],"socre":4}'
      });
  
      browser.refresh();
      browser.pause(500);
  
      browser.keys("Right arrow");
      browser.pause(500);
  
      const gameState = browser.localStorage("GET", "gameState");
      const failureContainer = browser.$('.failure-container').getAttribute('class');
      expect(failureContainer).toContain('action');
  
      expect(browser.$$(".tile").length).toBe(16, "all tiles should be filled");

      browser.pause(10000);
      percySnapshot(browser, 'failure');
      browser.pause(1000);
    });
  });
  