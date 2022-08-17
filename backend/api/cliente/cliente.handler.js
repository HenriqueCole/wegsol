const crud = require('../../crud/server');

async function criarCliente(req, res){
    const cliente = req.body;
    if(cliente.nome != "" && cliente.cnpj != ""){
        return await crud.salvar("cliente", null, cliente);
    }else{
        return await "Erro! Falta algum dado!";
    }
}

async function buscarClientes(){
    return await crud.buscar("cliente");
}

async function buscarCliente(){
    return await crud.buscarPorId("cliente");
}

async function deletarCliente(req, res){
    const cliente = await crud.buscar("cliente"); 
    if(cliente.findIndex(c => c.idCLIENTE == req.params.idCLIENTE) != -1){
    return await crud.deletar("cliente", req.params.id);
    }else{
        return await("Id inválido!");
    }
}

async function editarCliente(req, res){
    const cliente = await crud.buscar("cliente");
    if(cliente.findIndex(c => c.idCLIENTE == req.params.idCLIENTE) != -1){
        return await crud.editar("cliente", req.params.id);
    }else{
        return await"Id inválido!";
    }
}

module.exports = {
    criarCliente,
    buscarClientes,
    buscarCliente,
    deletarCliente,
    editarCliente
}