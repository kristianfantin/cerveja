var cerveja = angular.module('cerveja');

function ListaCategoriaCervejaCtrl(categoriaCervejaService) {
  var ctrl = this;
  buscarCategorias();

  function buscarCategorias() {
    categoriaCervejaService.get()
      .then(function (response) {
        ctrl.categoriasCervejas = response.data;
      });
  }

  this.remover = function (id) {
    categoriaCervejaService.remover(id)
      .then(buscarCategorias);
  }
}

ListaCategoriaCervejaCtrl.$inject = ['categoriaCervejaService'];
cerveja.controller('ListaCategoriaCervejaCtrl', ListaCategoriaCervejaCtrl);
