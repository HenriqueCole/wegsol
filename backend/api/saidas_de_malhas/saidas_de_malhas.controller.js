const express = require("express");
const router = express.Router();

const saidas_de_malhas = require("./saidas_de_malhas.handler");

router.get("/", async (req, res) => {
    res.json(await saidas_de_malhas.buscarSaidas_De_Malhas()).catch(error => {
        res.status(404).json(error.message);
    });
});

router.get("/:id", async (req, res) => {
    res.json(await saidas_de_malhas.buscarSaidas_De_MalhasEspecifico(req.params.id)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.post("/", async (req, res) => {
    res.json(await saidas_de_malhas.criarSaidas_De_Malhas(req.body)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.put("/:id", async (req, res) => {
    res.json(await saidas_de_malhas.atualizarSaidas_De_Malhas(req.params.id, req.body)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.delete("/:id", async (req, res) => {
    res.json(await saidas_de_malhas.deletarSaidas_De_Malhas(req.params.id)).catch(error => {
        res.status(404).json(error.message);
    });
});

module.exports = router