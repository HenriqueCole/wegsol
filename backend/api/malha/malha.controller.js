const express = require('express');
const router = express.Router();

const malhaHandler = require('./malha.handler')

router.get("/", async (req, res) => {
    res.json(await malhaHandler.procurarMalhas()).catch(error => {
        res.status(404).json(error.message);
    });
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    res.json(await malhaHandler.procurarMalha(id)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await malhaHandler.criarMalha(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await malhaHandler.editarMalha(dados, id)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await malhaHandler.deletarMalha(id)).catch(error => {
        res.status(404).json(error.message);
    });
})

module.exports = router