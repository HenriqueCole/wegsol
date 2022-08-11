const { async } = require('@firebase/util');
const crud = require('../../crud/server');

async function criarMaquina(req, res){
    const maquina = req.body;
    if(maquina.nome != "" && maquina.marca != "" && maquina.ano_fabricacao !=  "" && maquina.ano_compra != "" 
        && maquina.valorCompra != "" && maquina.rpm != "" && maquina.qtd_agulhas && maquina.qtd_blocos 
        && maquina.qtd_gaiolas != "" && maquina.qtd_cones_por_gaiola){
            return await crud.salvar("maquina", null, maquina);
        }else{
            return await "Erro! Falta algum dado!";
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

module.exports = {
    criarMaquina,
    buscarMaquina,
    buscarMaquinas,
    deletarMaquina
}