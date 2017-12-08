import { app, BrowserWindow } from 'electron';
import setMainMenu from './menu';
import initMainListener from './listeners';
import { isDevelopment } from '../common/utils/platform';

// Set Electron globals here.
global.platform = process.platform;

// Global reference to mainWindow
// Necessary to prevent win from being garbage collected
let win: Electron.BrowserWindow | null;

// Install additional extensions to the Electron Devtools
const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = [
    'REACT_DEVELOPER_TOOLS',
    'REDUX_DEVTOOLS'
  ];

  return Promise
    .all(extensions.map(name => installer.default(installer[name], forceDownload)))
    .catch(console.log);
};

async function createMainWindow() {
  // const electronScreen = screen;
  // const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Construct new BrowserWindow
  const window = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'RareInk'
  });

  // Set url for `win`
    // points to `webpack-dev-server` in development
    // points to `index.html` in production
  const url = isDevelopment()
    ? `http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`
    : `file://${__dirname}/index.html`;

  if (isDevelopment()) {
    await installExtensions();
    window.webContents.openDevTools();
  }

  window.loadURL(url);

  // Build the application main menu.
  setMainMenu(window);

  window.on('closed', () => {
    win = null;
  });

  window.webContents.on('devtools-opened', () => {
    window.focus();
    setImmediate(() => {
      window.focus();
    });
  });

  // Initialise the ipcMain listeners referencing the window object we created.
  initMainListener(window);

  return window;
}

// Quit application when all windows are closed
app.on('window-all-closed', () => {
  // On macOS it is common for applications to stay open
  // until the user explicitly quits
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', async () => {
  // On macOS it is common to re-create a window
  // even after all windows have been closed
  if (win === null) win = await createMainWindow();
});

// Create main BrowserWindow when electron is ready
app.on('ready', async () => {
  win = await createMainWindow();
});
