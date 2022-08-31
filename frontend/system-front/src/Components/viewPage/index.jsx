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

        list = [{ name: "Leonardo Heitor Poglia", cnpj: 123 }]
        headerlist = (<tr key="name"><th>Nome</th><th>CNPJ</th></tr>)
        viewList = list.map(function (item) {return (<tr id="" key=""><td>{item.name}</td><td>{item.cnpj}</td></tr>);});

    } else if (url == "machine") {
        currentPage = "Cadastrar Maquina"
        linkPage = "/machineRegister";

        list = [{ name: "Maquina de Costura Tunada", marca: "Wegsol", anoFabricacao: "2010", anoCompra: "2012", valorCompra: "500", rpm: 1, agulhas: 5, platinas: 3, blocos: 10, gaiolas: 5, cones: 10 }]
        headerlist = (<tr key="name"><th>Nome</th><th>Marca</th><th>Ano Fab.</th><th>Ano Compra</th><th>Valor Compra</th><th>RPM</th><th>Agulhas</th><th>Platinas</th><th>Blocos</th><th>Gaiolas</th><th>Cones</th></tr>)
        viewList = list.map(function (item) { return ( <tr id="" key=""><td>{item.name}</td><td>{item.marca}</td><td>{item.anoFabricacao}</td><td>{item.anoCompra}</td><td>{item.valorCompra}</td><td>{item.rpm}</td><td>{item.agulhas}</td><td>{item.platinas}</td><td>{item.blocos}</td><td>{item.gaiolas}</td><td>{item.cones}</td></tr>);});
    } else if (url == "product") {
        currentPage = "Cadastrar Produtos"
        linkPage = "/productRegister";

        list = [{ descricacao: "Maquina de costura tals tals", quantidade: 5, valorTotal: 10, anexo: "2012", valorCompra: "lol", rpm: 1, agulhas: 5, platinas: 3, blocos: 10, gaiolas: 5, cones: 10 }]

    } else if (url == "provider") {
        currentPage = "Cadastrar Fornecedor"
        linkPage = "/providerRegister";
    } else if (url == "mesh") {
        currentPage = "Cadastrar Malha"
        linkPage = "/meshRegister";
    } else if (url == "wire") {
        currentPage = "Cadastrar Fio"
        linkPage = "/wireRegister";
    } else if (url == "employee") {
        currentPage = "Cadastrar Funcionário"
        linkPage = "/employeeRegister";
    } else if (url == "enterWire") {
        currentPage = "Cadastrar Entrada de Fio"
        linkPage = "/enterWire";
    } else if (url == "leaveMesh") {
        currentPage = "Cadastrar Saída de Fio"
        linkPage = "/leaveMesh";
    } else if (url == "productionScreen") {
        currentPage = "Iniciar Produção"
        linkPage = "/productionScreen";
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
