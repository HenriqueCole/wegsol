const crud = require('../../crud/server');

async function criarCliente(req, res){
    const cliente = req.body;
    const clientes = await crud.buscar('cliente');
    if(cliente.nome != "" && cliente.cnpj != ""){
        if(clientes.findIndex(c => c.cnpj == cliente.cnpj) != -1){
            return await crud.salvar("cliente", null, cliente);
        }else{
            throw new Error("Erro! cnpj existente!");
        }
    }else{
        throw new Error("Erro! Falta algum dado!");
    }
}

async function buscarClientes(){
    return await crud.buscar("cliente");
}

async function buscarCliente(req, res){
    const cliente = await crud.buscar("cliente"); 
    if(cliente.findIndex(c => c.id == req.params.id) != -1){
        return await crud.buscarPorId("cliente", req.params.id);
    }else{
        throw new Error("Erro! Id inválido!");
    }
}

async function deletarCliente(req, res){
    const cliente = await crud.buscar("cliente"); 
    if(cliente.findIndex(c => c.id == req.params.id) != -1){
    return await crud.remover("cliente", req.params.id);
    }else{
        throw new Error("Id inválido!");
    }
}

async function editarCliente(req, res){
    const cliente = await crud.buscar("cliente");
    if(cliente.findIndex(c => c.id == req.params.id) != -1){
        return await crud.salvar("cliente", req.params.id, req.body);
    }else{
        throw new Error("Id inválido!");
    }
}

module.exports = {
    criarCliente,
    buscarClientes,
    buscarCliente,
    deletarCliente,
    editarCliente
}