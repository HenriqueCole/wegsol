import React from "react";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import "../../styles.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function client() {

    let url = window.location.search.substring(1);
    let currentPage;
    let linkPage;

    if (url == "client") {
        currentPage = "Cadastrar Cliente"
        linkPage = "/clientRegister"
    } else if (url == "machine") {
        currentPage = "Cadastrar Maquina"
        linkPage = "/machineRegister";
    } else if (url == "product") {
        currentPage = "Cadastrar Produtos"
        linkPage = "/productRegister";
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

                            <tr key="">
                                <th>
                                    Nome
                                </th>

                                <th>
                                    CNPJ
                                </th>
                            </tr>


                            <tr id="" key="">
                                <td>
                                    Leonardo Heitor Poglia
                                </td>

                                <td>
                                    89254549305
                                </td>
                            </tr>


                        </table>

                    </div>
                </main>
            </div>

        </div>
    );
}
