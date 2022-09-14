const crud = require("./crud/server");

async function buscarTeste() {
    return await crud.buscar("cliente");
}

console.log(buscarTeste());