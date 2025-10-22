import { app, BrowserWindow } from 'electron'
import path from 'path';
import { isDev } from './util.js';


app.on('ready', () => {
  const mainWindow = new BrowserWindow({});

  if (isDev()) {
    console.log('Development mode: Loading from localhost');
    mainWindow.loadURL('http://localhost:5123');
  } else {
    console.log('Production mode: Loading from dist');
    mainWindow.loadFile(path.join(app.getAppPath(), '/dist-react/index.html'));
  }
});