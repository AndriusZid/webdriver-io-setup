import util from 'gulp-util';
import selenium from 'selenium-standalone';

const SELENIUM_VERSION = '2.53.1';
const CHROME_DRIVER_VERSION = '2.37';

export default async function startSeleniumServer() {
  return new Promise((resolve, reject) => {
    selenium.start(
      {
        version: SELENIUM_VERSION,
        drivers: {
          chrome: {
            version: CHROME_DRIVER_VERSION,
            arch: process.arch,
            baseURL: 'https://chromedriver.storage.googleapis.com',
          },
        },
      },
      (startupError, server) => {
        if (!startupError) {
          util.log('Started selenium standalone server');
          resolve(server);
          return;
        }

        if (!/^Missing .*?(server\.jar|driver)$/i.test(startupError.message)) {
          // no server jar file?
          reject(startupError);
          return;
        }

        util.log('Installing Selenium standalone server');
        selenium.install(
          {
            version: SELENIUM_VERSION,
            baseURL: 'https://selenium-release.storage.googleapis.com',
            drivers: {
              chrome: {
                version: CHROME_DRIVER_VERSION,
                arch: process.arch,
                baseURL: 'https://chromedriver.storage.googleapis.com',
              },
            },
          },
          async (err) => {
            if (err) {
              reject(err);
              return;
            }

            resolve(await startSeleniumServer());
          },
        );
      },
    );
  });
}