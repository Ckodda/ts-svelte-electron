import { app, BrowserWindow } from 'electron';


require('electron-reload')(__dirname);

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 680,
        height: 680,
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false,
        }
    });

    const indexHTML = './public/index.html';
    win.loadFile(indexHTML).then(() => {
        console.log('File loaded');
    });
});

import './listeners';