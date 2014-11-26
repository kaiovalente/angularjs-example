function CervejaController($scope, CervejaService) {
	
	$scope.cerveja = {nome: '', cervejaria: ''};
	
	$scope.cervejas = [ {
		nome : 'Cerpinha',
		cervejaria : 'Cerpa'
	}, {
		nome : 'Tijuca',
		cervejaria : 'Cerpa'
	} ];
	
	$scope.adicionar = function() {
		$scope.cervejas.push({
			nome : $scope.cerveja.nome,
			cervejaria : $scope.cerveja.cervejaria
		});
		$scope.limpar();
	};
	
	$scope.limpar = function() {
		$scope.cerveja = {nome: '', cervejaria: ''};
	};
	
	$scope.remover = function(cerveja) {
		CervejaService.remover($scope.cervejas, cerveja);
	};
	
	
	
}