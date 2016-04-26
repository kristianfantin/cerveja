var fs = require('fs');
var empresas = require("./empresas");

function atualizarArquivo() {
  fs.writeFileSync('./dao/empresas.json', JSON.stringify(empresas));
}

exports.salvar = function salvar(empresa) {
  var id = Date.now();
  empresa.id = id;
  empresas[id] = empresa;
  atualizarArquivo();
  return empresa;
}

exports.atualizar = function atualizar(id, empresa) {
  empresa.id = id;
  empresas[id] = empresa;
  atualizarArquivo();
  return empresa;
}

exports.remover = function remover(id) {
  delete empresas[id];
  atualizarArquivo();
}

exports.listar = function listar() {
  return Object.keys(empresas)
    .map(id => empresas[id]);
}

exports.buscarPorId = function buscarPorId(id) {
  return empresas[id];
}

