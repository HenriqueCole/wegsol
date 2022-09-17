const express = require('express');
const router = express.Router();

const produtoHandler = require('./produto.handler')

router.get("/", async (req, res) => {
    res.json(await produtoHandler.procurarProdutos()).catch(error => {
        res.status(404).json(error.message);
    });
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    produtoHandler.procurarProduto(id).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await produtoHandler.criarProduto(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await produtoHandler.editarProduto(dados, id)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await produtoHandler.deletarProduto(id)).catch(error => {
        res.status(404).json(error.message);
    });
})

module.exports = router