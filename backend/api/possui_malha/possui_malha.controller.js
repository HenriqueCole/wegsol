const express = require('express');
const router = express.Router();

const possui_malhaHandler = require('./possui_malha.handler')

router.get("/", async (req, res) => {
    res.json(await possui_malhaHandler.procurarPossui_Malhas()).catch(error => {
        res.status(404).json(error.message);
    });
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    res.json(await possui_malhaHandler.procurarPossui_Malha(id)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await possui_malhaHandler.criarPossui_Malha(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await possui_malhaHandler.editarPossui_Malha(dados, id)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await possui_malhaHandler.deletarPossui_Malhas(id)).catch(error => {
        res.status(404).json(error.message);
    });
})

module.exports = router