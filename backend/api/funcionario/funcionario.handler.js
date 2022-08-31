const crud = require('../../crud/server');

async function criarFuncionario(req, res){
    const funcionario = req.body;
    if(funcionario.nome != "" && funcionario.cpf != "" && funcionario.idade != "" && funcionario.salario != "" 
    && funcionario.turno != ""){
        if(parseInt(funcionario.idade) > 0 && typeof funcionario.idade != "string"){
        if(funcionario.turno == "primeiro" || funcionario.turno == "segundo" || funcionario.turno == "terceiro"){
            return await crud.salvar("funcionario", null,
            req.body);
        }else{
            return await "Erro! Turno Inválido!";
        }
    }else{
        return await "Idade inválida!";
    }
    }else{
        return await "Erro! Falta algum dado!";
    }
}

async function buscarFuncionarios(){
    return await crud.buscar("funcionario");
}

async function buscarFuncionario(id){
    const dados = await crud.buscarPorId("funcionario", id);
    return dados;
}

async function deletarFuncionario(req, res){
    const funcionario = await crud.buscar("cliente"); 
    if(funcionario.findIndex(c => c.idFUNCIONARIO == req.params.id) != -1){
    return await crud.remover("cliente", req.params.id);
    }else{
        return await "id inválido!";
    }
}

async function editarFuncionario(req, res){
    const funcionario = await crud.buscar("funcionario");
    if(funcionario.findIndex(c => c.id == req.params.id) != -1){
        return await crud.salvar("funcionario", req.params.id, req.body);
    }else{
        return await "id inválido!";
    }
}

module.exports = {
    criarFuncionario,
    buscarFuncionarios,
    buscarFuncionario,
    deletarFuncionario,
    editarFuncionario
}