const crud = require('../../crud/server');

async function criarProducao(req, res){
    const producao = req.body;

    const clientes = await crud.buscar("cliente");
    const maquinas = await crud.buscar("maquina");
    const funcionarios = await crud.buscar("funcionario");

    if(producao.kgRoloMalha != "" && producao.defeito != "" && producao.idCliente != "" && producao.idMaquina != ""
        && producao.idFuncionario != ""){
            if(clientes.findIndex(c => c.id == producao.idCliente != -1)){
                if(maquinas.findIndex(m => m.id == producao.idMaquina) != -1){
                    if(funcionarios.findIndex(f => f.id == producao.idFuncionario) != -1){
                        return await crud.salvar("maquina", null, producao); 
                    }else{
                        return await "Erro! Funcionario não existe!";
                    }
                }else{
                    return await "Erro! Maquina não existe!";
                }
            }else{
                return await "Erro! Cliente não existe!";
            }
            
    }else{
        return await("Erro! Falta algum dado!");
    }
}

async function buscarProducao(){
    const dados = await crud.buscar("maquinas");
    return (dados);
}

async function buscarProducoes(){
    const dados = await crud.buscarPorId("maquinas");
    return dados;
}

async function deletarProducao(req, res){
    const producao = await crud.buscar("producao"); 
    if(producao.findIndex(c => c.idPRODUCAO == req.params.idPRODUCAO) != -1){
    await crud.deletar("cliente", req.params.id);
    }else{
        res.status(404).send("id inválido");
    }
}

async function editarProducao(req, res){
    const producao = await crud.buscar("producao");
    if(producao.findIndex(c => c.idPRODUCAO == req.params.idPRODUCAO)!= -1){   
        return await crud.deletar("cliente", req.params.id);
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