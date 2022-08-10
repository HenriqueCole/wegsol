const express = require('express');
const router = express.Router();

const fios_da_malhaHandler = require('./fios_da_malha.handler')

router.get("/", async (req, res) => {
    res.json(await fios_da_malhaHandler.procurarFios_Da_Malhas())
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    res.json(await fios_da_malhaHandler.procurarFios_Da_Malha(id))
})

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await fios_da_malhaHandler.criarFios_Da_Malha(dados));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await fios_da_malhaHandler.editarFios_Da_Malha(dados, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await fios_da_malhaHandler.deletarFios_Da_Malha(id));
})

module.exports = router