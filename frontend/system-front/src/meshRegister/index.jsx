/* eslint-disable*/
import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import Service from "../services/service.ts";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Malha cadastrada com sucesso!");

export default function meshRegister() {
  function cadastrarMalhas() {
    Service.cadastrarMalhas(descricao, malha, cliente).then((result) => {
      console.log(descricao, malha, cliente);
      console.log(result);
      notify();
    });
  }

  const [descricao, setDescricao] = useState("");
  function handleDescricao(event) {
    setDescricao(event.target.value);
  }

  const [malha, setMalha] = useState("");
  function handleMalha(event) {
    setMalha(event.target.value);
  }

  const [cliente, setCliente] = useState("");
  function handleCliente(event) {
    setCliente(event.target.value);
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
            <span>Cadastrar Malha</span>
          </div>
          <div className="containerInputs">
            <label>
              <span>Descrição:</span>
              <textarea
                onChange={handleDescricao}
                cols="30"
                rows="10"
              ></textarea>
            </label>

            <label>
              <span>Fio malha:</span>
              <input type="text" onChange={handleMalha} />
            </label>

            <label>
              <span>Cliente:</span>
              <input type="text" onChange={handleCliente} />
            </label>
          </div>
          <div className="containerButton">
            <button onClick={cadastrarMalhas}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
