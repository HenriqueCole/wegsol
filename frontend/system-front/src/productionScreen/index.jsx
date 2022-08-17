import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Produção iniciada com sucesso!");

export default function wireRegister() {
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
            <span>Iniciar produção</span>
          </div>
          <label>
            <span>Peso:</span>
            <input type="number" placeholder="Kg" />
          </label>

          <label>
            <span>Defeitos</span>
            <textarea cols="30" rows="10"></textarea>
          </label>

          <label>
            <span>Cliente:</span>
            <select>
              <option>Cliente 01</option>
            </select>
          </label>

          <label>
            <span>Maquina:</span>
            <select>
              <option>Maquina 01</option>
            </select>
          </label>

          <label>
            <span>Funcionário:</span>
            <select>
              <option>Funcionário 01</option>
            </select>
          </label>

          <div className="containerButton">
            <button onClick={notify}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
