var dao = require('../dao/cervejas.dao');
var daoEmpresa = require('../dao/empresas.dao');
var daoCategoria = require('../dao/categorias.dao');
var _ = require('lodash');


exports.listar = function listar(req, res) {
  var cervejas = dao.listar();
  var cervejasCopia = cervejas.map(function (cerveja) {
    var copia = _.assign({}, cerveja);
    copia.empresa = daoEmpresa.buscarPorId(cerveja.empresa);
    copia.categoria = daoCategoria.buscarPorId(cerveja.categoria);
    return copia;
  });
  res.json(cervejasCopia);
};

exports.buscarPorId = function buscarPorId(req, res) {
  var id = req.params.id;
  var cerveja = dao.buscarPorId(id);
  if (!cerveja) {
    res.status(404);
    res.end();
    return;
  }
  // cerveja.empresa = daoEmpresa.buscarPorId(cerveja.empresa);
  // cerveja.categoria = daoCategoria.buscarPorId(cerveja.categoria);
  res.json(cerveja);
};

exports.salvar = function salvar(req, res) {
  var cerveja = req.body;
  dao.salvar(cerveja);
  res.status(201);
  res.json(cerveja);
};


exports.atualizar = function salvar(req, res) {
  var cerveja = req.body;
  var id = req.params.id;
  dao.atualizar(id, cerveja);
  res.json(cerveja);
};

exports.remover = function remover(req, res) {
  dao.remover(req.params.id);
  res.end();
};