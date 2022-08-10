const crud = require("../../CRUD/server");
const tabela = "malha"

async function procurarMalhas() {
     return await crud.buscar(tabela);
}

async function procurarMalha(id) {
    return await crud.buscarPorId(tabela, id);
}

async function criarMalha(dados) {
    if (dados.descricao) {
        return await crud.salvar(tabela, false, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function editarMalha(dados, id){
    if (dados.id && dados.descricao) {
        return await crud.salvar(tabela, id, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function deletarMalha(id){
    return await crud.remover(tabela, id);
}


module.exports = {
    procurarMalhas, procurarMalha, criarMalha, editarMalha, deletarMalha
};