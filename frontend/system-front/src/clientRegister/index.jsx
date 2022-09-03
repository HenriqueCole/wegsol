/* eslint-disable*/
import React from "react";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import "../styles.scss";
import Service from "../services/service.ts";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Cliente cadastrado com sucesso!");


export default function clientRegister() {

  function cadastrarCliente() {
    Service.cadastrarCliente(nome, cpf).then((result) => {
      console.log(result);
    });
  }

  const [nome, setNome] = useState("");
  function handleName(event) {
    setNome(event.target.value);
  }

  const [cpf, setCpf] = useState("");
  function handleCpf(event) {
    setCpf(event.target.value);
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
            <span>Cadastrar cliente</span>
          </div>
          <div className="containerInputs">
            <label>
              <span>Nome:</span>
              <input id="name" type="text" onChange={handleName} />
            </label>
            <label>
              <span>CNPJ:</span>
              <input id="cnpj" type="text" onChange={handleCpf} />
            </label>
          </div>
          <div className="containerButton">
            <button onClick={cadastrarCliente} >Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
