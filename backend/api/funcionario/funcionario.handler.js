const crud = require('../../crud/server');

async function criarFuncionario(req, res){
    const funcionario = req.body;
    if(funcionario.nome != "" && funcionario.cpf != "" && funcionario.idade != "" && funcionario.salario != "" 
    && funcionario.turno != ""){
        if(parseInt(funcionario.idade) > 0){
        if(funcionario.turno == "primeiro" || funcionario.turno == "segundo" || funcionario.turno == "terceiro"){
            return await crud.salvar("funcionario", null,
            req.body);
        }else{
            return "Erro! Turno Inválido!";
        }
    }else{
        return "Idade inválida!";
    }
    }else{
        return "Erro! Falta algum dado!";
    }
}

async function buscarFuncionarios(){
    return await crud.buscar("funcionario");
}

async function buscarFuncionario(id){
    const listaFuncionarios = await crud.buscar("funcionario");
    if (listaFuncionarios.filter((Funcionario) => Funcionario.id == id) != "") {
        return await crud.buscarPorId("funcionario", id);
    }
    return "Erro! ID inválido!";
}

async function deletarFuncionario(req, res){
    const funcionario = await crud.buscar("funcionario"); 
    if(funcionario.findIndex(c => c.id == req.params.id) != -1){
    return await crud.remover("funcionario", req.params.id);
    }else{
        return "id inválido!";
    }
}

async function editarFuncionario(req, res){
    const funcionario = await crud.buscar("funcionario");
    if(funcionario.findIndex(c => c.id == req.params.id) != -1){
        return await crud.salvar("funcionario", req.params.id, req.body);
    }else{
        return "id inválido!";
    }
}

module.exports = {
    criarFuncionario,
    buscarFuncionarios,
    buscarFuncionario,
    deletarFuncionario,
    editarFuncionario
}