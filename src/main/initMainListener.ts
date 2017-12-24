import { ipcMain, Menu } from 'electron';

/**
 * This function hold all Electron IPC listeners.
 *
 * @param {Electron.BrowserWindow} window The window object, in case the event
 *    manipulates it.
 */
function initMainListener(window: Electron.BrowserWindow) {
  ipcMain.on('rareink:generic:ping', (event: Electron.Event) => {
    event.sender.send('rareink:generic:pong');
  });

  ipcMain.on('rareink:generic:initialize', (event: Electron.Event) => {
    // Called during app initialisation.
    if (window.isMaximized()) {
      event.sender.send('rareink:window:ismaximized');
    } else {
      event.sender.send('rareink:window:isunmaximized');
    }
  });

  ipcMain.on('rareink:window:minimize', () => {
    window.minimize();
  });

  ipcMain.on('rareink:window:maximize', (event: Electron.Event) => {
    if (window.isMaximized()) {
      window.unmaximize();
      event.sender.send('rareink:window:isunmaximized');
    } else {
      window.maximize();
      event.sender.send('rareink:window:ismaximized');
    }
  });

  ipcMain.on('rareink:window:close', () => {
    window.close();
  });

  ipcMain.on('rareink:window:togglemenu', () => {
    // Toggle the application menu.
    // TODO: Currently unused. This should be moved to the custom titlebar's renderer process when
    // we finally have one.
    const menu = Menu.getApplicationMenu();
    menu.popup(window, {});
  });

  ipcMain.on('rareink:sidebar:create-project', () => {
    console.log('rareink:sidebar:create-project');
  });
}

export default initMainListener;
