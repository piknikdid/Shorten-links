var rand = [];
var j = 0 ;
var i;
var getLinkId = function (length) {
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
    var nameId = randNum.join("");
            return nameId;
    };
    exports.getLinkId = getLinkId;