const { request } = require('express');
const crud = require('../../crud/server');

async function criarCliente(req, res){
    const cliente = req.body;
    const clientes = await crud.buscar('cliente');
    if(cliente.nome != "" && cliente.cnpj != ""){
        if(clientes.findIndex(c => c.cnpj == cliente.cnpj)){
            return await crud.salvar("cliente", null, cliente);
        }else{
            return "Erro! cnpj existente!"
        }
    }else{
        return "Erro! Falta algum dado!";
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
        return "Erro! Id inválido!";
    }
    
}

async function deletarCliente(req, res){
    const cliente = await crud.buscar("cliente"); 
    if(cliente.findIndex(c => c.id == req.params.id) != -1){
    return await crud.remover("cliente", req.params.id);
    }else{
        return("Id inválido!");
    }
}

async function editarCliente(req, res){
    const cliente = await crud.buscar("cliente");
    if(cliente.findIndex(c => c.id == req.params.id) != -1){
        return await crud.salvar("cliente", req.params.id, req.body);
    }else{
        return "Id inválido!";
    }
}

module.exports = {
    criarCliente,
    buscarClientes,
    buscarCliente,
    deletarCliente,
    editarCliente
}