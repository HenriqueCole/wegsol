const express = require("express");
const router = express.Router();

const clienteHandler = require("./cliente.handler");

router.get("/", (req, res) => {
    clienteHandler.buscarCliente().then(dados => res.send(dados));
})

router.get('/:id', (req, res) => {
    clienteHandler.buscarCliente().then(dados => res.send(dados));
})

router.post("/", (req, res) => {   
    clienteHandler.criarCliente(req, res).then(dados => res.json(dados));
})

router.delete("/:id", (req, res) => {   
    clienteHandler.deletarCliente(req, res).then(dados => res.json(dados));
})

router.put("/:id", (req, res) => {   
    clienteHandler.editarCliente(req, res).then(dados => res.json(dados));
})

module.exports = router;