var app = angular.module("app", []);

app.service('CervejaService', function(){
        this.remover = function(cervejas, cerveja) { 
        	var index = cervejas.indexOf(cerveja);
			cervejas.splice(index, 1);
     };
  });