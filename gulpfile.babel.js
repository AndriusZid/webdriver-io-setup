import path from 'path';
import del from 'del';
import gulp from 'gulp';
import util from 'gulp-util';
import webdriver from 'gulp-webdriver';
import { sync as glob } from 'glob';
import { argv } from 'yargs';
import startSeleniumServer from './scripts/startSeleniumServer';
import extractTestFilePattern from './scripts/extractTestFilePattern';
import resolveProjectPaths from './scripts/resolveProjectPaths';

const BASE_PROJECT_DIR = path.join(__dirname, 'projects');

function testTask(done) {
  const project = argv.p || argv.project;

  try {
    const { configPath, projectDir } = resolveProjectPaths(BASE_PROJECT_DIR, project);
    const pattern = extractTestFilePattern(argv.f || argv.files);
    const tests = path.join(projectDir, 'specs', '**', `${pattern}.spec.js`);
    // eslint-disable-next-line
    const config = require(configPath).default;

    if (!glob(tests).length) {
      util.log('No files found with the given pattern');
      done();
      return;
    }

    // removing old reports
    del.sync(`./.reports/${project}`);

    startSeleniumServer().then((server) => {
      gulp
        .src('wdio.conf.js')
        .pipe(webdriver({
          ...config.default,
          ...{
            specs: [tests],
            framework: 'jasmine',
            jasmineNodeOpts: {
              defaultTimeoutInterval: 600000,
              expectationResultHandler(/* passed, assertion */) {},
              grep: null,
              invertGrep: null,
            },
            reporters: ['spec', 'allure', 'junit'],
            reporterOptions: {
              junit: { outputDir: `./.reports/${project}/junit` },
              allure: { outputDir: `./.reports/${project}/allure` },
            },
            screenshotPath: `./.reports/${project}/screenshots`,
            onComplete: () => {
              server.kill();
              done();
            },
          },
        }))
        .on('error', (e) => {
          server.kill();
          done(e);
        });
    });
  } catch (e) {
    done(e);
  }
}

gulp.task('default', ['test']);
gulp.task('test', testTask);