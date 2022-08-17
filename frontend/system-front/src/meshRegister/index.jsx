import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Malha cadastrada com sucesso!");

export default function meshRegister() {
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
            <span>Cadastrar Malha</span>
          </div>
          <div className="containerInputs">
            <label>
              <span>Descrição:</span>
              <textarea cols="30" rows="10"></textarea>
            </label>

            <label>
              <span>Fio malha:</span>
              <input type="text" />
            </label>

            <label>
              <span>Cliente:</span>
              <input type="text" />
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
