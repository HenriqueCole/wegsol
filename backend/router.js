const express = require("express");
const router = express.Router();

/*Examples
const clientes = require("./api//clientes/clientes.controller");
router.use("/clientes", clientes);
*/

const fornecedor = require("./api/fornecedor/fornecedor.controller");

router.use("/fornecedor", fornecedor);

module.exports = router;