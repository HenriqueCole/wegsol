import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";

export default function productRegister() {
  function increaseValue(e) {
    let input = document.getElementById("quantidade");
    input.value = parseInt(input.value) + 1;
  }

  function decreaseValue(e) {
    let input = document.getElementById("quantidade");
    input.value = parseInt(input.value) - 1;
    if (input.value < 0) {
      input.value = 0;
    }
  }

  return (
    <div className="container">
      <Sidebar></Sidebar>
      <main>
        <div className="form">
          <div className="headerModal">
            <span>Cadastrar Produto</span>
          </div>
          <div className="containerInputs">
            <label>
              <span>Descrição:</span>
              <textarea cols="30" rows="10"></textarea>
            </label>

            <label>
              <span>Quantidade:</span>
              <div className="quantidade">
                <div className="menos" onClick={(e) => decreaseValue(e)}>
                  -
                </div>
                <input id="quantidade" type="text" value={0} />
                <div className="mais" onClick={(e) => increaseValue(e)}>
                  +
                </div>
              </div>
            </label>

            <label>
              <span>Valor Total:</span>
              <input type="text" />
            </label>

            <label>
              <span>Anexo NF:</span>
              <input type="file" />
            </label>

            <label>
              <span>Fornecedor:</span>
              <select>
                <option>caraio</option>
              </select>
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
