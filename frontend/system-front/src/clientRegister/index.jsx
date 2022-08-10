import React from "react";

import "./styles.scss";

export default function clientRegister() {
  return (
    <div className="containerPageClientRegister">
      <main>
        <div className="containerModalRegister">
          <div className="headerModal">
            <span>Cadastrar cliente</span>
          </div>
          <div className="containerInputs">
            <div className="containerLabelName">
              <span>Nome:</span>
              <input type="text" />
            </div>
            <div className="containerLabelCnpj">
              <span>CNPJ:</span>
              <input type="text" />
            </div>
          </div>
          <div className="containerButton">
            <button>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
