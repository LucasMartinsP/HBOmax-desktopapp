const { app, BrowserWindow} = require('electron');
let mainWindow;

app.on('ready', () =>{

    mainWindow = new BrowserWindow({show:   false});
    mainWindow.maximize();
    mainWindow.show();

    mainWindow.loadURL(`https://play.hbomax.com/`)

})
