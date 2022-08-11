const crud = require("../../crud/server");

const tabelaEntrada_De_Fio = "entrada_de_fio";

async function buscarEntradas_De_Fio() {
    return await crud.buscar(tabelaEntrada_De_Fio);
}

async function buscarEntrada_De_Fio(id) {
    if (await idExiste(id))
        return await crud.buscarPorId(tabelaEntrada_De_Fio, id);
    return `ID inválido!`
}

async function criarEntrada_De_Fio(entrada_de_fio) {
    if (entrada_de_fioTemPropriedades(entrada_de_fio) || Object.values(entrada_de_fio).length != 8)
        return `Para cadastrar um entrada_de_fio é preciso ter os seguintes campos: qtd_caixa, qtd_kg, subtotal, qtd_rolos_por_caixa, arquivo_nf, idFornecedor, idFio, idCliente!`
        
    return await crud.salvar(tabelaEntrada_De_Fio, null, entrada_de_fio);
}

async function atualizarEntrada_De_Fio(id, entrada_de_fioAtualizado) {
    if (!await idExiste(id))
        return `ID inválido!`

    if (entrada_de_fioTemPropriedades(entrada_de_fio) || Object.values(entrada_de_fio).length != 8)
        return `Para atualizar um entrada_de_fio é preciso ter os seguintes campos: qtd_caixa, qtd_kg, subtotal, qtd_rolos_por_caixa, arquivo_nf, idFornecedor, idFio, idCliente!`

    return await crud.salvar(tabelaEntrada_De_Fio, id, entrada_de_fioAtualizado);
}

async function deletarEntrada_De_Fio(id) {
    if (!await idExiste(id))
        return `ID inválido!`
        
    return await crud.remover(tabelaEntrada_De_Fio, id);
}

async function entrada_de_fioTemPropriedades(entrada_de_fio) {
    if (
        entrada_de_fio.qtd_caixa && entrada_de_fio.qtd_kg && entrada_de_fio.subtotal
        && entrada_de_fio.qtd_rolos_por_caixa && entrada_de_fio.arquivo_nf
        && entrada_de_fio.idFornecedor && entrada_de_fio.idFio
        && entrada_de_fio.idCliente
    ) {
        return true;
    }
    return false;
}

async function idExiste(id) {
    const listaFio = await crud.buscar(tabelaFio);

    const existe = listaFio.some((element) => {
        return element.id == id
    });

    return existe;
}

module.exports = {
    buscarEntradas_De_Fio,
    buscarEntrada_De_Fio,
    criarEntrada_De_Fio,
    atualizarEntrada_De_Fio,
    deletarEntrada_De_Fio,
}