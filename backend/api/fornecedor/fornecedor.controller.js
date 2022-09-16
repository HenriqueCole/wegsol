const express = require("express");
const router = express.Router();

const fornecedorHandler = require("./fornecedor.handler");

router.get("/", async (req, res) => {
    res.json(await fornecedorHandler.buscarFornecedores()).catch(error => {
        res.status(404).json(error.message);
    });
});

router.get("/:id", async (req, res) => {
    res.json(await fornecedorHandler.buscarFornecedor(req.params.id)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.post("/", async (req, res) => {
    res.json(await fornecedorHandler.criarFornecedor(req.body)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.put("/:id", async (req, res) => {
    res.json(await fornecedorHandler.atualizarFornecedor(req.params.id, req.body)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.delete("/:id", async (req, res) => {
    res.json(await fornecedorHandler.deletarFornecedor(req.params.id)).catch(error => {
        res.status(404).json(error.message);
    });
});

module.exports = router