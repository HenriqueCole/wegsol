const crud = require("../../CRUD/server");
const tabela = "produto";
const listaProduto = await crud.buscar(tabela);

async function procurarProdutos() {
     return await crud.buscar(tabela);
}

async function procurarProduto(id) {
    if (listaProduto.filter((Produto) => Produto.id == id).length == 0) {
        return await "Este ID não foi encontrado!"
    } else {
        return await crud.buscarPorId(tabela, id);
    }
}

async function criarProduto(dados) {
    if (dados.descricao && dados.quantidade && dados.valorTotal && dados.arquivoNF && dados.idFornecedor) {
        if (listaProduto.filter((Produto) => Produto.descricao == dados.descricao && Produto.idFornecedor == dados.idFornecedor).length == 0) {
            return await crud.salvar(tabela, false, dados);
        } else {
            return await "Erro! Já existe este produto!"
        }
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function editarProduto(dados, id){
    if (dados.id && dados.descricao && dados.quantidade && dados.valorTotal && dados.arquivoNF && dados.idFornecedor) {
        if (listaProduto.filter((Produto) => Produto.descricao == dados.descricao && Produto.idFornecedor == dados.idFornecedor).length == 0) {
            return await crud.salvar(tabela, id, dados);
        } else {
            return await "Erro! Já existe este produto!"
        }
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function deletarProduto(id){
    if (listaProduto.filter((Produto) => Produto.id == id).length == 0) {
        return await "Este ID não foi encontrado!"
    } else {
        return await crud.remover(tabela, id);
    }
}


module.exports = {
    procurarProdutos, procurarProduto, criarProduto, editarProduto, deletarProduto
};