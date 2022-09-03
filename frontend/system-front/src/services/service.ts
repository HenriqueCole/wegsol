
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
            fetch('http://127.0.0.1:8080/api/malha', { method: 'POST', body: JSON.stringify({ descricao: descricao, idFio: idFio, idCliente: idCliente }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    },

    cadastrarFio: function (descricao) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/fio', { method: 'POST', body: JSON.stringify({ descricao: descricao }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    },

    cadastrarFuncionario: function (nome, cpf, idade, salario, turno) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/funcionario', { method: 'POST', body: JSON.stringify({ nome: nome, cpf: cpf, idade: idade, salario: salario, turno: turno }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    },

    cadastrarEntradaFio: function (qtd_caixa, qtd_kg, subtotal, qtd_rolos_por_caixa, arquivo_nf, idFornecedor, idFio, idCliente) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/entrada_de_fio', { method: 'POST', body: JSON.stringify({ qtd_caixa: qtd_caixa, subtotal: subtotal, qtd_kg: qtd_kg, qtd_rolos_por_caixa: qtd_rolos_por_caixa, arquivo_nf: arquivo_nf, idFornecedor: idFornecedor, idFio: idFio, idCliente: idCliente }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    },

    cadastrarSaidaMalha: function (qtd_rolos, peso, qualidade, valor_saida, arquivo_nf, idMalha, idSaidas_De_Malhas) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/saida_de_malha', { method: 'POST', body: JSON.stringify({ qtd_rolos: qtd_rolos, peso: peso, qualidade: qualidade, valor_saida: valor_saida, arquivo_nf: arquivo_nf, idMalha: idMalha, idSaidas_De_Malhas: idSaidas_De_Malhas }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    },

    cadastrarProducao: function (kg_rolo_malha, defeito, idCliente, idMaquina, idFuncionario) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/funcionario', { method: 'POST', body: JSON.stringify({ kg_rolo_malha: kg_rolo_malha, defeito: defeito, idCliente: idCliente, idMaquina: idMaquina, idFuncionario: idFuncionario }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    }

}


export default Services;
