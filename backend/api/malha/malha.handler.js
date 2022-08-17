const crud = require("../../CRUD/server");
const tabela = "malha"
const listaMalhas = await crud.buscar(tabela);

async function procurarMalhas() {
    return await crud.buscar(tabela);
}

async function procurarMalha(id) {
    if (listaMalhas.filter((Malhas) => Malhas.id == id).length == 0) {
        return "Erro! Este ID não foi encontrado!"
    } else {
        return await crud.buscarPorId(tabela, id);
    }
}

async function criarMalha(dados) {
    if (dados.descricao) {
        if (listaMalhas.filter((Malhas) => Malhas.descricao == dados.descricao).length == 0) {
            return await crud.salvar(tabela, false, dados);
        } else {
            return "Erro! A descrição dessa malha já existe!"
        }
    } else {
        return "Erro! Falta algum dado!"
    }

}

async function editarMalha(dados, id) {
    if (dados.id && dados.descricao) {
        if (listaMalhas.filter((Malhas) => Malhas.descricao == dados.descricao).length == 0) {
            return await crud.salvar(tabela, id, dados);
        } else {
            return "Erro! A descrição dessa malha já existe!"
        }
    } else {
        return "Erro! Falta algum dado!"
    }
}

async function deletarMalha(id) {
    if (listaMalhas.filter((Malhas) => Malhas.id == id).length == 0) {
        return "Erro! Este ID não foi encontrado!"
    } else {
        return await crud.remover(tabela, id);
    }
}


module.exports = {
    procurarMalhas, procurarMalha, criarMalha, editarMalha, deletarMalha
};