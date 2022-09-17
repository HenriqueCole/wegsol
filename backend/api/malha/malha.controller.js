const express = require('express');
const router = express.Router();

const malhaHandler = require('./malha.handler')

router.get("/", async (req, res) => {
    res.json(await malhaHandler.procurarMalhas());
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    res.json(await malhaHandler.procurarMalha(id))
})

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await malhaHandler.criarMalha(dados));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await malhaHandler.editarMalha(dados, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await malhaHandler.deletarMalha(id));
})

module.exports = router