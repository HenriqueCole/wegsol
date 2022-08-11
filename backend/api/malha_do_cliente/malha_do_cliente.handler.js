const { async } = require('@firebase/util');
const crud = require('../../crud/server');

async function criarMalha_Do_Cliente(req, res){
    const dados = await crud.salvar("malha", null,
    req.body);
    return dados;
}

async function procurarMalha_Do_Cliente(){
    const dados = await crud.buscar("malha");
    return (dados);
}

async function procurarMalhas_Do_Cliente(){
    const dados = await crud.buscarPorId("malha");
    return dados;
}

async function deletarMalha_Do_Cliente(req, res){
    const malha = await crud.buscar("malha"); 
    if(malha.findIndex(c => c.idMALHA == req.params.idMALHA) != -1){
    const dados = await crud.deletar("cliente", req.params.id);
    return dados;
    }else{
        res.status(404).send("id inválido");
    }
}

module.exports = {
    criarMalha_Do_Cliente,
    procurarMalha_Do_Cliente,
    procurarMalhas_Do_Cliente,
    deletarMalha_Do_Cliente
}