const express = require("express");
const router = express.Router();

const Malha_Do_ClienteHandler = require("./malha_do_cliente.handler");

router.get("/", (req, res) => {
    Malha_Do_ClienteHandler.procurarMalhas_Do_Cliente().then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.get('/:id', (req, res) => {
    Malha_Do_ClienteHandler.procurarMalha_Do_Cliente(req.params.id).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.post("/", (req, res) => {   
    Malha_Do_ClienteHandler.criarMalha_Do_Cliente(req.body).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.delete("/:id", (req, res) => {   
    Malha_Do_ClienteHandler.deletarMalha_Do_Cliente(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.put("/:id", (req, res) => {   
    Malha_Do_ClienteHandler.editarMalha_Do_Cliente(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

module.exports = router;