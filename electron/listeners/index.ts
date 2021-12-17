import { ipcMain } from 'electron';
import IpcMainEvent = Electron.IpcMainEvent;

ipcMain.on('send-hello',(event:IpcMainEvent, args)=>{

    event.reply('reply','This is the pong');

});