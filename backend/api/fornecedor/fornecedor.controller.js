const express = require("express");
const router = express.Router();

const fornecedorHandler = require("./fornecedor.handler");

router.get("/", async (req, res) => {
    res.json(await fornecedorHandler.buscarFornecedores());
});

router.get("/:id", async (req, res) => {
    res.json(await fornecedorHandler.buscarFornecedor(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await fornecedorHandler.criarFornecedor(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await fornecedorHandler.atualizarFornecedor(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
    res.json(await fornecedorHandler.deletarFornecedor(req.params.id));
});