var cerveja = angular.module('cerveja');

function categoriaCervejaService ($http, $q) {
  var categoriasCervejas = [];

  this.add = function (categoriaCerveja) {
    return $http.post("/api/categorias", categoriaCerveja);
  };

  this.get = function () {
    return $http.get("/api/categorias");
  }

  this.getCategoriaCerveja = function (id) {
    return $http.get("/api/categorias/" + id);
  }

  this.atualizar = function (id, categoriaCerveja) {
    return $http.put("/api/categorias/" + id, categoriaCerveja);
  }
  
  this.remover = function (id) {
    return $http.delete("/api/categorias/" + id);
  }
}

cerveja.service("categoriaCervejaService", categoriaCervejaService);