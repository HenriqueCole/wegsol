/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import { useState } from "react";
import { Link } from "react-router-dom";
import Service from "../services/service.ts";

export default function addLeaveMesh() {
    const [value, setValue] = useState(0);


    function increaseValue() {
        console.log(value);
        setValue(value + 1);
    }

    function decreaseValue() {
        setValue(value - 1);
        if (value === 0) {
            setValue(0);
        }
    }

    var count = 0;

    function setLocalStorageObject() {
        count++;

        var obj = {
            qtd: value,
            peso: peso,
            qualidade: qualidade,
            notaFiscal: notaFiscal,
            preco: preco,
            malha: malha
        }
        localStorage.setItem("saidaMalha" + count, JSON.stringify(obj));
    }

    const [qtd, setQtd] = useState("");
    function handleQtd(event) {
        setQtd(event.target.value);
        console.log("qtd: ", qtd);
    }

    const [peso, setPeso] = useState("");
    function handlePeso(event) {
        setPeso(event.target.value);
        console.log("peso: ", peso);
    }

    const [qualidade, setQualidade] = useState("");
    function handleQualidade(event) {
        setQualidade(event.target.value);
    }

    const [notaFiscal, setNotaFiscal] = useState("");
    function handleNotaFiscal(event) {
        setNotaFiscal(event.target.value);
    }

    const [preco, setPreco] = useState("");
    function handlePreco(event) {
        setPreco(event.target.value);
    }

    const [malha, setMalha] = useState("");
    function handleMalha(event) {
        setMalha(event.target.value);
    }


    var listaMalhas = [];

    async function addListaMalhas() {
        listaMalhas = await Service.buscarMalha();
        console.log("listaMalhas: ", listaMalhas);
    }

    function addOption() {
        addListaMalhas();
        var select = document.querySelector("#meshInput")
        for (var i = 0; i < listaMalhas.length; i++) {
            var option = document.createElement("option");
            option.value = listaMalhas[i].descricao;
            select.add(option);
        }
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


                    <div className="topContainer">
                        <label>
                            <span>Quantidade:</span>
                            <div className="quantidade">
                                <div className="menos" onClick={decreaseValue}>
                                    -
                                </div>
                                <input type="text" value={value} onChange={handleQtd} />
                                <div className="mais" onClick={increaseValue}>
                                    +
                                </div>
                            </div>
                        </label>

                        <label className="labelPeso">
                            <span >Peso:</span>
                            <div className="inputPeso">
                                <input onChange={handlePeso} type="text" />
                            </div>
                        </label>
                    </div>

                    <br />

                    <div className="qualityContainer">
                        <label className="labelQuality">
                            <label className="titleAndInput">
                                <span>Qualidade</span>
                                <div className="inputQualidade">
                                    <input onChange={handleQualidade} type="text" className="inputQuality" />
                                </div>
                            </label>
                        </label>
                    </div>

                    <br />

                    <div className="nfContainer">
                        <label>
                            <span>Anexar Nota Fiscal: </span>
                            <div className="buttonUpload">
                                <input onChange={handleNotaFiscal} type="file" />
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
                            <span>Malha: </span>
                            <div className="inputPeso">
                                <input onChange={handleMalha} list="mesh" name="mesh" id="meshInput" />
                                <datalist id="mesh">
                                    {
                                        addOption()
                                    }
                                </datalist>
                            </div>
                        </label>
                    </div>
                    <div className="containerButton">
                        <Link to="/leaveMesh">
                            <button onClick={setLocalStorageObject}>Concluir</button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
