/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import Service from "../services/service.ts";
import { useState } from "react";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function addLeaveMesh() {
  const [value, setValue] = useState(0);
  const [arr, setArr] = useState([]);
  const [arr2, setArr2] = useState([]);

  const notify = () => toast.success("Saídas Malhas cadastrada com sucesso!");

  // useEffect(() => {
  //     Service.buscarMalha().then((result) => {
  //         setArr(result);
  //         console.log(result);
  //     });
  // }, []);

  useEffect(() => {
    Service.buscarClientes().then((result) => {
      setArr2(result);
      console.log(result);
    });
  }, []);

  // useEffect(() => {
  //     addToSelect();
  // }, [arr]);

  useEffect(() => {
    addToSelect2();
  }, [arr2]);

  function increaseValue() {
    setValue(value + 1);
  }

  function decreaseValue() {
    setValue(value - 1);
    if (value === 0) {
      setValue(0);
    }
  }

  // function addToSelect() {
  //     var select = document.getElementById("selectMesh");
  //     var elmts = arr;

  //     select.innerHTML = "";

  //     for (var i = 0; i < elmts.length; i++) {
  //         var opt = document.createElement("option");
  //         opt.value = elmts[i].descricao + " - " + elmts[i].id;
  //         opt.innerHTML = elmts[i].descricao + " - " + elmts[i].id;
  //         select.appendChild(opt);
  //     }
  // }

  function addToSelect2() {
    var select = document.getElementById("selectClient");
    var elmts = arr2;

    select.innerHTML = "";

    for (var i = 0; i < elmts.length; i++) {
      var opt = document.createElement("option");
      opt.value = elmts[i].nome + " - " + elmts[i].id;
      opt.innerHTML = elmts[i].nome + " - " + elmts[i].id;
      select.appendChild(opt);
    }
  }

  let i = 0;

  function cadastrarSaidasMalhas() {
    console.log("nf", nf);
    console.log("preco", preco);
    console.log("idCliente", cliente);
    console.log("idMalha", malha);
    i++;
    Service.cadastrarSaidasMalhas(nf, preco, cliente).then((result) => {
      console.log(result);
      notify();
    });

    if (Service.cadastrarSaidasMalhas(nf, preco, cliente) != [{}]) {
      return false;
    } else {
      return true;
    }
  }

  const [nf, setNf] = useState("");
  function handleNf(event) {
    setNf(event.target.value);
  }

  const [preco, setPreco] = useState(0);
  function handlePreco(event) {
    setPreco(event.target.value);
  }

  const [malha, setMalha] = useState("");
  function handleMalha(event) {
    setMalha(event.target.value.split(" - ")[1]);
  }

  const [cliente, setCliente] = useState("");
  function handleClient(event) {
    setCliente(event.target.value.split(" - ")[1]);
  }

  return (
    <div className="container">
      <Header></Header>
      <Sidebar></Sidebar>
      <main>
        <div className="form">
          <div className="headerModal">
            <span>Adicionar Saída</span>
          </div>

          <div className="nfContainer">
            <label>
              <span>Anexar Nota Fiscal: </span>
              <div className="buttonUpload">
                <input onChange={handleNf} type="file" />
              </div>
            </label>
          </div>

          <br />

          <div className="priceContainer">
            <label className="labelPeso">
              <span>Preço:</span>
              <div className="inputPeso">
                <input onChange={handlePreco} type="text" />
              </div>
            </label>
          </div>

          <br />

          <div className="priceContainer">
            <label className="labelPeso">
              <span>Cliente: </span>
              <div className="inputPeso">
                <select onChange={handleClient} id="selectClient"></select>
              </div>
            </label>
          </div>

          <br />

          {/* <div className="priceContainer">
                        <label className="labelPeso">
                            <span>Malha: </span>
                            <div className="inputPeso">
                                <select onChange={handleMalha} id="selectMesh"></select>
                            </div>
                        </label>
                    </div> */}
          <div className="containerButton">
            <Link to="/leaveMesh">
              <button onClick={cadastrarSaidasMalhas} className="button">
                Cadastrar
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
