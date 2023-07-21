import { contextBridge, ipcRenderer } from 'electron'

type Callback = <TArgs>(...args: TArgs[]) => void
type Listener = <TArgs>(
  event: Electron.IpcRendererEvent,
  ...args: TArgs[]
) => void

const methods = {
  ipcRenderer: {
    send<TData>(channel: string, data?: TData) {
      ipcRenderer.send(channel, data)
    },
    on(channel: string, func: Callback) {
      const listener: Listener = (event, ...args) => func(...args)
      ipcRenderer.on(channel, listener)
      return listener
    },
    once(channel: string, func: Callback) {
      const listener: Listener = (event, ...args) => func(...args)
      ipcRenderer.once(channel, listener)
      return listener
    },
    invoke: <TReturn, TData>(channel: string, data?: TData) => {
      return ipcRenderer.invoke(channel, data) as Promise<TReturn>
    },
    removeListener(channel: string, listener: Listener) {
      ipcRenderer.removeListener(channel, listener)
    },
  },
}

contextBridge.exposeInMainWorld('electron', methods)

export type IpcRendererType = typeof methods
