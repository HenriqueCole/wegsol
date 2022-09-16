const crud = require("../../crud/server");

const tabelaSaidas_De_Malhas = "saidas_de_malhas";

async function buscarSaidas_De_Malhas() {
    return await crud.buscar(tabelaSaidas_De_Malhas);
}

async function buscarSaidas_De_MalhasEspecifico(id) {
    if (await idExiste(id))
        return await crud.buscarPorId(tabelaSaidas_De_Malhas, id);
    return `ID inválido!`
}

async function criarSaidas_De_Malhas(saidas_de_malhas) {
    if (saida_de_malhaTemPropriedades(saidas_de_malhas) && Object.values(saidas_de_malhas).length != 3)
        return `Para cadastrar um saidas_de_malhas é preciso ter os seguintes campos: nota_fiscal, valorTotal, idCliente!`

    if (!await chaveSecundariaValida(saidas_de_malhas))
        return `Há chaves secundárias inválidas!`

    return await crud.salvar(tabelaSaidas_De_Malhas, null, saidas_de_malhas);
}

async function atualizarSaidas_De_Malhas(id, saidas_de_malhas) {
    if (!await idExiste(id))
        return `ID inválido!`

    if (saida_de_malhaTemPropriedades(saidas_de_malhas) && Object.values(saidas_de_malhas).length != 3)
        return `Para atualizar um saida_de_malha é preciso ter os seguintes campos: nota_fiscal, valorTotal, idCliente!`

    if (!await chaveSecundariaValida(saidas_de_malhas))
        return `Há chaves secundárias inválidas!`

    return await crud.salvar(tabelaSaidas_De_Malhas, id, saidas_de_malhas);
}

async function deletarSaidas_De_Malhas(id) {
    if (!await idExiste(id))
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

async function chaveSecundariaValida(obj) {
    const listaClientes = await crud.buscar("cliente");

    const existeClientes = listaClientes.some((element) => {
        return element.id == obj.idCliente
    });

    if (existeClientes)
        return true;
    return false;
}

module.exports = {
    buscarSaidas_De_Malhas,
    buscarSaidas_De_MalhasEspecifico,
    criarSaidas_De_Malhas,
    atualizarSaidas_De_Malhas,
    deletarSaidas_De_Malhas,
}