var cerveja = angular.module('cerveja');

function CategoriaCervejaCtrl(categoriaCervejaService) {
  var ctrl = this;
  this.categoriaCerveja = {};
  this.categoriasCervejas = [];

  this.salvar = function () {
    var categoria = angular.copy(ctrl.categoriaCerveja);

    categoriaCervejaService.add(categoria)
      .then(function (categoriaSalva) {
        toastr.success("Categoria salva com sucesso");
        ctrl.categoriaCerveja = {};
      }).catch(function (erro) {
        console.log(erro);
        toastr.error("Erro ao salvar categoria de cerveja");
      });
  }
}

cerveja.controller('cadastroCategoriaCervejaCtrl', CategoriaCervejaCtrl);

