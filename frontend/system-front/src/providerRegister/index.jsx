/* eslint-disable*/
import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import Service from "../services/service.ts";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Fornecedor cadastrado com sucesso!");

export default function providerRegister() {

  function cadastrarFornecedor() {
    Service.cadastrarFornecedor(nome, cnpj).then((result) => {
      console.log(result);
      notify();
    });
  }

  const [nome, setNome] = useState("");
  function handleName(event) {
    setNome(event.target.value);
  }

  const [cnpj, handlecnpj] = useState("");
  function handleCpf(event) {
    handlecnpj(event.target.value);
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
            <span>Cadastrar Fornecedor</span>
          </div>
          <div className="containerInputs">
            <label>
              <span>Nome:</span>
              <input type="text" onChange={handleName} />
            </label>
            <label>
              <span>CNPJ:</span>
              <input type="text" onChange={handlecnpj} />
            </label>
          </div>
          <div className="containerButton">
            <button onClick={cadastrarFornecedor}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
