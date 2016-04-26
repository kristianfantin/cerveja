var express = require('express');
var router = express.Router();

var cervejaController = require('../controllers/cervejas.controller');

router.post('/', cervejaController.salvar);
router.put('/:id', cervejaController.atualizar);
router.delete('/:id', cervejaController.remover);
router.get('/', cervejaController.listar);
router.get('/:id', cervejaController.buscarPorId);

module.exports = router;