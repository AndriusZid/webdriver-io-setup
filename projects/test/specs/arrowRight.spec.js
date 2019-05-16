describe('Test Up arrow', () => {
    it('Should test if right works properly', () => {
      browser.url('https://4ark.me/2048/');
      browser.waitForVisible('.tile.new-tile');
      browser.localStorage('POST', {key: 'gameState', value: '{"cell":[{"val":4,"index":0},{"val":2,"index":1},{"val":0,"index":2},{"val":2,"index":3},{"val":0,"index":4},{"val":0,"index":5},{"val":0,"index":6},{"val":0,"index":7},{"val":0,"index":8},{"val":0,"index":9},{"val":0,"index":10},{"val":0,"index":11},{"val":0,"index":12},{"val":0,"index":13},{"val":0,"index":14},{"val":0,"index":15}],"socre":4}'});

      browser.refresh();
      browser.pause(500);

      // Set the values to be able to test arrow up
      browser.keys("Right arrow");
      browser.pause(500);

      const gameState = browser.localStorage('GET', 'gameState');
      const gameStateObj = JSON.parse(gameState.value);

      expect(gameStateObj.socre).toBe(8, 'current score equal to 8');
      expect(gameStateObj.cell[2].val).toBe(4, 'should be 4');
      expect(gameStateObj.cell[3].val).toBe(4, 'should add up to 4');

      expect(browser.$$('.tile').length).toBe(3, 'should show three tiles');
      expect(browser.$$('.tile.new-tile').length).toBe(2, 'should appear two new');
    })
  })