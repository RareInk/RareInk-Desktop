"use strict";

var packager = require('electron-packager');
const builder = require('electron-builder');
const pkg = require('../package.json');
const argv = require('minimist')(process.argv.slice(1));

const appName = argv.name || pkg.name;
const buildVersion = pkg.version || '1.0';
const shouldUseAsar = argv.asar || false;
const shouldBuildAll = argv.all || false;
const arch = argv.arch || 'all';
const Platform = builder.Platform;

const DEFAULT_OPTS = {
  appId: 'com.RareInk.RareInkDesktop',
  files: 'dist/**/*',
  directories: {
    output: './app-builds'
  },
  win: {
    target: [
      {
        target: 'zip',
        arch: ['x64', 'ia32']
      }
    ]
  }
};

const buildPlatform = () => {
  switch (argv.platform) {
    case 'linux': {
      return Platform.LINUX.createTarget();
    }
    case 'win': {
      return Platform.WINDOWS.createTarget();
    }
    case 'darwin': {
      return Platform.MAC.createTarget();
    }
    default: {
      // Windows as fallback.
      return Platform.WINDOWS.createTarget();
    }
  }
};

builder.build({
  targets: buildPlatform(),
  config: DEFAULT_OPTS
}).then(() => {
  console.log('Application packaged successfully!');
}).catch((err) => {
  console.error(err);
});
