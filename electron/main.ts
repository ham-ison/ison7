import { app, BrowserWindow } from 'electron'
import * as path from 'node:path'

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      webSecurity: true
    }
  })

  // 开发模式加载 Vite 服务，生产模式加载构建文件
  if (process.env.VITE_DEV_SERVER_URL) {
    // 开发模式下加载 Vite 服务器
    mainWindow.loadURL(process.env.VITE_DEV_SERVER_URL);
    mainWindow.webContents.openDevTools()
  } else {
    mainWindow.loadFile(path.join(__dirname, '../dist/renderer/index.html'))
  }
}

app.whenReady().then(createWindow)