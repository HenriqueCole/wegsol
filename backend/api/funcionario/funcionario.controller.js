const express = require("express");
const router = express.Router();

const funcionarioHandler = require("./funcionario.handler");

router.get("/cliente", (req, res) => {
    funcionarioHandler.buscarFuncionarios().then(dados => res.send(dados));
})

router.get('/cliente/:id', (req, res) => {
    funcionarioHandler.buscarFuncionario().then(dados => res.send(dados));
})

router.post("/cliente", (req, res) => {   
    funcionarioHandler.criarFuncionario(req, res).then(dados => res.json(dados));
})

router.delete("/cliente/deletar/:id", (req, res) => {   
    funcionarioHandler.deletarFuncionario(req, res).then(dados => res.json(dados));
})

module.exports = router;