import React from "react";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import "../../styles.scss";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function client() {
  let url = window.location.reload;

  console.log(url);

  return (
    <div className="container">
      <Header></Header>
      <Sidebar></Sidebar>

      <div className="container">
        <main>
          <div className="page">
            <input type="text" placeholder="Procure um cliente aqui" />

            <Link to="/clientRegister">
              <button>Cadastrar Cliente</button>
            </Link>
          </div>

          <div className="tabela">
            <table>
              <tr key="">
                <th>Nome</th>

                <th>CNPJ</th>
              </tr>

              <tr id="" key="">
                <td>Leonardo Heitor Poglia</td>

                <td>89254549305</td>
              </tr>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
