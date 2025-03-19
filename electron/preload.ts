import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  sendMessage: (message: string) => ipcRenderer.send('message', message),
  onReply: (callback: (event: Electron.IpcRendererEvent, arg: string) => void) =>
    ipcRenderer.on('reply', callback)
})