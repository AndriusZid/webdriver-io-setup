# webdriver-io-setup

## Installation

Install node version that is defined in .nvmrc file using nvm [(download here)](https://github.com/coreybutler/nvm-windows/releases)

```
nvm install 10.15.3
nvm use 10.15.3
```

Install npm packages

```
npm install
```

## Run tests

In separate terminal start gecko driver with this command:

```
./geckodriver.exe --port 4444
```

And run test in that browser with this command:
```
npm run test
```
