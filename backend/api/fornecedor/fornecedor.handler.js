const crud = require("../../crud/server");

const tabelaFornecedor = "fornecedor";

async function buscarFornecedores() {
    // return await crud.buscar(tabelaFornecedor);
    return [{teste: "teste"}];
}

async function buscarFornecedor(id) {
    if (await idExiste(id))
        return await crud.buscarPorId(tabelaFornecedor, id);
    throw new Error(`ID inválido!`);
}

async function criarFornecedor(fornecedor) {
    if (!(fornecedor.nome && fornecedor.cnpj) && Object.values(fornecedor).length != 2)
        throw new Error(`Para cadastrar um fornecedor é preciso ter somente um nome e CNPJ!`);

        
    if (await cnpjInvalido(fornecedor.cnpj))
        throw new Error(`CNPJ já em uso`);

    return await crud.salvar(tabelaFornecedor, null, fornecedor);
}

async function atualizarFornecedor(id, fornecedor) {
    if (!await idExiste(id))
        throw new Error(`ID inválido!`);

    if (!(fornecedor.nome && fornecedor.cnpj) && Object.values(fornecedor).length != 2)
        throw new Error(`Para atualizar um fornecedor é preciso ter somente um nome e CNPJ!`);

    return await crud.salvar(tabelaFornecedor, id, fornecedor);
}

async function deletarFornecedor(id) {
    if (!await idExiste(id))
        throw new Error(`ID inválido!`);

    return await crud.remover(tabelaFornecedor, id);
}

async function cnpjInvalido(cnpj) {
    const listaFornecedores = await crud.buscar(tabelaFornecedor);

    const cnpjInvalido = listaFornecedores.some((fornecedor) => {
        return fornecedor.cnpj == cnpj
    });

    return cnpjInvalido;
}

async function idExiste(id) {
    const listaFornecedores = await crud.buscar(tabelaFornecedor);

    const existe = listaFornecedores.some((element) => {
        return element.id == id
    });

    return existe;
}

module.exports = {
    buscarFornecedores,
    buscarFornecedor,
    criarFornecedor,
    atualizarFornecedor,
    deletarFornecedor
}