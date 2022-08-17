import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Sucesso!");

export default function enterWire() {
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
            <span>Entrada Fio</span>
          </div>

          <div className="flex">
            <label>
              <span>Quantidade caixas:</span>
              <input type="text" />
            </label>

            <label>
              <span>Quantidade em kg:</span>
              <input type="text" />
            </label>
          </div>

          <div className="flex">
            <label>
              <span>Quantidade de rolos:</span>
              <input type="text" />
            </label>

            <label>
              <span>Subtotal:</span>
              <input type="text" />
            </label>
          </div>

          <div className="flex">
            <label>
              <span>Fornecedor:</span>
              <input type="text" />
            </label>

            <label>
              <span>Fio:</span>
              <input type="text" />
            </label>
          </div>

          <label>
            <span>Anexo NF:</span>
            <input type="file" />
          </label>

          <div className="containerButton">
            <button onClick={notify}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
