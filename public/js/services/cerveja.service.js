var cerveja = angular.module('cerveja');

function cervejaService (empresaCervejaService, categoriaCervejaService, $http, $q) {
  var cervejas = [];

  this.add = function (cerveja) {
    return $http.post("/api/cervejas", cerveja);
  }

  this.get = function () {
    return $http.get("/api/cervejas");
  }

  this.getCerveja = function (id) {
    return $http.get("/api/cervejas/" + id);
  }

  this.atualizar = function (id, cerveja) {
    return $http.put("/api/cervejas/" + id, cerveja);
  }

  this.remover = function (id) {
    return $http.delete("/api/cervejas/" + id);
  }
}

cerveja.service("cervejaService", cervejaService);