const crud = require("../../crud/server");

const tabelaSaidas_De_Malhas = "saidas_de_malhas";

async function buscarSaidas_De_Malhas() {
    return await crud.buscar(tabelaSaidas_De_Malhas);
}

async function buscarSaidas_De_MalhasEspecifico(id) {
    if (idExiste(id))
        return await crud.buscarPorId(tabelaSaidas_De_Malhas, id);
    return `ID inválido!`
}

async function criarSaidas_De_Malhas(saida_de_malha) {
    if (saida_de_malhaTemPropriedades(saida_de_malha) || Object.values(saida_de_malha).length != 3)
        return `Para cadastrar um saida_de_malha é preciso ter os seguintes campos: nota_fiscal, valorTotal, idCliente!`

    return await crud.salvar(tabelaSaidas_De_Malhas, null, saida_de_malha);
}

async function atualizarSaidas_De_Malhas(id, saida_de_malhaAtualizado) {
    if (!idExiste(id))
        return `ID inválido!`

    if (saida_de_malhaTemPropriedades(saida_de_malha) || Object.values(saida_de_malha).length != 3)
        return `Para atualizar um saida_de_malha é preciso ter os seguintes campos: nota_fiscal, valorTotal, idCliente!`

    return await crud.salvar(tabelaSaidas_De_Malhas, id, saida_de_malhaAtualizado);
}

async function deletarSaidas_De_Malhas(id) {
    if (!idExiste(id))
        return `ID inválido!`
        
    return await crud.remover(tabelaSaidas_De_Malhas, id);
}

async function idExiste(id) {
    const listaSaidas_De_Malhas = await crud.buscar(tabelaSaidas_De_Malhas);

    const existe = listaSaidas_De_Malhas.some((element) => {
        return element.id == id
    });

    return existe;
}

async function saida_de_malhaTemPropriedades(saida_de_malha) {
    if ( saida_de_malha.nota_fiscal && saida_de_malha.valorTotal && saida_de_malha.idCliente ) {
        return true;
    }
    return false;
}

module.exports = {
    buscarSaidas_De_Malhas,
    buscarSaidas_De_MalhasEspecifico,
    criarSaidas_De_Malhas,
    atualizarSaidas_De_Malhas,
    deletarSaidas_De_Malhas,
}