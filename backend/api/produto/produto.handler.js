const crud = require("../../CRUD/server");
const tabela = "produto";
const possui_produto = require("../possui_produto/possui_produto.handler");

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
    const listaMaquina = await crud.buscar("maquina");

    if (dados.descricao && dados.quantidade && dados.valor_total_produto && dados.arquivo_nf && dados.idFornecedor && dados.idMaquina) {
        if (listaProduto.filter((Produto) => Produto.descricao == dados.descricao && Produto.idFornecedor == dados.idFornecedor).length == 0) {
            if (listaFornecedor.filter((Fornecedor) => Fornecedor.id == dados.idFornecedor).length != 0) {
                if (listaMaquina.filter((Maquina) => Maquina.id == dados.idMaquina).length != 0) {
                    const produtoCriado = await crud.salvar(tabela, false, dados);
                    const dado = {
                        idEntrada_De_Produtos: produtoCriado.id,
                        idMaquina: dados.idMaquina
                    }
                    possui_produto.criarPossui_Produto(dado)
                    return produtoCriado;
                } else {
                    return "Erro! ID da máquina inválido!";
                }
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
    const listaProduto = await crud.buscar("produto")
    const listaFornecedor = await crud.buscar("fornecedor");
    const listaMaquina = await crud.buscar("maquina");
    if (listaProduto.filter((Produto) => Produto.id == id) = ! "") {
        if (dados.descricao && dados.quantidade && dados.valor_total_produto && dados.arquivo_nf && dados.idFornecedor && dados.idMaquina) {
            if (listaFornecedor.filter((Fornecedor) => Fornecedor.id == dados.idFornecedor).length != 0) {
                if (listaMaquina.filter((Maquina) => Maquina.id == dados.idMaquina).length != 0) {
                    return await crud.salvar(tabela, id, dados);
                } else {
                    return "Erro! ID da máquina inválido!";
                }
            } else {
                return "Erro! Fornecedor inexistente!"
            }
        } else {
            return "Erro! Falta algum dado!"
        }
    } else {
        return "Erro! ID do produto que deseja editar inválido!"

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