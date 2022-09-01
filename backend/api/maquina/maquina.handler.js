const crud = require('../../crud/server');

async function criarMaquina(req, res) {
    const maquina = req.body;
    const malha = await crud.buscar("malha");
    //trocar a condição
    if (maquina.nome != "" && maquina.marca != "" && maquina.ano_fabricacao != "" && maquina.ano_compra != ""
        && maquina.valor_compra != "" && maquina.rpm != "" && maquina.qtd_agulhas && maquina.qtd_blocos != ""
        && maquina.qtd_platinas != "" &&
        maquina.qtd_gaiolas != "" && maquina.qtd_cones_por_gaiola != "" && maquina.idMalha != "") {
        if (malha.filter((Malha) => Malha.id == maquina.idMalha) != "") {
            return await crud.salvar("maquina", null, maquina);
        } else {
            return "Erro! id de malha inexistente!";
        }
    } else {
        return "Erro! Falta algum dado!";
    }
}

async function buscarMaquinas() {
    return await crud.buscar("maquina");
}

async function buscarMaquina(id) {
    return await crud.buscarPorId("maquina", id);
}

async function deletarMaquina(req, res) {
    const maquina = await crud.buscar("maquina");
    if (maquina.findIndex(c => c.idMAQUINA == req.params.idMAQUINA) != -1) {
        const dados = await crud.remover("maquina", req.params.id);
        return dados;
    } else {
        res.status(404).send("id inválido");
    }
}

async function editarMaquina(req, res) {
    const maquina = await crud.buscar("maquina");
    if (maquina.findIndex(c => c.idMAQUINA == req.params.idMAQUINA) != -1) {
        return await crud.salvar("maquina", req.params.id, req.body);
    } else {
        res.status(404).send("id inválido");
    }
}

module.exports = {
    criarMaquina,
    buscarMaquina,
    buscarMaquinas,
    deletarMaquina,
    editarMaquina
}