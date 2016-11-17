var express         = require('express');
var path            = require('path'); // модуль для парсинга пути
var app = express();
var fs = require("fs");
var getID = require('./getID.js');
var bodyParser = require('body-parser');
var getnameId = new getID.getLinkId(5);

app.use(express.static(path.join(__dirname))); // запуск статического файлового сервера, который смотрит на папку shorter/ (в нашем случае отдает index.html)

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/api/link', function(req, res) {   
    
    res.send('{"shortLink":"http://localhost:1337/'+ getnameId.nameId +'"}');
        
    fs.writeFile('data/'+ getnameId.nameId, req.body.link, function(err) {
    if(err) {
        console.log(err);
        
    } 
    else {
        console.log("Файл сохранен.");
    }
    });
});


app.get("/"+ getnameId.nameId, function (req, res){
fs.readFile('data/'+ getnameId.nameId, function(err, data) {
    if (err) {
        console.error(err);
    }
    else{
        var redLink = data.toString();
        console.log(redLink);
        res.redirect(redLink);
    }

});
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});
