const crud = require('../../crud/server');

async function criarProducao(req, res){
    const producao = req.body;

    const clientes = await crud.buscar("cliente");
    const maquinas = await crud.buscar("maquina");
    const funcionarios = await crud.buscar("funcionario");

    if(producao.kgRoloMalha != "" && producao.defeito != "" && producao.idCliente != "" && producao.idMaquina != ""
        && producao.idFuncionario != ""){
            if(clientes.findIndex(c => c.id == producao.idCliente) != -1){
                if(maquinas.findIndex(m => m.id == producao.idMaquina) != -1){
                    if(funcionarios.findIndex(f => f.id == producao.idFuncionario) != -1){
                        return await crud.salvar("producao", null, producao); 
                    }else{
                        return "Erro! Funcionario não existe!";
                    }
                }else{
                    return "Erro! Maquina não existe!";
                }
            }else{
                return "Erro! Cliente não existe!";
            }
            
    }else{
        return "Erro! Falta algum dado!";
    }
}

async function buscarProducao(id){
    const listaProducoes = await crud.buscar("producao");
    if (listaProducoes.filter((Producao) => Producao.id == id) != "") {
        return await crud.buscarPorId("producao", id);
    }
    return "Erro! ID inválido!";
}

async function buscarProducoes(){
    const dados = await crud.buscar("producao");
    return dados;
}

async function deletarProducao(req, res){
    const producao = await crud.buscar("producao"); 
    if(producao.findIndex(c => c.id == req.params.id) != -1){
    return await crud.remover("producao", req.params.id);
    }else{
        res.status(404).send("id inválido");
    }
}

async function editarProducao(req, res){
    const producao = await crud.buscar("producao");
    if(producao.findIndex(c => c.id == req.params.id)!= -1){   
        return await crud.salvar("producao", req.params.id, req.body);
    }else{
        return await "id inválido!";
    }
}

module.exports = {
    criarProducao,
    buscarProducao,
    buscarProducoes,
    deletarProducao,
    editarProducao
}