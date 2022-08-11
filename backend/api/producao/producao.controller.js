const express = require("express");
const router = express.Router();

const producaoHandler = require("./producao.handler");

router.get("/cliente", (req, res) => {
    producaoHandler.buscarProducao().then(dados => res.send(dados));
})

router.get('/cliente/:id', (req, res) => {
    producaoHandler.buscarProducoes().then(dados => res.send(dados));
})

router.post("/cliente", (req, res) => {   
    producaoHandler.criarProducao(req, res).then(dados => res.json(dados));
})

router.delete("/cliente/deletar/:id", (req, res) => {   
    producaoHandler.deletarProducao(req, res).then(dados => res.json(dados));
})

module.exports = router;