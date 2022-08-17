import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Produto cadastrado com sucesso!");

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
      <Header></Header>
      <Sidebar></Sidebar>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            backgroundColor: "#414141",
            color: "white",
          },
        }}
      />
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
            <button onClick={notify}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
