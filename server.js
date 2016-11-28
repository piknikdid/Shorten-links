var express         = require('express');
var path            = require('path'); // модуль для парсинга пути
var app = express();
var fs = require("fs");
var getID = require('./getID.js');
var bodyParser = require('body-parser');

//Убрать эту переменную к ебеням
var getnameId = new getID.getLinkId(5);

app.use(express.static(path.join(__dirname))); // запуск статического файлового сервера, который смотрит на папку shorter/ (в нашем случае отдает index.html)

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.post('/api/link', function(req, res) {
    //Сначала сохранять файл, а потом отправлять результат, если файл сохранился
    res.send('{"shortLink":"http://localhost:1337/'+ getnameId.nameId +'"}');

    //Добавить цикличную проверку уникальности сгенерированого id
    //Добавить динамическую длинну id,
    //сначала проверяем двухзначные id (например 10 раз)
    //если свободного не нашлось - проверяем трехзначные, итд
    //
    //Добавить валидацию урла перед сохранением
    fs.writeFile('data/'+ getnameId.nameId, req.body.link, function(err) {
    if(err) {
        //В случае ошибки - логаем в консоль и отправляем пользователю сообщение
        console.log(err);
        
    } 
    else {
        console.log("Файл сохранен.");
    }
    });
});

//Убрать эту переменную к ебеням и читать параметр из URL
app.get("/"+ getnameId.nameId, function (req, res){
fs.readFile('data/'+ getnameId.nameId, function(err, data) {
    if (err) {
        //В случае ошибки - логаем в консоль и отправляем пользователю сообщение
        console.error(err);
    }
    else{
        //Red - это красный, если что)
        var redLink = data.toString();
        console.log(redLink);

        //Добавить валидацию урла перед отправкой
        res.redirect(redLink);
    }

});
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});
