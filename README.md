# RareInk-Desktop

> The desktop version of the RareInk app. Open source.

## Introduction

**TODO** *Brief introduction to the app.*

Currently runs with:

- `react@^16.0.0`
- `electron@1.7.5`
- `electron-builder@^19.34.1`

## Getting Started

Clone this repository locally:

```bash
git clone https://github.com/RareInk/RareInk-Desktop.git
```

Install dependencies with [yarn](https://yarnpkg.com/en/):

```bash
yarn
```

> **Why Yarn?** Yarn has a stronger lockfile model and fixes most of the issues pre-npm@5. It still supports npm repositories and works well with all the npm goodness that you commonly use.

Thanks to the power of `electron-webpack` this project comes packed with...

* Use of [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) for development
* HMR for both `renderer` and `main` processes
* Use of [`babel-preset-env`](https://github.com/babel/babel-preset-env) that is automatically configured based on your `electron` version
* Use of [`electron-builder`](https://github.com/electron-userland/electron-builder) to package and build a distributable electron application

Make sure to check out [`electron-webpack`'s documentation](https://webpack.electron.build/) for more details.

### Development Scripts

```bash
# run application in development mode
yarn dev

# compile source code and create webpack output
yarn compile

# `yarn compile` & create build with electron-builder
yarn dist

# `yarn compile` & create unpacked build with electron-builder
yarn dist:dir
```
