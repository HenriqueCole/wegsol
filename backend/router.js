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
const produto = require("./api/produto/produto.controller");
const possui_produto = require("./api/possui_produto/possui_produto.controller");
const possui_malha = require("./api/possui_malha/possui_malha.controller");
const malha = require("./api/malha/malha.controller");
const fios_da_malha = require("./api/fios_da_malha/fios_da_malha.controller");
const cliente = require("./api/cliente/cliente.controller");
const funcionario = require("./api/funcionario/funcionario.controller");
const maquina = require("./api/maquina/maquina.controller");
const producao = require("./api/producao/producao.controller");
const malha_do_cliente = require("./api/malha_do_cliente/malha_do_cliente.controller");

router.use("/fornecedor", fornecedor);
router.use("/fio", fio);
router.use("/entrada_de_fio", entrada_de_fio);
router.use("/saida_de_malha", saida_de_malha);
router.use("/saidas_de_malhas", saidas_de_malhas);
router.use("/fios_da_malha", fios_da_malha);
router.use("/malha", malha);
router.use("/possui_malha", possui_malha);
router.use("/possui_produto", possui_produto);
router.use("/produto", produto);
router.use("/cliente", cliente);
router.use("/funcionario", funcionario);
router.use("/maquina", maquina);
router.use("/producao", producao);
router.use("/malha_do_cliente", malha_do_cliente);

module.exports = router;