const express = require("express");
const router = express.Router();

const producaoHandler = require("./producao.handler");

router.get("/", (req, res) => {
    producaoHandler.buscarProducoes().then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.get('/:id', (req, res) => {
    producaoHandler.buscarProducao(req.params.id).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.post("/", (req, res) => {   
    producaoHandler.criarProducao(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.delete("/:id", (req, res) => {   
    producaoHandler.deletarProducao(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.put("/:id", (req, res) => {
    producaoHandler.editarProducao(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

module.exports = router;