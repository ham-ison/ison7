const { app, BrowserWindow, ipcMain } = require('electron/main')
const path = require('node:path')

const createWindow = () => {

    const win = new BrowserWindow({
        //icon: `${__dirname}/icon.png`,
        //titleBarStyle: 'hidden',
        //frame: false,
        //transparent: true,
        titleBarOverlay: {
             color: '#ff3241',
             symbolColor: '#74ddbe',
             height: 30},
        width: 800, 
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadURL('https://ham-ison.github.io/')
}
app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong')
  createWindow()
})

// quitting the app when no windows are open on non-macOS platforms
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
