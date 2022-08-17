const express = require("express");
const router = express.Router();

/*Examples
const clientes = require("./api//clientes/clientes.controller");
router.use("/clientes", clientes);
*/

const fornecedor = require("./api/fornecedor/fornecedor.controller");
const fio = require("./api/fio/fio.controller");
const entrada_de_fio = require("./api/entrada_de_fio/entrada_de_fio.controller");
const saida_de_malha = require("./api/saida_de_malha/saida_de_malha.controller");
const saidas_de_malhas = require("./api/saidas_de_malhas/saidas_de_malhas.controller");

router.use("/fornecedor", fornecedor);
router.use("/fio", fio);
router.use("/entrada_de_fio", entrada_de_fio);
router.use("/saida_de_malha", saida_de_malha);
router.use("/saidas_de_malhas", saidas_de_malhas);

module.exports = router;