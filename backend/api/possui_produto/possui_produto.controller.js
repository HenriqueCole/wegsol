const express = require('express');
const router = express.Router();

const fios_produtoHandler = require('./possui_produto.handler')

router.get("/", async (req, res) => {
    res.json(await fios_produtoHandler.procurarFios_Da_Malhas()).catch(error => {
        res.status(404).json(error.message);
    });
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    res.json(await fios_produtoHandler.procurarFios_Da_Malha(id)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await fios_produtoHandler.criarFios_Da_Malha(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await fios_produtoHandler.editarFios_Da_Malha(dados, id)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await fios_produtoHandler.deletarFios_Da_Malha(id)).catch(error => {
        res.status(404).json(error.message);
    });
})

module.exports = router