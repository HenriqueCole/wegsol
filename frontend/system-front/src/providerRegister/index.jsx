import React from "react";

import "../styles.scss";

export default function providerRegister() {
  return (
    <div className="container">
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
