var express         = require('express');
var path            = require('path'); // модуль для парсинга пути
var app = express();
var fs = require("fs");
var getID = require('./getID.js');


app.use(express.static(path.join(__dirname))); // запуск статического файлового сервера, который смотрит на папку shorter/ (в нашем случае отдает index.html)

var getnameId = new getID.getLinkId(5);

fs.writeFile('data/'+getnameId, "ssss", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("Файл сохранен.");
    }
});

app.post('/api/link', function(req, res) {   
    res.send('{"shortLink":"http://google.com"}');
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});
