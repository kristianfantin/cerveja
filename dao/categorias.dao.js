var fs = require('fs');
var categorias = require("./categorias");

function atualizarArquivo() {
  fs.writeFileSync('./dao/categorias.json', JSON.stringify(categorias));
}

exports.salvar = function salvar(categoria) {
  var id = Date.now();
  categoria.id = id;
  categorias[id] = categoria;
  atualizarArquivo();
  return categoria;
}

exports.atualizar = function atualizar(id, categoria) {
  categoria.id = id;
  categorias[id] = categoria;
  atualizarArquivo();
  return categoria;
}

exports.remover = function remover(id) {
  delete categorias[id];
  atualizarArquivo();
}

exports.listar = function listar() {
  return Object.keys(categorias)
    .map(id => categorias[id]);
}

exports.buscarPorId = function buscarPorId(id) {
  return categorias[id];
}

