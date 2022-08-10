const crud = require("../../CRUD/server");
const tabela = "produto"

async function procurarProdutos() {
     return await crud.buscar(tabela);
}

async function procurarProduto(id) {
    return await crud.buscarPorId(tabela, id);
}

async function criarProduto(dados) {
    if (dados.descricao && dados.quantidade && dados.valorTotal && dados.arquivoNF && dados.idFornecedor) {
        return await crud.salvar(tabela, false, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function editarProduto(dados, id){
    if (dados.id && dados.descricao && dados.quantidade && dados.valorTotal && dados.arquivoNF && dados.idFornecedor) {
        return await crud.salvar(tabela, id, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function deletarProduto(id){
    return await crud.remover(tabela, id);
}


module.exports = {
    procurarProdutos, procurarProduto, criarProduto, editarProduto, deletarProduto
};