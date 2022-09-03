/* eslint-disable*/
import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import Service from "../services/service.ts";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Funcionário cadastrado com sucesso!");

export default function providerRegister() {

  function cadastrarFuncionario() {
    Service.cadastrarFuncionario(nome, cpf, idade, salario, turno.toLowerCase()).then((result) => {
      console.log(result);
      notify();
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

  const [idade, setIdade] = useState(0);
  function handleIdade(event) {
    setIdade(event.target.value);
  }

  const [salario, setSalario] = useState("");
  function handleSalario(event) {
    setSalario(event.target.value);
  }

  const [turno, setTurno] = useState("");
  function handleTurno(event) {
    setTurno(event.target.value);
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
            <span>Cadastrar Funcionário</span>
          </div>
          <div className="containerInputs">
            <label>
              <span>Nome:</span>
              <input onChange={handleName} type="text" />
            </label>

            <div className="flex">
              <label>
                <span>CPF:</span>
                <input onChange={handleCpf}  type="text" />
              </label>

              <label>
                <span>Idade:</span>
                <input onChange={handleIdade} type="number" />
              </label>
            </div>

            <div className="flex">
              <label>
                <span>Salário:</span>
                <input onChange={handleSalario} type="text" />
              </label>

              <label>
                <span>Turno:</span>
                <input onChange={handleTurno} type="text" />
              </label>
            </div>
          </div>
          <div className="containerButton">
            <button onClick={cadastrarFuncionario}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
