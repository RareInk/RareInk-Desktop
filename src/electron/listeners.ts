import { app, BrowserWindow, ipcMain, Menu } from 'electron';

/**
 * This function hold all Electron IPC listeners.
 *
 * @param {Electron.BrowserWindow} window The window object, in case the event
 *    manipulates it.
 */
function initMainListener(window: Electron.BrowserWindow) {
  ipcMain.on('ELECTRON_BRIDGE_HOST', (event: Electron.Event, msg: any) => {
    console.log(`[ELECTRON_BRIDGE_HOST] ${msg}`);
    if (msg === 'ping') {
      event.sender.send('ELECTRON_BRIDGE_CLIENT', 'pong');
    }
    if (msg === 'rareink:window:toggle-menu') {
      const menu = Menu.getApplicationMenu();
      menu.popup();
    }
    if (msg === 'rareink:window:minimize') {
      window.minimize();
    }
    if (msg === 'rareink:window:maximize') {
      if (window.isMaximized()) {
        window.unmaximize();
      } else {
        window.maximize();
      }
    }
    if (msg === 'rareink:window:close') {
      window.close();
    }
  });
}

export default initMainListener;
