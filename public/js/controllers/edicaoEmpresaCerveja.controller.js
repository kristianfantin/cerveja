var cerveja = angular.module('cerveja');

function controller(empresaCervejaService, $stateParams, $location) {
  var ctrl = this;
  var id = $stateParams.id;
  this.edicao = true;

  empresaCervejaService.getEmpresaCerveja(id)
    .then(function (response) {
      ctrl.empresaCerveja = response.data;
    });

  this.salvar = function () {
    return empresaCervejaService.atualizar(ctrl.empresaCerveja.id, ctrl.empresaCerveja)
      .then(function (empresaSalva) {
        toastr.success("Empresa atualizada com sucesso");
        ctrl.empresaCerveja = {};
        $location.path('empresas-cervejas');
      }).catch(function (erro) {
        console.log(erro);
        toastr.error("Erro ao atualizar empresa");
      });
  }
}

EmpresaCervejaCtrl.$inject = ['empresaCervejaService'];
cerveja.controller('EdicaoEmpresaCervejaCtrl', controller);