
const Services = {

    cadastrarCliente: function (nome, cnpj) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/cliente', { method: 'POST', body: JSON.stringify({ nome: nome, cnpj: cnpj }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    },

    cadastrarMaquina: function (nome, marca, anoFabicacao, anoCompra, valorCompra, RPM, agulhas, platinas, blocos, gaiolas, cones, idMalha) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/maquina', { method: 'POST', body: JSON.stringify({ nome: nome, marca: marca, ano_fabricacao: anoFabicacao, ano_compra: anoCompra, valor_compra: valorCompra, rpm: RPM, qtd_agulhas: agulhas, qtd_blocos: blocos, qtd_platinas: platinas, qtd_gaiolas: gaiolas, qtd_cones_por_gaiola: cones, idMalha: idMalha }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    },

    cadastrarProduto: function (descricao, quantidade, valor_total_produto, arquivo_nf, idFornecedor, idMaquina) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/produto', { method: 'POST', body: JSON.stringify({ descricao: descricao, quantidade: quantidade, valor_total_produto: valor_total_produto, arquivo_nf: arquivo_nf, idFornecedor: idFornecedor, idMaquina: idMaquina }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    },

    cadastrarFornecedor: function (nome, cnpj) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/fornecedor', { method: 'POST', body: JSON.stringify({ nome: nome, cnpj: cnpj }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    },

    cadastrarMalhas: function (descricao, idFio, idCliente) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/fornecedor', { method: 'POST', body: JSON.stringify({ descricao: descricao, idFio: idFio, idCliente: idCliente }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    },

}


export default Services;
