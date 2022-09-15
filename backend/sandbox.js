const service = require("./api/retonarId/retornaid.js");

async function retornaIdFio() {
    let teste = await service.retornaIdFio("123");
    console.log(teste);
}

retornaIdFio();
