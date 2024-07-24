const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
    new BrowserWindow({
        width: 960,
        height: 540,
        fullscreen: true
    }).loadFile('src/index.html');
});