import { app, Menu, BrowserWindow, shell } from 'electron';

const isWindows = process.platform === 'win32';

/**
 * Build the main menu of our app.
 */
function setMainMenu(window: Electron.BrowserWindow) {
  const template: Electron.MenuItemConstructorOptions[] = [
    {
      label: isWindows ? 'File' : app.getName(),
      submenu: [
        {
          label: isWindows ? 'Exit' : `Quit ${app.getName()}`,
          accelerator: isWindows ? 'Alt+F4' : 'CmdOrCtrl+Q',
          click: () => {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        {
          role: 'undo',
          accelerator: 'CmdOrCtrl+Z'
        },
        {
          role: 'redo',
          accelerator: 'CmdOrCtrl+Y'
        },
        {
          type: 'separator'
        },
        {
          role: 'cut',
          accelerator: 'CmdOrCtrl+X'
        },
        {
          role: 'copy',
          accelerator: 'CmdOrCtrl+C'
        },
        {
          role: 'paste',
          accelerator: 'CmdOrCtrl+V'
        },
        {
          role: 'pasteandmatchstyle',
          accelerator: 'CmdOrCtrl+Shift+V'
        },
        {
          role: 'delete'
        },
        {
          role: 'selectall',
          accelerator: 'CmdOrCtrl+A'
        }
      ]
    },
    {
      label: 'View',
      submenu: [
        {role: 'reload'},
        {role: 'forcereload'},
        {role: 'toggledevtools'},
        {type: 'separator'},
        {role: 'resetzoom'},
        {role: 'zoomin'},
        {role: 'zoomout'},
        {type: 'separator'},
        {role: 'togglefullscreen'}
      ]
    },
    {
      role: 'window',
      submenu: [
        {role: 'minimize'},
        {role: 'close'}
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'About RareInk',
          click: () => { window.webContents.send('ELECTRON_BRIDGE_CLIENT', 'rareink:menu:open-about') }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

export default setMainMenu;
