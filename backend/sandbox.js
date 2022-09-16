const service = require("./api/retonarId/retornaid.js");
const malha = require("./api/malha/malha.handler.js");
const fio = require("./api/fio/fio.handler");
const produto = require("./api/produto/produto.handler.js");

async function retornaIdFio() {
   // console.log(await malha.procurarMalhas());
   // console.log(await fio.buscarFios());
   // console.log(await service.retornaIdFio("fio do cassianio"));
   // console.log(await fio.buscarFio("0GTToxDNtEO4uC1Rsf1C"));
   // console.log(await produto.procurarProdutos());
}

retornaIdFio();
