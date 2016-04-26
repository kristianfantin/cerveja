var cerveja = angular.module('cerveja');

function ListaCervejaCtrl(cervejaService) {
  var ctrl = this;
  buscarCervejas();

  function buscarCervejas() {
    cervejaService.get()
      .then(function (response) {
        ctrl.cervejas = response.data;
      });
  }

  this.remover = function (id) {
    cervejaService.remover(id)
      .then(buscarCervejas);
  }
}

ListaCervejaCtrl.$inject = ['cervejaService'];
cerveja.controller('ListaCervejaCtrl', ListaCervejaCtrl);
