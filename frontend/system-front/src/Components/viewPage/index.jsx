import React from "react";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import "../../styles.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function client() {

    let url = window.location.search.substring(1);
    let currentPage, linkPage, viewList, list, headerlist;

    if (url == "client") {
        currentPage = "Cadastrar Cliente"
        linkPage = "/clientRegister"

        list = [{ nome: "Leonardo Heitor Poglia", cnpj: 123 }]
        headerlist = (<tr key="name"><th>Nome</th><th>CNPJ</th></tr>)
        viewList = list.map(function (item) { return (<tr id="" key=""><td>{item.nome}</td><td>{item.cnpj}</td></tr>); });

    } else if (url == "machine") {
        currentPage = "Cadastrar Maquina"
        linkPage = "/machineRegister";

        list = [{ name: "Maquina de Costura Tunada", marca: "Wegsol", anoFabricacao: "2010", anoCompra: "2012", valorCompra: "500", rpm: 1, agulhas: 5, platinas: 3, blocos: 10, gaiolas: 5, cones: 10 }]
        headerlist = (<tr key="name"><th>Nome</th><th>Marca</th><th>Ano Fab.</th><th>Ano Compra</th><th>Valor Compra</th><th>RPM</th><th>Agulhas</th><th>Platinas</th><th>Blocos</th><th>Gaiolas</th><th>Cones</th></tr>)
        viewList = list.map(function (item) { return (<tr id="" key=""><td>{item.name}</td><td>{item.marca}</td><td>{item.anoFabricacao}</td><td>{item.anoCompra}</td><td>{item.valorCompra}</td><td>{item.rpm}</td><td>{item.agulhas}</td><td>{item.platinas}</td><td>{item.blocos}</td><td>{item.gaiolas}</td><td>{item.cones}</td></tr>); });
    } else if (url == "product") {
        currentPage = "Cadastrar Produtos"
        linkPage = "/productRegister";

        list = [{ descricacao: "Maquina de costura tals tals", quantidade: 5, valorTotal: 10, anexo: "2012", fornecedor: "Fornecedor Alberto" }]
        headerlist = (<tr key="name"><th>Descrição</th><th>Quantidade</th><th>Valor Total</th><th>Anexo</th><th>Fornecedor</th></tr>)
        viewList = list.map(function (item) { return (<tr id="" key=""><td>{item.descricacao}</td><td>{item.quantidade}</td><td>{item.valorTotal}</td><td>{item.anexo}</td><td>{item.fornecedor}</td></tr>); });


    } else if (url == "provider") {
        currentPage = "Cadastrar Fornecedor"
        linkPage = "/providerRegister";

        list = [{ name: "Leonardo Heitor Poglia", cnpj: 123 }]
        headerlist = (<tr key="name"><th>Nome</th><th>CNPJ</th></tr>)
        viewList = list.map(function (item) { return (<tr id="" key=""><td>{item.name}</td><td>{item.cnpj}</td></tr>); });


    } else if (url == "mesh") {
        currentPage = "Cadastrar Malha"
        linkPage = "/meshRegister";

        list = [{ descricacao: "Malha das boa", fioMalha: "Malha boa", cliente: "Leonardo Heitor Poglia" }]
        headerlist = (<tr key="name"><th>Descrição</th><th>Fio Malha</th><th>Cliente</th></tr>)
        viewList = list.map(function (item) { return (<tr id="" key=""><td>{item.descricacao}</td><td>{item.fioMalha}</td><td>{item.cliente}</td></tr>); });

    } else if (url == "wire") {
        currentPage = "Cadastrar Fio"
        linkPage = "/wireRegister"; 

        list = [{ descricacao: "Fio Wegsol" }]
        headerlist = (<tr key="name"><th>Descrição</th></tr>)
        viewList = list.map(function (item) { return (<tr id="" key=""><td>{item.descricacao}</td></tr>); });


    } else if (url == "employee") {
        currentPage = "Cadastrar Funcionário"
        linkPage = "/employeeRegister";

        list = [{ name: "Leonardo Heitor Poglia", cnpj: 123, idade: 17, salario: 10000, turno: "2" }]
        headerlist = (<tr key="name"><th>Nome</th><th>CNPJ</th><th>Idade</th><th>Salário</th><th>Turno</th></tr>)
        viewList = list.map(function (item) { return (<tr id="" key=""><td>{item.name}</td><td>{item.cnpj}</td><td>{item.idade}</td><td>{item.salario}</td><td>{item.turno}</td></tr>); });

    } else if (url == "enterWire") {
        currentPage = "Cadastrar Entrada de Fio"
        linkPage = "/enterWire";

        list = [{ qtdCaixas: 5, qtdQuilos: 123, qtdRolos: 17, subtotal: 10000, fornecedor: "Henrique Cole", fio: "Fio dos bom", anexo: ".zip" }]
        headerlist = (<tr key="name"><th>Caixas</th><th>Kg</th><th>Rolos</th><th>Sub-total</th><th>Fornecedor</th><th>Fio</th><th>Anexo</th></tr>)
        viewList = list.map(function (item) { return (<tr id="" key=""><td>{item.qtdCaixas}</td><td>{item.qtdQuilos}</td><td>{item.qtdRolos}</td><td>{item.subtotal}</td><td>{item.fornecedor}</td><td>{item.fio}</td><td>{item.anexo}</td></tr>); })

    } else if (url == "leaveMesh") {
        currentPage = "Cadastrar Saída de Fio"
        linkPage = "/leaveMesh";

        list = [{ saida: "Malha de Couro", anexo: ".zip", valorTotal: 500, cliente: "Leonardo Heitor Poglia" }]
        headerlist = (<tr key="name"><th>Saída</th><th>Anexo</th><th>Valor Total</th><th>Cliente</th></tr>)
        viewList = list.map(function (item) { return (<tr id="" key=""><td>{item.saida}</td><td>{item.anexo}</td><td>{item.valorTotal}</td><td>{item.cliente}</td></tr>); })

    } else if (url == "productionScreen") {
        currentPage = "Iniciar Produção"
        linkPage = "/productionScreen";

        list = [{ peso: 500, defeitos: "0 defeitos", cliente: "Leonardo Heitor Poglia", maquina: "Maquina 01", funcionario: "Henrique Cole Fernandes" }]
        headerlist = (<tr key="name"><th>Peso</th><th>Defeitos</th><th>Cliente</th><th>Maquina</th><th>Funcionário</th></tr>)
        viewList = list.map(function (item) { return (<tr id="" key=""><td>{item.peso}</td><td>{item.defeitos}</td><td>{item.cliente}</td><td>{item.maquina}</td><td>{item.funcionario}</td></tr>); })

    }

    return (
        <div className="container">
            <Header></Header>
            <Sidebar></Sidebar>

            <div className="container">
                <main>
                    <div className="page">
                        <input type="text" placeholder="Procure um cliente aqui" />

                        <Link to={linkPage}>
                            <button>
                                {currentPage}
                            </button>
                        </Link>
                    </div>

                    <div className="tabela">
                        <table>
                            {headerlist}
                            {viewList}
                        </table>
                    </div>
                </main>
            </div>
        </div>
    );
}
