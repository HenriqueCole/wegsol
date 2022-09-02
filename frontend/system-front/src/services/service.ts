
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
    }


}


export default Services;
