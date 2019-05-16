const { percySnapshot } = require('@percy/webdriverio')

describe('Integration test with visual testing', () => {
    it('Loads the hame page and takes snapshot to compare with previous version site', () => {
      browser.url('https://4ark.me/2048/');
      percySnapshot(browser, 'gameboard');
      browser.pause(10000);
    })
  })