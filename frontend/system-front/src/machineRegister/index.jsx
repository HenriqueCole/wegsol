import React from "react";
import "../styles.scss"


export default function machineRegister() {
  return (
    <div className="container">
      <main>
        <div className="form">
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


            <div className="flex">
              <label>
                <span>Ano fabricação:</span>
                <input type="text" />
              </label>

              <label>
                <span>Ano compra:</span>
                <input type="text" />
              </label>
            </div>

            <div className="flex">

              <label>
                <span>Valor compra:</span>
                <input type="text" />
              </label>

              <label>
                <span>RPM:</span>
                <input type="text" />
              </label>
            </div>
          </div>

          <p>Quantidades</p>

          <div className="flex">
            <label>
              <span>RPM:</span>
              <input type="text" />
            </label>

            <label>
              <span>RPM:</span>
              <input type="text" />
            </label>

            <label>
              <span>RPM:</span>
              <input type="text" />
            </label>

            <label>
              <span>RPM:</span>
              <input type="text" />
            </label>

            <label>
              <span>RPM:</span>
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
