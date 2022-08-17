import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";


export default function providerRegister() {
  return (
    <div className="container">
      <Sidebar></Sidebar>
      <main>
        <div className="form">
          <div className="headerModal">
            <span>Cadastrar Fornecedor</span>
          </div>
          <div className="containerInputs">
            <label>
              <span>Nome:</span>
              <input type="text" />
            </label>
            <label>
              <span>CNPJ:</span>
              <input type="text" />
            </label>
          </div>
          <div className="containerButton">
            <button>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
