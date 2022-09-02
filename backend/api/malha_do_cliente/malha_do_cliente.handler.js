const crud = require('../../crud/server');
const tabela = "malha_do_cliente"

async function criarMalha_Do_Cliente(dadosReq) {
    const malhaCliente = dadosReq;

    const dados = await crud.salvar(tabela, null, malhaCliente);
    return dados;
}

async function procurarMalhas_Do_Cliente() {
    const dados = await crud.buscar(tabela);
    return (dados);
}

async function procurarMalha_Do_Cliente(id) {
    const dados = await crud.buscarPorId(tabela, id);
    return dados;
}

async function deletarMalha_Do_Cliente(req, res) {
    const malha = await crud.buscar("malha");
    if (malha.findIndex(c => c.idMALHA == req.params.idMALHA) != -1) {
        const dados = await crud.remover("cliente", req.params.id);
        return dados;
    } else {
        res.status(404).send("id inválido");
    }
}

async function editarMalha_Do_Cliente(req, res) {
    const malha = await crud.buscar("malha");
    if (malha.findIndex(c => c.idMALHA == req.params.idMALHA) != -1) {
        return await crud.salvar("cliente", req.params.id, req.body);
    } else {
        res.status(404).send("id inválido");
    }
}

module.exports = {
    criarMalha_Do_Cliente,
    procurarMalha_Do_Cliente,
    procurarMalhas_Do_Cliente,
    deletarMalha_Do_Cliente,
    editarMalha_Do_Cliente
}