(function () {
    var App = function () {
        /**
         * Display error message if something is wrong
         *
         * @param errorMessage
         */
        this.showError = function (errorMessage) {
            var divErr = document.createElement('div');
            div.innerHTML = errorMessage;
            div.className = "bg-danger";
            document.body.appendChild(div);
            //TODO: Create new div element on top of our input, add some css styles (red border, red text color) to make more like error message
            //and insert errorMessage text in there.
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

            //TODO: Create new div element below input field, and insert link text inside.
        };

        /**
         * Returns submit url
         */
        this.getSubmitUrl = function () {
            var urlsub = "http://localhost:1337" //TODO: Will just return URL to which you will submit your form (http://localhost:8089 for dev enviroment)
            return urlsub ;
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
                if (link.validate()) {  ;
                    result = link.submit(self.getSubmitUrl());//Be careful with this inside callback
                    if (!result) {
                        errorMessage = "Unable to submit";
                    }
                } else {
                    errorMessage = "Link is invalid";
                }

                if (result) {
  
                    self.showNewLink(result); //Be careful with this inside callback
                   
                } else {
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
        $("#incontainer").submit(function(){
                    
        $.ajax({
                type:"post",
                url:"express.js",
                data:$(this).serialize()
            })
        })
        /**
         * Send ajax post request
         * return new link on success, false on error
         *
         * @param submitUrl
         * @return string|bool
         */
        this.submit = function (submitUrl) {
        }
            //TODO: You can use jQuery.post() to make AJAX call to the server, then you need to receive some response, verify if it's valid and return shorten URL.
        };

        this.init();
    };

    var app = new App();
    app.registerLinkEvent();
})();
