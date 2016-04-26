var cerveja = angular.module('cerveja');

function CervejaCtrl(cervejaService, empresaCervejaService, categoriaCervejaService) {
  var ctrl = this;
  console.log(categoriaCervejaService)
  this.cerveja = {};
  this.cervejas = [];
  this.edicao = false;

  function getEmpresas() {
    empresaCervejaService.get()
      .then(function (response) {
        ctrl.empresas = response.data;
      });
  }

  function getCategorias() {
    categoriaCervejaService.get()
      .then(function (response) {
        ctrl.categorias = response.data;
      });
  }

  this.empresas = getEmpresas();
  this.categorias = getCategorias();

  this.salvar = function () {
    var cervejaCopy = angular.copy(ctrl.cerveja);

    cervejaService.add(cervejaCopy)
      .then(function (cervejaSalva) {
        toastr.success("Cerveja salva com sucesso");
        ctrl.cerveja = {};
      }).catch(function (erro) {
      console.log(erro);
      toastr.error("Erro ao salvar Cerveja");
    });
  }
}

cerveja.controller('CadastroCervejaCtrl', [
  'cervejaService', 'empresaCervejaService', 'categoriaCervejaService',
  CervejaCtrl
]);

