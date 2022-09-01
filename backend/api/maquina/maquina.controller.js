const express = require("express");
const router = express.Router();

const maquinaHandler = require("./maquina.handler");

router.get("/", (req, res) => {
    maquinaHandler.buscarMaquinas().then(dados => res.json(dados));
})

router.get('/:id', (req, res) => {
    maquinaHandler.buscarMaquina(req.params.id).then(dados => res.json(dados));
})

router.post("/", (req, res) => {   
    maquinaHandler.criarMaquina(req, res).then(dados => res.json(dados));
})

router.delete("/:id", (req, res) => {   
    maquinaHandler.deletarMaquina(req.params.id).then(dados => res.json(dados));
})

router.put("/:id", (req, res) => {   
    maquinaHandler.editarMaquina(req, res).then(dados => res.json(dados));
})

module.exports = router;