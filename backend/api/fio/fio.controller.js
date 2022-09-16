const express = require("express");
const router = express.Router();

const fioHandler = require("./fio.handler");

router.get("/", async (req, res) => {
    res.json(await fioHandler.buscarFios()).catch(error => {
        res.status(404).json(error.message);
    });
});

router.get("/:id", async (req, res) => {
    res.json(await fioHandler.buscarFio(req.params.id)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.post("/", async (req, res) => {
    res.json(await fioHandler.criarFio(req.body)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.put("/:id", async (req, res) => {
    res.json(await fioHandler.atualizarFio(req.params.id, req.body)).catch(error => {
        res.status(404).json(error.message);
    });
});

router.delete("/:id", async (req, res) => {
    res.json(await fioHandler.deletarFio(req.params.id)).catch(error => {
        res.status(404).json(error.message);
    });
});

module.exports = router