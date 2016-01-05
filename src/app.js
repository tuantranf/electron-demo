////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

/**
 * Main process
 */
var app = require('app'),
    ipc = require('ipc'),
    BrowserWindow = require('browser-window');

var mainWindow = null,
    insertWindow = null,
    sendWindow = null;

function createInsertWindow() {
    insertWindow = new BrowserWindow({
        width: 640,
        height: 480,
        show: false
    });

    insertWindow.loadUrl('file://' + __dirname + '/windows/insert/insert.html');

    insertWindow.on('closed',function() {
        insertWindow = null;
    });
}

function createSendWindow() {
    sendWindow = new BrowserWindow({
        width: 640,
        height: 480,
        show: false
    });

    sendWindow.loadUrl('file://' + __dirname + '/windows/send/send.html');

    sendWindow.on('closed',function() {
        sendWindow = null;
    });
}

app.on('ready', function() {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 768
    });

    mainWindow.loadUrl('file://' + __dirname + '/windows/main/main.html');
    mainWindow.openDevTools();

    ipc.on('toggle-insert-view', function() {
        if(!insertWindow) {
            createInsertWindow();
        }

        return insertWindow.isVisible() ? insertWindow.hide() : insertWindow.show();
    });

    ipc.on('toggle-send-view', function() {
        if(!sendWindow) {
            createSendWindow();
        }

        return sendWindow.isVisible() ? sendWindow.hide() : sendWindow.show();
    });
});
