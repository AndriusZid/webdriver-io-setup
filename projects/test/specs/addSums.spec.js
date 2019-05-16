describe('sum cubes', () => {
    beforeAll(() => {
        browser.url('https://4ark.me/2048/');
        browser.waitForVisible('.tile.new-tile');
    });

    it('should sum all cubes', () => {
        browser.localStorage('POST', { 
            key: 'gameState',
            value: '{"cell":[{"val":2,"index":0},{"val":2,"index":1},{"val":4,"index":2},{"val":4,"index":3},{"val":8,"index":4},{"val":8,"index":5},{"val":16,"index":6},{"val":16,"index":7},{"val":32,"index":8},{"val":32,"index":9},{"val":64,"index":10},{"val":64,"index":11},{"val":128,"index":12},{"val":128,"index":13},{"val":256,"index":14},{"val":256,"index":15}],"socre":4}'
        });
        browser.refresh();
        browser.pause(500);

        expect(browser.$$('.tile.new-tile').length).toBe(16, 'should appear 16 cubes');

        browser.keys("Right arrow");
        browser.pause(500);

        const gameState = browser.localStorage('GET', 'gameState');
        const gameStateObj = JSON.parse(gameState.value);

        // testing local storage updates
        expect(gameStateObj.socre).toBe(36, 'current score equal to 36');
        expect(gameStateObj.cell[2].val).toBe(4, 'should add up to 4');
        expect(gameStateObj.cell[3].val).toBe(8, 'should add up to 8');
        expect(gameStateObj.cell[6].val).toBe(16, 'should add up to 16');
        expect(gameStateObj.cell[7].val).toBe(32, 'should add up to 32');
        expect(gameStateObj.cell[10].val).toBe(64, 'should add up to 64');
        expect(gameStateObj.cell[11].val).toBe(128, 'should add up to 128');
        expect(gameStateObj.cell[14].val).toBe(256, 'should add up to 256');
        expect(gameStateObj.cell[15].val).toBe(512, 'should add up to 512');

        // check if UI updates with sum cubes
        expect(browser.isVisible('.tile[data-val="4"]')).toBe(true);
        expect(browser.isVisible('.tile[data-val="8"]')).toBe(true);
        expect(browser.isVisible('.tile[data-val="16"]')).toBe(true);
        expect(browser.isVisible('.tile[data-val="32"]')).toBe(true);
        expect(browser.isVisible('.tile[data-val="64"]')).toBe(true);
        expect(browser.isVisible('.tile[data-val="128"]')).toBe(true);
        expect(browser.isVisible('.tile[data-val="256"]')).toBe(true);
        expect(browser.isVisible('.tile[data-val="512"]')).toBe(true);
        expect(browser.isVisible('.tile[data-val="2"]')).toBe(true, 'should add new cube');

        // check if UI has right text
        expect(browser.getText('.tile[data-val="4"]')).toBe('4');
        expect(browser.getText('.tile[data-val="8"]')).toBe('8');
        expect(browser.getText('.tile[data-val="16"]')).toBe('16');
        expect(browser.getText('.tile[data-val="32"]')).toBe('32');
        expect(browser.getText('.tile[data-val="64"]')).toBe('64');
        expect(browser.getText('.tile[data-val="128"]')).toBe('128');
        expect(browser.getText('.tile[data-val="256"]')).toBe('256');
        expect(browser.getText('.tile[data-val="512"]')).toBe('512');
        expect(browser.getText('.tile[data-val="2"]')).toBe('2', 'should add new cube');
    });
});