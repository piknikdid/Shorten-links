//Перенести файл в папку lib

//Переписать без использования глобальных переменных
var rand = [];
var j = 0;
var i;

//Изменить имя обьекта на LinkId
//
//Инициализацию массива символов производить в конструкторе
//и хранить сам массив в свойстве обьекта
//Добавить метод generate который будет принимать length и возвращать id
//Тоесть работа с библиотекой должна выглядеть примерно так
//linkId = require({file/path.js});
//result = linkId.generate(5);
//
//Поправить code style!


function getLinkId (length) {
    for(i= 65; i<= 65+24; i++) {
        rand[j++] = String.fromCharCode(i);                    
    }

    for(i= 97; i<= 97+24; i++){
        rand[j++] = String.fromCharCode(i);
    }

    for(i= 0; i<= 9; i++){
        rand[j++] = i;
    }
    
    
    var lengthURL = length;
    var randNum = [];
    for (i = 0; i<= lengthURL; i++) {
        randNum[i] = rand[Math.floor(Math.random()*rand.length)];
    }
    this.nameId = randNum.join("");
    };
    exports.getLinkId = getLinkId;