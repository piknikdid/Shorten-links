(function () {
    var App = function () {
        /**
         * Display error message if something is wrong
         *
         * @param errorMessage
         */
        this.showError = function (errorMessage) {
            var divErr = document.createElement('div');
            divErr.innerHTML = errorMessage;
            divErr.className = "bg-danger";
            document.body.appendChild(div);
        };

        /**
         * Display new link
         * @param link
         */
        this.showNewLink = function (link) {
           var div = document.createElement('div');
            var childEl = document.getElementById('cutter');
            var parrentEL = childEl.parentNode; 
            parrentEL.insertBefore(div, childEl);
            div.className = "container newLink";
            div.innerHTML = link;
        };

        /**
         * Returns submit url
         */
        this.getSubmitUrl = function () {
            return "http://localhost:1337/api/link";
        };

        /**
         * Add click event to submit button
         */
        this.registerLinkEvent = function () {
            var self = this;
            var callback = function (el) {
                debugger;
                var link = new Link(el);
                var result = false;
                var errorMessage;
                if (link.validate()) {
                    var request = link.submit(self.getSubmitUrl());
                    request.done(function(data){
                        self.showNewLink(data);
                    });
                    request.fail(function(data){
                        self.showError(data);
                    });
                } else {
                    errorMessage = "Link is invalid";
                }

                if (errorMessage) {
                    self.showError(errorMessage);
                }
            };

            var el = document.getElementById('cutter');
            var buttonApp = document.getElementById('buttonApp')
            buttonApp.onclick = function() {
                callback(el);
            };
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
           //TODO: Add more validations, check if value is correct URL  
           if(this.linkElement.value){
               return true;
           } else {
                return false;
           }
        };

        /**
         * Send ajax post request
         * return new link on success, false on error
         *
         * @param submitUrl
         * @return string|bool
         */
        this.submit = function (submitUrl) {
            var request = $.post({
                async: false,
                url: submitUrl,
                data: {'link': this.linkElement.value}
            });

            return request;
        };

        this.init();
    }

    var app = new App();
    app.registerLinkEvent();
})();
