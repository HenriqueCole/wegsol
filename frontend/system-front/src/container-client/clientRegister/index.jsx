import React from "react";
import Sidebar from "../../Components/Sidebar/sidebar";
import Header from "../../Components/Header/header";
import "../../styles.scss";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Cliente cadastrado com sucesso!");

export default function clientRegister() {
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
            <button onClick={notify}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
