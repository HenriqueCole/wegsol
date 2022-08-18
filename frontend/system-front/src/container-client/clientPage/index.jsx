import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import Header from "../../Components/Header/header";
import "../../styles.scss";
import { Link } from "react-router-dom";

export default function client() {

    return (
        <div className="container">
            <Header></Header>
            <Sidebar></Sidebar>

            <div className="container">
                <main>
                    <div className="page">
                        <input type="text" placeholder="Procure um cliente aqui" />

                        <a href="/clientRegister">
                            <button>
                                Cadastrar Cliente
                            </button>
                        </a>
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
