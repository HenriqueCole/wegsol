const crud = require("../../crud/server");

const tabelaFio = "fio";

async function buscarFios() {
    return await crud.buscar(tabelaFio);
}

async function buscarFio(id) {
    if (await idExiste(id))
        return await crud.buscarPorId(tabelaFio, id);
    return `ID inválido!`
}

async function criarFio(fio) {
    return await crud.salvar(tabelaFio, null, fio);
}

async function atualizarFio(id, fioAtualizado) {
    if (!await idExiste(id))
        return `ID inválido!`

    return await crud.salvar(tabelaFio, id, fioAtualizado);
}

async function deletarFio(id) {
    if (!await idExiste(id))
        return `ID inválido!`

    return await crud.remover(tabelaFio, id);
}

async function idExiste(id) {
    const listaFio = await crud.buscar(tabelaFio);

    const existe = listaFio.some((element) => {
        return element.id == id
    });

    return existe;
}

module.exports = {
    buscarFios,
    buscarFio,
    criarFio,
    atualizarFio,
    deletarFio
}