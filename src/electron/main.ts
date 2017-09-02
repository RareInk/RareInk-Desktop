import { app, BrowserWindow, ipcMain, screen, Menu } from 'electron';
import setMainMenu from './menu';
import initMainListener from './listeners';
import * as path from 'path';

let win: Electron.BrowserWindow | null;
const args = process.argv.slice(1);
const serve = args.some(val => val === '--serve');
const isWindows = process.platform === 'win32';

if (serve) {
  require('electron-reload')(__dirname, {});
}

/**
 * Creates the browser window.
 */
function createWindow() {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'RareInk',
    autoHideMenuBar: true,
    frame: false
  });

  // and load the index.html of the app.
  win.loadURL(path.join('file://' + __dirname, '../index.html'));

  // Build the application main menu.
  // setMainMenu();

  // Open the DevTools.
  if (serve) {
    win.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });

  // Initialise the ipcMain listeners referencing the window object we created.
  initMainListener(win);
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
  // Catch error
  // throw e;
}
