const { percySnapshot } = require('@percy/webdriverio')

xdescribe('Integration test with visual testing', () => {
    it('Loads the hame page and takes snapshot to compare with previous version site', () => {
      browser.url('https://4ark.me/2048/');
      //percySnapshot(browser, 'gameboard');
      //browser.pause(10000);
      browser.waitForVisible('.tile.new-tile');

      browser.keys("Up arrow");
      browser.keys("Down arrow");
      browser.pause(1000);

      browser.localStorage('POST', {key: 'gameState', value: '{"cell":[{"val":4,"index":0},{"val":8,"index":1},{"val":2,"index":2},{"val":2,"index":3},{"val":2,"index":4},{"val":8,"index":5},{"val":32,"index":6},{"val":4,"index":7},{"val":0,"index":8},{"val":0,"index":9},{"val":0,"index":10},{"val":0,"index":11},{"val":0,"index":12},{"val":0,"index":13},{"val":2,"index":14},{"val":0,"index":15}],"socre":92}'});
  
      browser.pause(1000);  
      browser.refresh();
      browser.pause(1000); 
    })
  })