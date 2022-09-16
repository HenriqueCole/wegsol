const express = require('express');
const router = express.Router();

const retornaIdHandler = require('./retornaid.handler');

router.get("/fornecedor/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdFornecedor(id)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.get("/fio/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdFio(id)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.get("/cliente/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdCliente(id)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.get("/malha/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdMalha(id)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.get("/funcionario/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdFuncionario(id)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.get("/maquina/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await retornaIdHandler.retornaIdMaquina(id)).catch(error => {
        res.status(404).json(error.message);
    });
});

module.exports = router