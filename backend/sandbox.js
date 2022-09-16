const crud = require("./crud/server");

async function buscarTeste() {
   console.log(await crud.buscar("cliente"))
}

buscarTeste()