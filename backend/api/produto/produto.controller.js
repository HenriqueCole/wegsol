const express = require('express');
const router = express.Router();

const produtoHandler = require('./produto.handler')

router.get("/", async (req, res) => {
    res.json(await produtoHandler.procurarProdutos())
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    res.json(await produtoHandler.procurarProduto(id))
})

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await produtoHandler.criarProduto(dados));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await produtoHandler.editarProduto(dados, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await produtoHandler.deletarProduto(id));
})

module.exports = router