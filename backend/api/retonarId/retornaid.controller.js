const express = require('express');
const router = express.Router();

const retornaIdHandler = require('./retornaid.handler');

router.get("/fornecedor/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdFornecedor(id))
});

router.get("/fio/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdFio(id))
});

router.get("/cliente/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdCliente(id))
});

router.get("/malha/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdMalha(id))
});

router.get("/funcionario/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdFuncionario(id))
});

router.get("/maquina/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdMaquina(id))
});

module.exports = router