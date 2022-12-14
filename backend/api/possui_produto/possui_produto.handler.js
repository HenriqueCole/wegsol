const crud = require("../../crud/server");
const tabela = "possui_produto"

async function procurarPossui_Produtos() {
     return await crud.buscar(tabela);
}

async function procurarPossui_Produto(id) {
    return await crud.buscarPorId(tabela, id);
}

async function procurarMaquinaPorProdutoID(id) {
    const listaPossuiProduto = await crud.buscarComFiltro(tabela, "==", "idEntrada_De_Produtos", id); 
    
    return listaPossuiProduto;
}

async function criarPossui_Produto(dados) {
    if (dados.idMaquina && dados.idEntrada_De_Produtos) {
        return await crud.salvar(tabela, false, dados);
    } else {
        return "Erro! Falta algum dado!"
    }
}

async function editarPossui_Produto(dados, id){
    if (dados.id && dados.idMaquina && dados.idEntrada_De_Produtos) {
        return await crud.salvar(tabela, id, dados);
    } else {
        return "Erro! Falta algum dado!"
    }
}

async function deletarPossui_Produto(id){
    return await crud.remover(tabela, id);
}


module.exports = {
    procurarPossui_Produtos, 
    procurarPossui_Produto, 
    procurarMaquinaPorProdutoID,
    criarPossui_Produto, 
    editarPossui_Produto, 
    deletarPossui_Produto
};