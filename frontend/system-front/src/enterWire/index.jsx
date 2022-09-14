import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import Service from "../services/service.ts";
import { useState } from "react";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Sucesso!");


export default function EnterWire() {

  function cadastrarEntradaFio() {
    Service.cadastrarEntradaFio(qtd_caixa, qtd_kg, subtotal, qtd_rolos_por_caixa, arquivo_nf, idFornecedor, idFio, idCliente).then((result) => {
      console.log(result);
      notify();
    });
  }

  const [qtd_caixa, setQtd_Caixa] = useState("");
  function handleQtdCaixa(event) {
    setQtd_Caixa(event.target.value);
  }

  const [qtd_kg, setQtd_Kg] = useState("");
  function handleQtdKg(event) {
    setQtd_Kg(event.target.value);
  }

  const [subtotal, setSubtotal] = useState("");
  function handleSubtotal(event) {
    setSubtotal(event.target.value);
  }

  const [qtd_rolos_por_caixa, setQtd_Rolos_Por_Caixa] = useState("");
  function handleQtdRolosPorCaixa(event) {
    setQtd_Rolos_Por_Caixa(event.target.value);
  }

  const [arquivo_nf, setArquivo_Nf] = useState("");
  function handleArquivoNf(event) {
    setArquivo_Nf(event.target.value);
  }

  const [idFornecedor, setIdFornecedor] = useState("");
  function handleIdFornecedor(event) {
    setIdFornecedor(event.target.value);
  }

  const [idFio, setIdFio] = useState("");
  function handleIdFio(event) {
    setIdFio(event.target.value);
  }

  const [idCliente, setIdCliente] = useState("");
  function handleIdCliente(event) {
    setIdCliente(event.target.value);
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
            <span>Entrada Fio</span>
          </div>

          <div className="flex">
            <label>
              <span>Quantidade caixas:</span>
              <input onChange={handleQtdCaixa} type="text" />
            </label>

            <label>
              <span>Quantidade em kg:</span>
              <input onChange={handleQtdKg} type="text" />
            </label>
          </div>

          <div className="flex">
            <label>
              <span>Quantidade de rolos:</span>
              <input onChange={handleQtdRolosPorCaixa} type="text" />
            </label>

            <label>
              <span>Subtotal:</span>
              <input onChange={handleSubtotal} type="text" />
            </label>
          </div>

          <div className="flex">
            <label>
              <span>Fornecedor:</span>
              <input onChange={handleIdFornecedor} type="text" />
            </label>

            <label>
              <span>Fio:</span>
              <input onChange={handleIdFio} type="text" />
            </label>
          </div>

          <label>
            <span>Anexo NF:</span>
            <input onChange={handleArquivoNf} type="file" />
          </label>

          <label>
            <span>Id do cliente:</span>
            <input onChange={handleIdCliente} type="text" />
          </label>

          <div className="containerButton">
            <button onClick={cadastrarEntradaFio}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
