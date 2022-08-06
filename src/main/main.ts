import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer';
import {app, BrowserWindow, ipcMain} from 'electron';
import {join} from 'path';

const createWindow = async () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    }
  });

  if (process.env.NODE_ENV === 'development') {
    const rendererPort = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${rendererPort}`);
  }
  else {
    await mainWindow.loadFile(join(app.getAppPath(), 'renderer', 'index.html'));
  }
}


(async () => {
  await app.whenReady()
  await createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
  });

  ipcMain.on('message', (event, message) => {
    console.log(message);
  })

})()

