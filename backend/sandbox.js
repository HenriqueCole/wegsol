const crud = require("./crud/server");

async function teste() {
    await crud.salvar("Teste", null, {nome: "Kenzo"});
}

teste();