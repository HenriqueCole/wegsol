const crud = require("../../CRUD/server");
const tabela = "malha"
const tabelaFio = "fio"
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
    const cliente = await crud.buscar("cliente");
    const malha = dados;

    if (dados.descricao) {
        if (listaMalhas.filter((Malhas) => Malhas.descricao == dados.descricao).length == 0
            && cliente.findIndex(c => c.id == malha.idCliente) != -1) {
            let malhaSalva;
            if (await fiosValido(malha.idFio)) {
                
                malhaSalva = await crud.salvar(tabela, false, { descricao: dados.descricao });

                for (let fioDaMalha of dados.idFio) {
                    console.log(fioDaMalha)
                    console.log(malhaSalva)
                    const dadosNovo = {
                        idFio: fioDaMalha,
                        idMalha: malhaSalva.id,
                    }
                    await fios_da_malha.criarFios_Da_Malha(dadosNovo);
                }
            } else {
                return "Erro! Há fios inválidos!"
            }
            dadosNovo = {
                idMalha: malha.id,
                idCliente: malha.idCliente
            }
            await malha_do_cliente.criarMalha_Do_Cliente(dadosNovo);
            return malhaSalva;
        } else {
            return "Erro! A descrição dessa malha já existe!"
        }
    } else {
        return "Erro! Falta algum dado!"
    }

}

async function fiosValido(listaIdFios) {
    let valido = true;
    for (let idFio of listaIdFios) {
        await crud.buscarPorId(tabelaFio, idFio).catch((error) => {
            valido = false;
        });
    }
    return valido;
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