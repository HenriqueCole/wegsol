const express = require("express");
const router = express.Router();

const Malha_Do_ClienteHandler = require("./malha_do_cliente.handler");

router.get("/cliente", (req, res) => {
    Malha_Do_ClienteHandler.procurarMalha_Do_Cliente().then(dados => res.send(dados));
})

router.get('/cliente/:id', (req, res) => {
    Malha_Do_ClienteHandler.procurarMalhas_Do_Cliente().then(dados => res.send(dados));
})

router.post("/cliente", (req, res) => {   
    Malha_Do_ClienteHandler.criarMalha_Do_Cliente(req, res).then(dados => res.json(dados));
})

router.delete("/cliente/deletar/:id", (req, res) => {   
    Malha_Do_ClienteHandler.deletarMalha_Do_Cliente(req, res).then(dados => res.json(dados));
})

module.exports = router;