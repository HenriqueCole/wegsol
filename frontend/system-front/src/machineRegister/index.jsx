import React from "react";

import "./styles.scss";

export default function machineRegister() {
  return (
    <div className="containerPageMachineRegister">
      <main>
        <div className="containerModalRegister">
          <div className="headerModal">
            <span>Cadastrar máquina</span>
          </div>
          <div className="containerInputs">
            <label>
              <span>Nome:</span>
              <input type="text" />
            </label>
            <label>
              <span>Marca:</span>
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
