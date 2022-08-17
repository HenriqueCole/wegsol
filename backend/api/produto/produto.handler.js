const crud = require("../../CRUD/server");
const tabela = "produto";

async function procurarProdutos() {
    return await crud.buscar(tabela);
}

async function procurarProduto(id) {
    const listaProduto = await procurarProdutos();
    
    if (listaProduto.filter((Produto) => Produto.id == id).length == 0) {
        return "Este ID não foi encontrado!"
    } else {
        return await crud.buscarPorId(tabela, id);
    }
}

async function criarProduto(dados) {
    const listaFornecedor = await crud.buscar("fornecedor");
    const listaProduto = await procurarProdutos();

    if (dados.descricao && dados.quantidade && dados.valorTotal && dados.arquivoNF && dados.idFornecedor) {
        if (listaProduto.filter((Produto) => Produto.descricao == dados.descricao && Produto.idFornecedor == dados.idFornecedor).length == 0) {
            if (listaFornecedor.filter((Fornecedor) => Fornecedor.id == dados.idFornecedor).length != 0) {
                return await crud.salvar(tabela, false, dados);
            } else {
                return "Erro! Fornecedor inexistente!"
            }
        } else {
            return "Erro! Já existe este produto!"
        }
    } else {
        return "Erro! Falta algum dado!"
    }
}

async function editarProduto(dados, id) {
    const listaFornecedor = await crud.buscar("fornecedor");
    const listaProduto = await procurarProdutos();

    if (dados.id && dados.descricao && dados.quantidade && dados.valorTotal && dados.arquivoNF && dados.idFornecedor) {
        if (listaProduto.filter((Produto) => Produto.descricao == dados.descricao && Produto.idFornecedor == dados.idFornecedor).length == 0) {
            if (listaFornecedor.filter((Fornecedor) => Fornecedor.id == dados.idFornecedor).length != 0) {
                return await crud.salvar(tabela, id, dados);
            } else {
                return "Erro! Fornecedor inexistente!"
            }
        } else {
            return "Erro! Já existe este produto!"
        }
    } else {
        return "Erro! Falta algum dado!"
    }
}

async function deletarProduto(id) {
    const listaProduto = await procurarProdutos();

    if (listaProduto.filter((Produto) => Produto.id == id).length == 0) {
        return "Este ID não foi encontrado!"
    } else {
        return await crud.remover(tabela, id);
    }
}


module.exports = {
    procurarProdutos, 
    procurarProduto, 
    criarProduto, 
    editarProduto, 
    deletarProduto
};