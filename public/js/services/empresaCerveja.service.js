var cerveja = angular.module('cerveja');

function empresaCervejaService ($http, $q) {
  var empresasCervejas = [];

  this.add = function (empresaCerveja) {
    return $http.post("/api/empresas", empresaCerveja);
  };

  this.get = function () {
    return $http.get("/api/empresas");
  }

  this.getEmpresaCerveja = function (id) {
    return $http.get("/api/empresas/" + id);
  }

  this.atualizar = function (id, empresaCerveja) {
    return $http.put("/api/empresas/" + id, empresaCerveja);
  }

  this.remover = function (id) {
    return $http.delete("/api/empresas/" + id);
  }
}

cerveja.service("empresaCervejaService", empresaCervejaService);