const crud = require('../../crud/server');

async function criarMaquina(req, res) {
    const maquina = req.body;
    const maquinas = await crud.buscar("maquina");
    const malha = await crud.buscar("malha");
    //trocar a condição
    if (maquina.nome && maquina.marca && maquina.ano_fabricacao && maquina.ano_compra
        && maquina.valor_compra && maquina.rpm && maquina.qtd_agulhas && maquina.qtd_blocos
        && maquina.qtd_platinas &&
        maquina.qtd_gaiolas && maquina.qtd_cones_por_gaiola && maquina.idMalha) {
            console.log("maquina: " + maquina);
        if (malha.filter((Malha) => Malha.id == maquina.idMalha) != "") {
            if(maquinas.findIndex(m => m.nome == maquina.nome) != -1 && maquinas.findIndex(m => m.marca == maquina.marca) != -1){
                return await crud.salvar("maquina", null, maquina);
                
            }else{
                return "Erro! Já existe com este nome e esta marca!";
            }
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
    const maquina = await crud.buscar("maquina");
    if(maquina.findIndex(m => m.id == id) != -1){
        return await crud.buscarPorId("maquina", id);
    }else{
        return "Erro! id inexistente!";
    }
}

async function deletarMaquina(id) {
    const maquina = await crud.buscar("maquina");
    console.log("id: ", id);
    if (maquina.findIndex(m => m.id == id) != -1) {
        return await crud.remover("maquina", id);
    } else {
        res.status(404).send("id inválido");
    }
}

async function editarMaquina(req, res) {
    const maquina = await crud.buscar("maquina");
    if (maquina.findIndex(c => c.id == req.params.id) != -1) {
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