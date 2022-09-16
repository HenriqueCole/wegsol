const express = require("express");
const router = express.Router();

const clienteHandler = require("./cliente.handler");

router.get("/", (req, res) => {
    clienteHandler.buscarClientes().then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.get('/:id', (req, res) => {
    clienteHandler.buscarCliente(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.post("/", (req, res) => {   
    clienteHandler.criarCliente(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.delete("/:id", (req, res) => {   
    clienteHandler.deletarCliente(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.put("/:id", (req, res) => {   
    clienteHandler.editarCliente(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

module.exports = router;