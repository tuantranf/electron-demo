////////
// This sample is published as part of the blog article at www.toptal.com/blog
// Visit www.toptal.com/blog and subscribe to our newsletter to read great posts
////////

var remote = require('remote'),
    remoteIpc = remote.require('ipc');

angular
    .module('SendView', ['Utils'])
    .controller('SendCtrl', ['Storage', '$scope', function(Storage, scope) {
        var vm = this;

        vm.loaded = false;
        vm.formData = {};

        function init() {
            // disable formfields if db is not ready
            vm.loaded = false;
            // init the Storage so we can save the docs
            Storage
                .init()
                .then(function() {
                    vm.loaded = true;
                });
        }

        //1. The send button will call this method
        function sendMail = {
            $mdToast.show(
                $mdToast.simple()
                    .content('Thanks for your Message ' + this.contactName + ' You Rock!')
                    .position($scope.getToastPosition())
                    .hideDelay(3000)
            );
        };


        init();
        remoteIpc.on('reload-send-view', init);
    }]);
