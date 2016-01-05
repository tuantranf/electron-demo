////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

var remote = require('remote'),
    Menu = remote.require('menu');

module.exports = {
    create: function() {
        var appMenu = Menu.buildFromTemplate([
            {
                label: 'Electron',
                submenu: [
                    {
                        label: 'Credits',
                        click: function() {
                            alert('Built with Electron & Loki.js.');
                        }
                    },
                    {
                        type: 'separator'
                    },
                    {
                        label: 'Quit',
                        accelerator: 'CmdOrCtrl+Q',
                        selector: 'terminate:' //osx only
                    }
                ]
            },
            {
                label: 'File',
                submenu: [
                    {
                        label: 'Create Password',
                        accelerator: 'CmdOrCtrl+N',
                        click: function() {
                            // alert('Create new password');
                            ipc.send('toggle-insert-view');
                        }
                    }
                ]
            },
            {
                label: 'Send Mail',
                submenu: [
                    {
                        label: 'Send Mail',
                        accelerator: 'CmdOrCtrl+M',
                        click: function() {
                            // alert('Create new password');
                            ipc.send('toggle-send-view');
                        }
                    }
                ]
            }
        ]);

        Menu.setApplicationMenu(appMenu);
    }
};
