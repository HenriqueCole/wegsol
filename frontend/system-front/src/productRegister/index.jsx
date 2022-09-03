/* eslint-disable*/
import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import Service from "../services/service.ts";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Produto cadastrado com sucesso!");

export default function productRegister() {

  function cadastrarProduto() {
    Service.cadastrarProduto(descricacao, 1, valorTotal, anexo, fornecedor, maquina).then((result) => {
      console.log("d" , descricacao, "q",  quantidade, "v", valorTotal, "a", anexo, "f", fornecedor, "m", maquina);

      console.log(result);
      notify();
    });
  }

  const [descricacao, setDescricao] = useState("");
  function handleDescricao(event) {
    setDescricao(event.target.value);
  }

  const [quantidade, setQuantidade] = useState("");
  function handleQuantidade(event) {
    console.log(event)
    setQuantidade(event.target.value);
  }
 
  const [valorTotal, setValorTotal] = useState("");
  function handleValorTotal(event) {
    setValorTotal(event.target.value);
  }
  const [anexo, setAnexo] = useState("");
  function handleAnexo(event) {
    setAnexo(event.target.value);
  }
  const [fornecedor, setFornecedor] = useState("");
  function handleFornecedor(event) {
    setFornecedor(event.target.value);
  }

  const [maquina, setMaquina] = useState("");
  function handleMaquina(event) {
    setMaquina(event.target.value);
  }


  function increaseValue(e) {
    let input = document.getElementById("quantidade");
    input.value = parseInt(input.value) + 1;
  }

  function decreaseValue(e) {
    let input = document.getElementById("quantidade");
    input.value = parseInt(input.value) - 1;
    if (input.value < 0) {
      input.value = 0;
    }
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
            <span>Cadastrar Produto</span>
          </div>
          <div className="containerInputs">
            <label>
              <span>Descrição:</span>
              <textarea cols="30" rows="10" id="descricao" onChange={handleDescricao} ></textarea>
            </label>

            <label>
              <span>Quantidade:</span>
              <div className="quantidade">
                <div className="menos" onClick={(e) => decreaseValue(e)}>
                  -
                </div>
                <input onChance={handleQuantidade} type="text" value={0} />
                <div className="mais" onClick={(e) => increaseValue(e)}>
                  +
                </div>
              </div>
            </label>

            <label>
              <span>Valor Total:</span>
              <input type="text" id="valorTotal" onChange={handleValorTotal} />
            </label>

            <label>
              <span>Anexo NF:</span>
              <input type="text" id="anexo" onChange={handleAnexo} />
            </label>

            <label id="fornecedor" >
            <span>Fornecedor:</span>
              <input type="input" id="fornecedor" onChange={handleFornecedor} />
            </label>

            <label id="maquina">
            <span>Maquina:</span>
              <input type="input" id="anexo" onChange={handleMaquina} />

            </label>
          </div>
          <div className="containerButton">
            <button onClick={cadastrarProduto}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
