
const Services = {
    
    cadastrarCliente:function(nome, cnpj) {
        return new Promise((resolve, reject) => {
            fetch('http://127.0.0.1:8080/api/cliente', { method: 'POST', body: JSON.stringify({ nome: nome, cnpj: cnpj }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    },

    buscarCliente:function(nome, cnpj) {
        return new Promise((resolve, reject) => {
            fetch('localhost:8080/api/cliente', { method: 'POST', body: JSON.stringify({ nome: nome, cnpj: cnpj }), headers: { 'Content-Type': 'application/json' } }).then(function (result) { return result.json(); }).then(resolve).catch(resolve)
        })
    }



}


export default Services;
