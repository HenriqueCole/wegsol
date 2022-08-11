const crud = require("../../CRUD/server");
const tabela = "fios_da_malha"

async function procurarFios_Da_Malhas() {
     return await crud.buscar(tabela);
}

async function procurarFios_Da_Malha(id) {
    return await crud.buscarPorId(tabela, id);
}

async function criarFios_Da_Malha(dados) {
    if (dados.idFio && dados.idMalha) {
        return await crud.salvar(tabela, false, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function editarFios_Da_Malha(dados, id){
    if (dados.id && dados.idFio && dados.idMalha) {
        return await crud.salvar(tabela, id, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function deletarFios_Da_Malha(id){
    return await crud.remover(tabela, id);
}


module.exports = {
    procurarFios_Da_Malhas, procurarFios_Da_Malha, criarFios_Da_Malha, editarFios_Da_Malha, deletarFios_Da_Malha
};