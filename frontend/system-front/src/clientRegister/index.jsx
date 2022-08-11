import React from "react";

import "./styles.scss";

export default function clientRegister() {
  return (

    <div className="container">
      <div className="containerPageClientRegister">
        <main>
          <div className="containerModalRegister">
            <div className="headerModal">
              <span>Cadastrar cliente</span>
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
    </div>
  );
}
