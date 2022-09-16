const express = require("express");
const router = express.Router();

const funcionarioHandler = require("./funcionario.handler");

router.get("/", (req, res) => {
    funcionarioHandler.buscarFuncionarios().then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.get('/:id', (req, res) => {
    funcionarioHandler.buscarFuncionario(req.params.id).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.post("/", (req, res) => {   
    funcionarioHandler.criarFuncionario(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.delete("/:id", (req, res) => {   
    funcionarioHandler.deletarFuncionario(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.put("/:id", (req, res) => {   
    funcionarioHandler.editarFuncionario(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

module.exports = router;