import React from "react";
import "../styles.scss"
import Sidebar from "../Components/sidebar"

export default function machineRegister() {
  return (
    <div className="container">
      <Sidebar></Sidebar>

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

          <p className="quantidade">Quantidades</p>

          <div className="flex-5">
            <label>
              <span>Agulhas:</span>
              <input type="text" />
            </label>

            <label>
              <span>Platinas:</span>
              <input type="text" />
            </label>

            <label>
              <span>Blocos:</span>
              <input type="text" />
            </label>

            <label>
              <span>Gaiolas:</span>
              <input type="text" />
            </label>

            <label>
              <span>Cones:</span>
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