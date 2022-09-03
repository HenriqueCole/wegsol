/* eslint-disable*/
import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import Service from "../services/service.ts";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Máquina cadastrada com sucesso!");

export default function machineRegister() {

  function cadastrarMaquina() {
    Service.cadastrarMaquina(nome, marca, anoFabricacao, anoCompra, rpm, valorCompra, agulhas, platinas, bloco, gaiolas, cones, malha).then((result) => {
      console.log(result);
      notify();
    });
  }

  const [nome, setNome] = useState("");
  function handleName(event) {
    setNome(event.target.value);
  }

  const [marca, setMarca] = useState("");
  function handleMarca(event) {
    setMarca(event.target.value);
  }

  const [anoFabricacao, setAnoFabricacao] = useState("");
  function handleAnoFabricacao(event) {
    setAnoFabricacao(event.target.value);
  }

  const [anoCompra, setAnoCompra] = useState("");
  function handleAnoCompra(event) {
    setAnoCompra(event.target.value);
  }

  const [rpm, setRpm] = useState("");
  function handleRpm(event) {
    setRpm(event.target.value);
  }

  const [valorCompra, setValorCompra] = useState("");
  function handleValorCompra(event) {
    setValorCompra(event.target.value);
  }

  const [agulhas, setAgulhas] = useState("");
  function handleAgulhas(event) {
    setAgulhas(event.target.value);
  }

  const [platinas, setPlatinas] = useState("");
  function handlePlatinas(event) {
    setPlatinas(event.target.value);
  }

  const [bloco, setBloco] = useState("");
  function handleBlocos(event) {
    setBloco(event.target.value);
  }

  const [gaiolas, setGaiolas] = useState("");
  function handleGaiolas(event) {
    setGaiolas(event.target.value);
  }

  const [cones, setCones] = useState("");
  function handleCones(event) {
    setCones(event.target.value);
  }

  const [malha, setMalha] = useState("");
  function handMalha(event) {
    setMalha(event.target.value);
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
            <span>Cadastrar máquina</span>
          </div>
          <div className="containerInputs">
            <label>
              <span>Nome:</span>
              <input id="nome" onChange={handleName} type="text" />
            </label>
            <label>
              <span>Marca:</span>
              <input id="marca" onChange={handleMarca} type="text" />
            </label>

            <div className="flex">
              <label>
                <span>Ano fabricação:</span>
                <input id="anoFabricacao" onChange={handleAnoFabricacao} type="date" />
              </label>

              <label>
                <span>Ano compra:</span>
                <input id="anoCompra" onChange={handleAnoCompra} type="date" />
              </label>
            </div>

            <div className="flex">
              <label>
                <span>Valor compra:</span>
                <input id="valorCompra" onChange={handleValorCompra} type="number" />
              </label>

              <label>
                <span>RPM:</span>
                <input id="rpm" onChange={handleRpm} type="number" />
              </label>
            </div>
          </div>

          <p className="quantidade">Quantidades</p>

          <div className="flex-5">
            <label>
              <span>Agulhas:</span>
              <input id="agulhas" onChange={handleAgulhas} type="number" />
            </label>

            <label>
              <span>Platinas:</span>
              <input id="platinas" onChange={handlePlatinas} type="number" />
            </label>

            <label>
              <span>Blocos:</span>
              <input id="blocos" onChange={handleBlocos} type="number" />
            </label>

            <label>
              <span>Gaiolas:</span>
              <input id="gaiolas" onChange={handleGaiolas} type="number" />
            </label>

            <label>
              <span>Cones:</span>
              <input id="cones" onChange={handleCones} type="number" />
            </label>

            <label>
              <span>Malha:</span>
              <input id="malha" onChange={handMalha} type="text" />
            </label>
          </div>

          <div className="containerButton">
            <button onClick={cadastrarMaquina}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
