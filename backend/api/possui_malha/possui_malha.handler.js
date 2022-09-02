const crud = require("../../CRUD/server");
const tabela = "possui_malha"

async function procurarPossui_Malhas() {
     return await crud.buscar(tabela);
}

async function procurarPossui_Malha(id) {
    return await crud.buscarPorId(tabela, id);
}

async function criarPossui_Malha(dados) {
    if (dados.idMaquina && dados.idMalha) {
        return await crud.salvar(tabela, false, dados);
    } else {
        return "Erro! Falta algum dado!"
    }
}

async function editarPossui_Malha(dados, id){
    if (dados.id && dados.idMaquina && dados.idMalha) {
        return await crud.salvar(tabela, id, dados);
    } else {
        return "Erro! Falta algum dado!"
    }
}

async function deletarPossui_Malhas(id){
    return await crud.remover(tabela, id);
}


module.exports = {
    procurarPossui_Malhas, procurarPossui_Malha, criarPossui_Malha, editarPossui_Malha, deletarPossui_Malhas
};