var cerveja = angular.module('cerveja');

function ListaEmpresaCervejaCtrl(empresaCervejaService) {
  var ctrl = this;
  buscarEmpresas();

  function buscarEmpresas() {
    empresaCervejaService.get()
      .then(function (response) {
        ctrl.empresasCervejas = response.data;
      });
  }

  this.remover = function (id) {
    empresaCervejaService.remover(id)
      .then(buscarEmpresas);
  }
}

ListaEmpresaCervejaCtrl.$inject = ['empresaCervejaService'];
cerveja.controller('ListaEmpresaCervejaCtrl', ListaEmpresaCervejaCtrl);

