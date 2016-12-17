
//Тоесть работа с библиотекой должна выглядеть примерно так
//linkId = require({file/path.js});
//result = linkId.generate(5);
//
//Поправить code style!

 var LinkId  = function () {
    
    this.rand = [];

    var rangeMap = function(start, end, mapFunc) {
      var a = [];
      for (var i = start; i < end; ++i) {
        a.push(mapFunc(i));
      }

      return a;
    }

    this.rand = this.rand
      .concat(rangeMap(0, 10, function(x){return x;}))
      .concat(rangeMap(65, 91, String.fromCharCode))
      .concat(rangeMap(97, 123, String.fromCharCode));

    
 
	this.generate = function (length) {
		var randNum = [];
        this.b = [];
        for (i = 0; i<= length; ++i) {
		randNum[i] = this.rand[Math.floor(Math.random()*this.rand.length)];
		
		}	
        return randNum.join("");
	};
};
var linkId = new LinkId;
   
module.exports = linkId;
