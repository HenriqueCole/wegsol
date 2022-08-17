const crud = require("../../crud/server");

const tabelaSaida_De_Malha = "saida_de_malha";

async function buscarSaidas_De_Malhas() {
    return await crud.buscar(tabelaSaida_De_Malha);
}

async function buscarSaida_De_Malha(id) {
    if (await idExiste(id))
        return await crud.buscarPorId(tabelaSaida_De_Malha, id);
    return `ID inválido!`
}

async function criarSaida_De_Malha(saida_de_malha) {
    if (saida_de_malhaTemPropriedades(saida_de_malha) && Object.values(saida_de_malha).length != 7)
        return `Para cadastrar um saida_de_malha é preciso ter os seguintes campos: qtd_rolos, peso, qualidade, valor_saida, arquivo_nf, idMalha, idSaidas_De_Malhas!`
        
    return await crud.salvar(tabelaSaida_De_Malha, null, saida_de_malha);
}

async function atualizarSaida_De_Malha(id, saida_de_malhaAtualizado) {
    if (!await idExiste(id))
        return `ID inválido!`

    if (saida_de_malhaTemPropriedades(saida_de_malha) && Object.values(saida_de_malha).length != 7)
        return `Para atualizar um saida_de_malha é preciso ter os seguintes campos: qtd_rolos, peso, qualidade, valor_saida, arquivo_nf, idMalha, idSaidas_De_Malhas!`

    return await crud.salvar(tabelaSaida_De_Malha, id, saida_de_malhaAtualizado);
}

async function deletarSaida_De_Malha(id) {
    if (!await idExiste(id))
        return `ID inválido!`

    return await crud.remover(tabelaSaida_De_Malha, id);
}

async function saida_de_malhaTemPropriedades(saida_de_malha) {
    if (
        saida_de_malha.qtd_rolos && saida_de_malha.peso && saida_de_malha.qualidade
        && saida_de_malha.valor_saida && saida_de_malha.arquivo_nf
        && saida_de_malha.idMalha && saida_de_malha.idSaidas_De_Malhas
    ) {
        return true;
    }
    return false;
}

async function idExiste(id) {
    const listaSaida_De_Malha = await crud.buscar(tabelaSaida_De_Malha);

    const existe = listaSaida_De_Malha.some((element) => {
        return element.id == id
    });

    return existe;
}

module.exports = {
    buscarSaidas_De_Malhas,
    buscarSaida_De_Malha,
    criarSaida_De_Malha,
    atualizarSaida_De_Malha,
    deletarSaida_De_Malha,
}