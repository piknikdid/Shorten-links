var express         = require('express');
var path            = require('path'); // модуль для парсинга пути
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var linkId = require('./lib/GetLink.js');
var fileExists = require('./lib/index.js');

app.use(express.static(path.join(__dirname))); // запуск статического файлового сервера, который смотрит на папку shorter/ (в нашем случае отдает index.html)
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/api/link', function(req, res) {
    var link = req.body.link;
    var result = linkId.generate(1);
    var i = 0;
    while(fileExists('./data/' + result)) {
      result = linkId.generate(parseInt(i++ / 10) + 1);
    }
    fs.writeFile('data/'+ result, req.body.link, function(err) {
      if(err) {
          console.log(err);
      }
      else {
          res.send('{"shortLink":"http://localhost:1337/'+ result +'"}');
      }
    });
});

app.get("/:link", function (req, res){
  var getUrl = req.params.link;
  function isValidUrl(url) {
  var objRE = /(^https?:\/\/)?[a-z0-9~_\-\.]+\.[a-z]{2,9}(\/|:|\?[!-~]*)?$/i;
  return objRE.test(url);
  }

fs.readFile('data/'+ getUrl, function(err, data) {
    if (err) {
        console.log(err);
    }
    else{
        var redirectLink = data.toString();
        if(isValidUrl(redirectLink)){
          console.log(redirectLink);
          res.redirect(redirectLink);
        }
        else {
          console.log("Ссылка неверна");
          
        }
    }

});
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});
