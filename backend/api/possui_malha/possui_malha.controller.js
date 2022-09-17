const express = require('express');
const router = express.Router();

const possui_malhaHandler = require('./possui_malha.handler')

router.get("/", async (req, res) => {
    res.json(await possui_malhaHandler.procurarPossui_Malhas())
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    res.json(await possui_malhaHandler.procurarPossui_Malha(id))
})

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await possui_malhaHandler.criarPossui_Malha(dados));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await possui_malhaHandler.editarPossui_Malha(dados, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await possui_malhaHandler.deletarPossui_Malhas(id));
})

module.exports = router