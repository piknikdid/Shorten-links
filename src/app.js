(function () {
    var App = function () {
        /**
         * Display error message if something is wrong
         *
         * @param errorMessage
         */
        this.showError = function (errorMessage) {
            //TODO
        };

        /**
         * Display new link
         * @param link
         */
        this.showNewLink = function (link) {
            //TODO
        };

        /**
         * Returns submit url
         */
        this.getSubmitUrl = function () {
            //TODO
            return;
        };

        /**
         * Add click event to submit button
         */
        this.registerLinkEvent = function () {
            var self = this;
            var callback = function (el) {
                var link = new Link(el);
                var result = false;
                var errorMessage;
                if (link.validate()) {
                    result = link.submit(self.getSubmitUrl());
                    console.log('aaa');//Be careful with this inside callback
                    if (!result) {
                        errorMessage = "Unable to submit";
                    }
                } else {
                    errorMessage = "Link is invalid";
                }

                if (result) {
                    self.showNewLink(result); //Be careful with this inside callback
                } else {
                    self.showError(errorMessage); //Be careful with this inside callback
                }
            };

            var el = document.getElementById('cutter');
            var buttonApp = document.getElementById('buttonApp')
            buttonApp.onclick = function() {
                callback(el);
            };
            //TODO: Add callback to click event of submit button
        };
    };

    var Link = function (el) {
        this.linkElement = el;

        this.init = function () {
            //TODO: Init link element
        };

        /**
         * Validate data in linkElement for correct http(s) link
         *
         * @return bool
         */
        this.validate = function () {
            
           if(this.linkElement.value){
               return true;
           }
            else{
                return false;
            }
            //TODO
        };

        /**
         * Send ajax post request
         * return new link on success, false on error
         *
         * @param submitUrl
         * @return string|bool
         */
        this.submit = function (submitUrl) {
            //TODO
        };

        this.init();
    };

    var app = new App();
    app.registerLinkEvent();
})();
