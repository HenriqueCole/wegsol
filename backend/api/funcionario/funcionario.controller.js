const express = require("express");
const router = express.Router();

const funcionarioHandler = require("./funcionario.handler");

router.get("/", (req, res) => {
    funcionarioHandler.buscarFuncionarios().then(dados => res.json(dados));
})

router.get('/:id', (req, res) => {
    funcionarioHandler.buscarFuncionario().then(dados => res.json(dados));
})

router.post("/", (req, res) => {   
    funcionarioHandler.criarFuncionario(req, res).then(dados => res.json(dados));
})

router.delete("/:id", (req, res) => {   
    funcionarioHandler.deletarFuncionario(req, res).then(dados => res.json(dados));
})

router.put("/:id", (req, res) => {   
    funcionarioHandler.editarFuncionario(req, res).then(dados => res.json(dados));
})

module.exports = router;