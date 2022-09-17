const express = require("express");
const router = express.Router();

const fioHandler = require("./fio.handler");

router.get("/", async (req, res) => {
    res.json(await fioHandler.buscarFios())
});

router.get("/:id", async (req, res) => {
    res.json(await fioHandler.buscarFio(req.params.id));
});

router.post("/", async (req, res) => {
    res.json(await fioHandler.criarFio(req.body));
});

router.put("/:id", async (req, res) => {
    res.json(await fioHandler.atualizarFio(req.params.id, req.body));
});

router.delete("/:id", async (req, res) => {
    res.json(await fioHandler.deletarFio(req.params.id));
});

module.exports = router