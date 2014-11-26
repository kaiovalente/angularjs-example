beforeEach(module('app'));
describe('CervejaController', function () {
	 
	it('deve definir uma cerveja padrao com nome e cervejaria vazias', inject(function ($controller) {
		var scope = {};
		var ctrl = $controller('CervejaController', { $scope: scope });
		 
		expect(scope.cerveja.nome).toBe('');
		expect(scope.cerveja.cervejaria).toBe('');
	}));
	
	it('deve iniciar com duas cervejas carregadas', inject(function ($controller) {
		var scope = {};
		var ctrl = $controller('CervejaController', { $scope: scope });
		 
		expect(scope.cervejas.length).toBe(2);
	}));
	
	it('deve limpar uma cerveja', inject(function ($controller) {
		var scope = {};
		var ctrl = $controller('CervejaController', { $scope: scope });
		
		scope.cerveja = {nome: 'Cerpinha', cervejaria: 'Cerpa'};
		scope.limpar(); 
		
		expect(scope.cerveja.nome).toBe('');
		expect(scope.cerveja.cervejaria).toBe('');
	}));
});