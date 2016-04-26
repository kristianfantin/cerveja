var cerveja = angular.module('cerveja');

function controller(categoriaCervejaService, $stateParams, $location) {
  var ctrl = this;
  var id = $stateParams.id;
  this.edicao = true;

  categoriaCervejaService.getCategoriaCerveja(id)
    .then(function (response) {
      ctrl.categoriaCerveja = response.data;
    });

  this.salvar = function () {
    return categoriaCervejaService.atualizar(ctrl.categoriaCerveja.id, ctrl.categoriaCerveja)
      .then(function (categoriaSalva) {
        toastr.success("Categoria atualizada com sucesso");
        ctrl.categoriaCerveja = {};
        $location.path('categorias-cervejas');
      }).catch(function (erro) {
        console.log(erro);
        toastr.error("Erro ao atualizar cerveja");
      });
  }
}

CategoriaCervejaCtrl.$inject = ['categoriaCervejaService'];
cerveja.controller('EdicaoCategoriaCervejaCtrl', controller);