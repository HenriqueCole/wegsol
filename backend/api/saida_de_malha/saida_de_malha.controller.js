const express = require("express");
const router = express.Router();

const saida_de_malha = require("./saida_de_malha.handler");

router.get("/", async (req, res) => {
    res.json(await saida_de_malha.buscarSaidas_De_Malhas()).catch(error => {
        res.status(404).json(error.message);
    });
});

router.get("/:id", async (req, res) => {
    res.json(await saida_de_malha.buscarSaida_De_Malha(req.params.id)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.post("/", async (req, res) => {
    res.json(await saida_de_malha.criarSaida_De_Malha(req.body)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.put("/:id", async (req, res) => {
    res.json(await saida_de_malha.atualizarSaida_De_Malha(req.params.id, req.body)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.delete("/:id", async (req, res) => {
    res.json(await saida_de_malha.deletarSaida_De_Malha(req.params.id)).catch(error => {
        res.status(404).json(error.message);
    });
});

module.exports = router