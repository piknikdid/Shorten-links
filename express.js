var express         = require('express');
var path            = require('path'); // модуль для парсинга пути
var app = express();


app.use(express.static(path.join(__dirname))); // запуск статического файлового сервера, который смотрит на папку shorter/ (в нашем случае отдает index.html)

app.post('/api/link', function(req, res) {
    /*console.log(req);*/
    
    res.send('{"shortLink":"http://google.com"}');
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
    

});