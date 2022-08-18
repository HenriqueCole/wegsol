const crud = require("../../CRUD/server");
const tabela = "malha"
const fios_da_malha = require("../fios_da_malha/fios_da_malha.handler");
const malha_do_cliente = require("../malha_do_cliente/malha_do_cliente.handler");

async function procurarMalhas() {
    return await crud.buscar(tabela);
}

async function procurarMalha(id) {
    const listaMalhas = await procurarMalhas(tabela);

    if (listaMalhas.filter((Malhas) => Malhas.id == id).length == 0) {
        return "Erro! Este ID não foi encontrado!"
    } else {
        return await crud.buscarPorId(tabela, id);
    }
}

async function criarMalha(dados) {
    const listaMalhas = await procurarMalhas(tabela);
    const fios = await crud.buscar(tabelaFio);
    const cliente = await crud.buscar(cliente);
    const malha = req.body;

    if (dados.descricao) {
        if (listaMalhas.filter((Malhas) => Malhas.descricao == dados.descricao).length == 0 
        && fios.findIndex(f => f.id == malha.idFio) != -1 && cliente.findIndex(c => c.id == malha.idCliente) != -1) {
                const dados = {
                    idFio: malha.idFio,
                    idMalha: malha.id,
                }
                await fios_da_malha.criarFios_Da_Malha(dados);
                dados = {
                    idMalha: malha.id,
                    idCliente: malha.idCliente
                }
                await malha_do_cliente.criarMalha_Do_Cliente(dados);
                return await crud.salvar(tabela, false, dados);
        } else {
            return "Erro! A descrição dessa malha já existe!"
        }
    } else {
        return "Erro! Falta algum dado!"
    }

}

async function editarMalha(dados, id) {
    const listaMalhas = await procurarMalhas(tabela);

    if (dados.descricao) {
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
    const listaMalhas = await procurarMalhas(tabela);

    if (listaMalhas.filter((Malhas) => Malhas.id == id).length == 0) {
        return "Erro! Este ID não foi encontrado!"
    } else {
        return await crud.remover(tabela, id);
    }
}


module.exports = {
    procurarMalhas, procurarMalha, criarMalha, editarMalha, deletarMalha
};