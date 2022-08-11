const express = require("express");
const router = express.Router();

const saidas_de_malhas = require("./saidas_de_malhas.handler");

router.get("/", async (req, res) => {
    res.json(await saidas_de_malhas.buscarSaidas_De_Malhas());
});

router.get("/:id", async (req, res) => {
    res.json(await saidas_de_malhas.buscarSaidas_De_MalhasEspecifico(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await saidas_de_malhas.criarSaidas_De_Malhas(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await saidas_de_malhas.atualizarSaidas_De_Malhas(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
    res.json(await saidas_de_malhas.deletarSaidas_De_Malhas(req.params.id));
});