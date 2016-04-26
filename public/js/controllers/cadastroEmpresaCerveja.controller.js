var cerveja = angular.module('cerveja');

function EmpresaCervejaCtrl(empresaCervejaService) {
  var ctrl = this;
  this.empresaCerveja = {};
  this.empresasCervejas = [];

  this.salvar = function () {
    var empresa = angular.copy(ctrl.empresaCerveja);

    empresaCervejaService.add(empresa)
      .then(function (empresaSalva) {
        toastr.success("Empresa salva com sucesso");
        ctrl.empresaCerveja = {};
      }).catch(function (erro) {
      console.log(erro);
      toastr.error("Erro ao salvar empresa de cerveja");
    });
  }
}

cerveja.controller('cadastroEmpresaCervejaCtrl', EmpresaCervejaCtrl);

