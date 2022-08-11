const crud = require("../../crud/server");

const tabelaFornecedor = "fornecedor";

async function buscarFornecedores() {
    return await crud.buscar(tabelaFornecedor);
}

async function buscarFornecedor(id) {
    if (await idExiste(id))
        return await crud.buscarPorId(tabelaFornecedor, id);
    return `ID inválido!`
}

async function criarFornecedor(fornecedor) {
    if (!(fornecedor.nome && fornecedor.cnpj) || Object.values(fornecedor).length != 2)
        return `Para cadastrar um fornecedor é preciso ter somente um nome e CNPJ!`

    if (cnpjInvalido(fornecedor.cnpj))
        return `CNPJ já em uso`

    return await crud.salvar(tabelaFornecedor, null, fornecedor);
}

async function atualizarFornecedor(id, fornecedorAtualizado) {
    if (!await idExiste(id))
        return `ID inválido!`

    if (!(fornecedor.nome && fornecedor.cnpj) || Object.values(fornecedor).length != 2)
        return `Para atualizar um fornecedor é preciso ter somente um nome e CNPJ!`
    
    return await crud.salvar(tabelaFornecedor, id, fornecedorAtualizado);
}

async function deletarFornecedor(id) {
    if (!await idExiste(id))
        return `ID inválido!`

    return await crud.remover(tabelaFornecedor, id);
}

async function cnpjInvalido (cnpj) {
    const listaFornecedores = await crud.buscar(tabelaFornecedor);

    const cnpjInvalido = listaFornecedores.some((fornecedor) => {
        return fornecedor.cnpj == cnpj
    });

    return cnpjInvalido;
}

async function idExiste(id) {
    const listaFio = await crud.buscar(tabelaFio);

    const existe = listaFio.some((element) => {
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