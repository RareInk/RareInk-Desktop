# RareInk-Desktop

> The desktop version of the RareInk app. Open source.

## Introduction

**TODO** *Brief introduction to the app.*

Currently runs with:

- Angular v4.3.5 (with Angular CLI)
- Electron v1.7.5
- electron-builder v19.27.7

### Getting Started

Clone this repository locally:

``` bash
$ git clone https://github.com/RareInk/RareInk-Desktop.git
```

Install dependencies with npm:

``` bash
$ npm install
```

There is an issue with `yarn` and `node_modules` that are only used in electron on the backend when the application is built by the packager. Please use `npm` as dependencies manager.

If you want to generate Angular components with Angular CLI, you **MUST** install `@angular/cli` in npm global context. Please follow [the Angular CLI documentation](https://github.com/angular/angular-cli) if you have used an older version of the Angular CLI before.

``` bash
npm install -g @angular/cli
```

### To build for development

You will need two terminal windows.

```bash
# in a terminal window
$ npm start

# in another terminal window
$ npm run electron:serve
```

Voila! You can now run RareInk in your local development environment, with hot reload too!

The Angular component contains an example of Electron and NodeJS native lib import. See [Use NodeJS Native libraries](#use-nodejs-native-libraries) if you want to import other native libraries in your project.

### To build for production

* Using development variables (environments/index.ts): `npm run electron:dev`
* Using production variables (environments/index.prod.ts): `npm run electron:prod`

Your built files are in the `/dist` folder.

### Included Commands

|Command | Description |
| -- | -- |
| `npm run start:web` | Execute the app in the browser. |
| `npm run electron:linux` | Builds the app and creates an executable for Linux. |
| `npm run electron:windows` | Builds the app and creates an executable for 32-bit and 64-bit Windows systems. |
| `npm run electron:mac` | Builds the app and creates an executable for macOS. |

**Your application is optimised. Only the files of /dist folder are included in the executable.**

### Use NodeJS Native libraries

Angular CLI doesn't seem to be able to import nodeJS native libs or electron libs at compile time (Webpack error). This is (one of) the reason why webpack.config was ejected of ng-cli.
If you need to use NodeJS native libraries, you **MUST** add it manually in the file `webpack.config.js` in root folder :

```javascript
  "externals": {
    "electron": 'require(\'electron\')',
    "child_process": 'require(\'child_process\')',
    "fs": 'require(\'fs\')'
    ...
  },
```

Notice that all NodeJS v7 native libs are already added in this sample. Feel free to remove those you don't need.

### Browser mode

To run the app in your browser, run `npm run start:web`.

Note that you can't use Electron or NodeJS native libraries in this case. Please check `providers/electron.service.ts` to watch how conditional import of electron/Native libraries is done.

### Execute E2E tests

You can find end-to-end tests in /e2e folder.

```bash
# First, start a web server on port 4200
$ npm run start:web

# Then in another terminal window, launch Protractor (E2E framework)
$ npm run e2e
```

## Contributors

# Contributors

[<img alt="Resi Respati" src="https://avatars2.githubusercontent.com/u/5663877?v=3&s=117" width="117">](https://github.com/resir014) | [<img alt="Mhyre" src="https://avatars2.githubusercontent.com/u/30327817?v=3&s=117" width="117">](https://github.com/eryhM)
| --- | --- |
| [Resi Respati](https://github.com/resir014) | [Mhyre](https://github.com/eryhM) |

## Special thanks

* Maxime GRIS ([angular-electron](https://github.com/maximegris/angular-electron) starter kit)
