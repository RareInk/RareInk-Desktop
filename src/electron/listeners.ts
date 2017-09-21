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
    if (msg === 'rareink:generic:ping') {
      event.sender.send('ELECTRON_BRIDGE_CLIENT', 'rareink:generic:pong');
    }
    if (msg === 'rareink:window:requestmaximizedstate') {
      // Initial request of the window maximized state. Called during
      // AppComponent initialization.
      if (window.isMaximized()) {
        event.sender.send('ELECTRON_BRIDGE_CLIENT', 'rareink:window:ismaximized');
      } else {
        event.sender.send('ELECTRON_BRIDGE_CLIENT', 'rareink:window:isunmaximized');
      }
    }
    if (msg === 'rareink:window:minimize') {
      window.minimize();
    }
    if (msg === 'rareink:window:maximize') {
      if (window.isMaximized()) {
        window.unmaximize();
        event.sender.send('ELECTRON_BRIDGE_CLIENT', 'rareink:window:isunmaximized');
      } else {
        window.maximize();
        event.sender.send('ELECTRON_BRIDGE_CLIENT', 'rareink:window:ismaximized');
      }
    }
    if (msg === 'rareink:window:close') {
      window.close();
    }
    if (msg === 'rareink:window:togglemenu') {
      // Toggle the application menu.
      const menu = Menu.getApplicationMenu();
      menu.popup(window, {});
    }
  });
}

export default initMainListener;
