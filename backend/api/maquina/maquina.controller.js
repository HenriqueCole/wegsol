const express = require("express");
const router = express.Router();

const maquinaHandler = require("./maquina.handler");

router.get("/", (req, res) => {
    maquinaHandler.buscarMaquinas().then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.get('/:id', (req, res) => {
    maquinaHandler.buscarMaquina(req.params.id).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.post("/", (req, res) => {   
    maquinaHandler.criarMaquina(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.delete("/:id", (req, res) => {   
    maquinaHandler.deletarMaquina(req.params.id).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

router.put("/:id", (req, res) => {   
    maquinaHandler.editarMaquina(req, res).then(dados => res.json(dados)).catch(error => {
        res.status(404).json(error.message);
    });
})

module.exports = router;