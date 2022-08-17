const express = require("express");
const router = express.Router();

const producaoHandler = require("./producao.handler");

router.get("/", (req, res) => {
    producaoHandler.buscarProducao().then(dados => res.send(dados));
})

router.get('/:id', (req, res) => {
    producaoHandler.buscarProducoes().then(dados => res.send(dados));
})

router.post("/", (req, res) => {   
    producaoHandler.criarProducao(req, res).then(dados => res.json(dados));
})

router.delete("/:id", (req, res) => {   
    producaoHandler.deletarProducao(req, res).then(dados => res.json(dados));
})

router.put("/:id", (req, res) => {
    producaoHandler.editarProducao(req, res).then(dados => res.json(dados));
})

module.exports = router;