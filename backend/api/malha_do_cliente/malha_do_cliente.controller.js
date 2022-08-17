const express = require("express");
const router = express.Router();

const Malha_Do_ClienteHandler = require("./malha_do_cliente.handler");

router.get("/", (req, res) => {
    Malha_Do_ClienteHandler.procurarMalha_Do_Cliente().then(dados => res.json(dados));
})

router.get('//:id', (req, res) => {
    Malha_Do_ClienteHandler.procurarMalhas_Do_Cliente().then(dados => res.json(dados));
})

router.post("/", (req, res) => {   
    Malha_Do_ClienteHandler.criarMalha_Do_Cliente(req, res).then(dados => res.json(dados));
})

router.delete("/:id", (req, res) => {   
    Malha_Do_ClienteHandler.deletarMalha_Do_Cliente(req, res).then(dados => res.json(dados));
})

router.put("/:id", (req, res) => {   
    Malha_Do_ClienteHandler.editarMalha_Do_Cliente(req, res).then(dados => res.json(dados));
})

module.exports = router;