var cerveja = angular.module('cerveja');

function controller(cervejaService, empresaCervejaService, categoriaCervejaService, $stateParams, $location) {
  var ctrl = this;
  var id = $stateParams.id;
  this.edicao = true;

  cervejaService.getCerveja(id)
    .then(function (response) {
      ctrl.cerveja = response.data;
    });

  this.cerveja = cervejaService.getCerveja(id);

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
    return cervejaService.atualizar(ctrl.cerveja.id, ctrl.cerveja)
      .then(function (cervejaSalva) {
        toastr.success("Cerveja atualizada com sucesso");
        ctrl.cerveja = {};
        $location.path('cervejas');
      }).catch(function (erro) {
        console.log(erro);
        toastr.error("Erro ao atualizar cerveja");
      });
  }
}

cerveja.controller('EdicaoCervejaCtrl', controller);

