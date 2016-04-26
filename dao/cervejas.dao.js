var fs = require('fs');
var cervejas = require("./cervejas");

function atualizarArquivo() {
  fs.writeFileSync('./dao/cervejas.json', JSON.stringify(cervejas));
}

exports.salvar = function salvar(cerveja) {
  var id = Date.now();
  cerveja.id = id;
  cervejas[id] = cerveja;
  atualizarArquivo();
  return cerveja;
}

exports.atualizar = function atualizar(id, cerveja) {
  cerveja.id = id;
  cervejas[id] = cerveja;
  atualizarArquivo();
  return cerveja;
}

exports.remover = function remover(id) {
  delete cervejas[id];
  atualizarArquivo();
}

exports.listar = function listar() {
  return Object.keys(cervejas)
    .map(id => cervejas[id]);
}

exports.buscarPorId = function buscarPorId(id) {
  return cervejas[id];
}