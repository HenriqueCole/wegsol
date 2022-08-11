const { async } = require('@firebase/util');
const crud = require('../../crud/server');

async function criarFuncionario(req, res){
    const funcionario = req.body;
    if(funcionario.nome != "" && funcionario.cpf != "" && funcionario.idade != "" && funcionario.salario != "" 
    && funcionario.turno != ""){
        if(funcionario.turno == "primeiro" || funcionario.turno == "segundo" || funcionario.turno == "terceiro"){
            return await crud.salvar("funcionario", null,
            req.body);
        }else{
            return await "Erro! Turno Inválido!";
        }
    }else{
        return await "Erro! Falta algum dado!";
    }
}

async function buscarFuncionarios(){
    return await crud.buscar("funcionario");
}

async function buscarFuncionario(){
    const dados = await crud.buscarPorId("funcionario");
    return dados;
}

async function deletarFuncionario(req, res){
    const funcionario = await crud.buscar("cliente"); 
    if(funcionario.findIndex(c => c.idFUNCIONARIO == req.params.idFUNCIONARIO) != -1){
    return await crud.deletar("cliente", req.params.id);
    }else{
        return await "id inválido!";
    }
}

module.exports = {
    criarFuncionario,
    buscarFuncionarios,
    buscarFuncionario,
    deletarFuncionario
}