var express = require('express');
var router = express.Router();

var controller = require('../controllers/empresas.controller');

router.post('/', controller.salvar);
router.put('/:id', controller.atualizar);
router.delete('/:id', controller.remover);
router.get('/', controller.listar);
router.get('/:id', controller.buscarPorId);

module.exports = router;