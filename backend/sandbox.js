const service = require("./api/retonarId/retornaid.js");
const malha = require("./api/malha/malha.handler.js");

async function retornaIdFio() {
   console.log(await malha.procurarMalhas());
}

retornaIdFio();
