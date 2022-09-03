/* eslint-disable*/
import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import Service from "../services/service.ts";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Fio cadastrado com sucesso!");



export default function wireRegister() {

  function cadastrarFio() {
    Service.cadastrarFio(descricao).then((result) => {
      console.log(result);
      notify();
    });
  }

  const [descricao, setDescricao] = useState("");
  function handleDescricao(event) {
    setDescricao(event.target.value);
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
            <span>Cadastrar Fio</span>
          </div>
          <label>
            <span>Descrição:</span>
            <textarea onChange={handleDescricao} cols="30" rows="10"></textarea>
          </label>

          <div className="containerButton">
            <button onClick={cadastrarFio}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
