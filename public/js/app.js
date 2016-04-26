var cerveja = angular.module('cerveja', ['ui.router']);

cerveja.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('cadastroCerveja', {
      url: '/cervejas-cadastro',
      templateUrl: '/partials/cadastroCerveja.html',
      controller: 'CadastroCervejaCtrl as ctrl'
    })
    .state('edicaoCerveja', {
      url: '/cervejas-edicao/:id',
      templateUrl: '/partials/cadastroCerveja.html',
      controller: 'EdicaoCervejaCtrl as ctrl'
    })
    .state('listaCerveja', {
      url: '/cervejas',
      templateUrl: '/partials/gridCervejas.html',
      controller: 'ListaCervejaCtrl as ctrl'
    })
    .state('cadastroCategoriaCerveja', {
      url: '/categorias-cervejas-cadastro',
      templateUrl: '/partials/cadastroCategoriaCerveja.html',
      controller: 'cadastroCategoriaCervejaCtrl as ctrl'
    })
    .state('listaCategoriaCerveja', {
      url: '/categorias-cervejas',
      templateUrl: '/partials/gridCategoriasCervejas.html',
      controller: 'ListaCategoriaCervejaCtrl as ctrl'
    })
    .state('edicaoCategoriaCerveja', {
      url: '/categorias-cervejas-edicao/:id',
      templateUrl: '/partials/cadastroCategoriaCerveja.html',
      controller: 'EdicaoCategoriaCervejaCtrl as ctrl'
    })
    .state('cadastroEmpresaCerveja', {
      url: '/empresas-cervejas-cadastro',
      templateUrl: '/partials/cadastroEmpresaCerveja.html',
      controller: 'cadastroEmpresaCervejaCtrl as ctrl'
    })
    .state('listaEmpresaCerveja', {
      url: '/empresas-cervejas',
      templateUrl: '/partials/gridEmpresasCervejas.html',
      controller: 'ListaEmpresaCervejaCtrl as ctrl'
    })
    .state('edicaoEmpresaCerveja', {
      url: '/empresas-cervejas-edicao/:id',
      templateUrl: '/partials/cadastroEmpresaCerveja.html',
      controller: 'EdicaoEmpresaCervejaCtrl as ctrl'
    });

  $urlRouterProvider.otherwise('/cervejas');
});