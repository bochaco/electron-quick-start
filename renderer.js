// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const electron = require('electron');
const app = require('electron').remote.app;
const ipc = electron.ipcRenderer;

const customExecPath = [process.execPath, app.getAppPath()];

ipc.on('system-uri-response', (event, resAuthUri) => {
});
