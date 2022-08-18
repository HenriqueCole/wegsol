const crud = require('../../crud/server');
const possui_malha = require('../../api/possui_malha/possui_malha.handler');

async function criarMaquina(req, res){
    const maquina = req.body;
    const listaMalha = await crud.buscar("malha");
    if(maquina.nome != "" && maquina.marca != "" && maquina.ano_fabricacao !=  "" && maquina.ano_compra != "" 
        && maquina.valorCompra != "" && maquina.rpm != "" && maquina.qtd_agulhas && maquina.qtd_blocos 
        && maquina.qtd_gaiolas != "" && maquina.qtd_cones_por_gaiola && maquina.idMalha){
            if (listaMalha.filter((Malha) => Malha.id == maquina.idMalha).length != 0) {
                const maquinaCriada = await crud.salvar("maquina", null, maquina);
                const dados = {
                    idMaquina: maquinaCriada.id,
                    idMalha: maquina.idMalha
                }
                possui_malha.criarPossui_Malha(dados)
                return maquinaCriada;
            } else {
                return "Erro! ID da malha inválido!"
            }
        }else{
            return "Erro! Falta algum dado!";
        }
}

async function buscarMaquinas(){
    return await crud.buscar("maquinas");
}

async function buscarMaquina(){
    return await crud.buscarPorId("maquinas");
}

async function deletarMaquina(req, res){
    const maquina = await crud.buscar("maquina"); 
    if(maquina.findIndex(c => c.idMAQUINA == req.params.idMAQUINA) != -1){
    const dados = await crud.deletar("cliente", req.params.id);
    return dados;
    }else{
        res.status(404).send("id inválido");
    }
}

async function editarMaquina(req, res){
    const maquina = await crud.buscar("maquina");
    if(maquina.findIndex(c => c.idMAQUINA == req.params.idMAQUINA)!=-1){
        return await crud.deletar("cliente", req.params.id);
    }else{
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