const express = require("express");
const router = express.Router();

const clienteHandler = require("./cliente.handler");

router.get("/cliente", (req, res) => {
    clienteHandler.buscarCliente().then(dados => res.send(dados));
})

router.get('/cliente/:id', (req, res) => {
    clienteHandler.buscarCliente().then(dados => res.send(dados));
})

router.post("/cliente", (req, res) => {   
    clienteHandler.criarCliente(req, res).then(dados => res.json(dados));
})

router.delete("/cliente/deletar/:id", (req, res) => {   
    clienteHandler.deletarUsuario(req, res).then(dados => res.json(dados));
})

module.exports = router;