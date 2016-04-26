var dao = require('../dao/categorias.dao');

exports.listar = function listar(req, res) {
  var categorias = dao.listar();
  res.json(categorias);
};

exports.buscarPorId = function buscarPorId(req, res) {
  var id = req.params.id;
  var categoria = dao.buscarPorId(id);
  if (!categoria) {
    res.status(404);
    res.end();
    return;
  }

  res.json(categoria);
};

exports.salvar = function salvar(req, res) {
  var categoria = req.body;
  dao.salvar(categoria);
  res.status(201);
  res.json(categoria);
};


exports.atualizar = function salvar(req, res) {
  var categoria = req.body;
  var id = req.params.id;
  dao.atualizar(id, categoria);
  res.json(categoria);
};

exports.remover = function remover(req, res) {
  dao.remover(req.params.id);
  res.end();
};