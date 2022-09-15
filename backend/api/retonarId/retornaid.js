const crud = require("../../crud/server");
const tabelaFornecedor = "fornecedor";
const tabelaFio = "fio";
const tabelaCliente = "cliente";
const tabelaMalha = "malha";
const tabelaFuncionario = "funcionario";
const tabelaMaquina = "maquina";

async function retornaIdFornecedor(cnpj) {
    let fornecedor = await crud.buscarComFiltro(tabelaFornecedor, "==", "cnpj", cnpj);

    return fornecedor[0].id;
}

async function retornaIdFio(descricao) {
    let fio = await crud.buscarComFiltro(tabelaFio, "==", "descricao", descricao);
    return fio[0].id;
}

async function retornaIdCliente(cnpj) {
    let cliente = await crud.buscarComFiltro(tabelaCliente, "==", "cnpj", cnpj);
    return cliente[0].id;
}

async function retornaIdMalha(descricao) {
    let malha = await crud.buscarComFiltro(tabelaMalha, "==", "descricao", descricao);
    return malha[0].id;
}

async function retornaIdFuncionario(cpf) {
    let funcionario = await crud.buscarComFiltro(tabelaFuncionario, "==", "cpf", cpf);
    return funcionario[0].id;
}

async function retornaIdMaquina(nome) {
    let maquina = await crud.buscarComFiltro(tabelaMaquina, "==", "nome", nome);
    return maquina[0].id;
}

module.exports = { 
    retornaIdFornecedor,
    retornaIdFio,
    retornaIdCliente,
    retornaIdMalha,
    retornaIdFuncionario,
    retornaIdMaquina
};