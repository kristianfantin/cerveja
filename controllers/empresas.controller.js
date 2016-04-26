var dao = require('../dao/empresas.dao');

exports.listar = function listar(req, res) {
  var empresas = dao.listar();
  res.json(empresas);
};

exports.buscarPorId = function buscarPorId(req, res) {
  var id = req.params.id;
  var empresa = dao.buscarPorId(id);
  if (!empresa) {
    res.status(404);
    res.end();
    return;
  }

  res.json(empresa);
};

exports.salvar = function salvar(req, res) {
  var empresa = req.body;
  dao.salvar(empresa);
  res.status(201);
  res.json(empresa);
};


exports.atualizar = function salvar(req, res) {
  var empresa = req.body;
  var id = req.params.id;
  dao.atualizar(id, empresa);
  res.json(empresa);
};

exports.remover = function remover(req, res) {
  dao.remover(req.params.id);
  res.end();
};