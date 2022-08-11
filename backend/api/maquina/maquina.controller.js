const express = require("express");
const router = express.Router();

const maquinaHandler = require("./maquina.handler");

router.get("/cliente", (req, res) => {
    maquinaHandler.buscarMaquina().then(dados => res.send(dados));
})

router.get('/cliente/:id', (req, res) => {
    maquinaHandler.buscarMaquinas().then(dados => res.send(dados));
})

router.post("/cliente", (req, res) => {   
    maquinaHandler.criarMaquina(req, res).then(dados => res.json(dados));
})

router.delete("/cliente/deletar/:id", (req, res) => {   
    maquinaHandler.deletarMaquina(req, res).then(dados => res.json(dados));
})

module.exports = router;