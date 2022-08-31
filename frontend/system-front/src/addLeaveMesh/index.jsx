/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import { useState } from "react";

export default function addLeaveMesh() {
  const [value, setValue] = useState(0);

  function increaseValue() {
    setValue(value + 1);
  }

  function decreaseValue() {
    setValue(value - 1);
    if (value === 0) {
      setValue(0);
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
              <input type="text" value={value} />
                  <div className="mais" onClick={increaseValue}>
                +
              </div>
                </div>
              </label>

                        <label className="labelPeso">
                            <span>Peso:</span>
                            <div className="inputPeso">
                                <input type="text" />
                                <span>     Kg</span>
                            </div>
                        </label>
                    </div>

                    <br />

                    <div className="qualityContainer">
                        <label className="labelQuality">
                            <label className="titleAndInput">
                                <span>Qualidade</span>
                                <div className="inputQualidade">
                                    <input type="text" className="inputQuality" />
                                </div>
                            </label>
                        </label>
                    </div>

                    <br />

                    <div className="nfContainer">
                        <label>
                            <span>Anexar Nota Fiscal: </span>
                            <div className="buttonUpload">
                                <input type="file" />
                            </div>
                        </label>
                    </div>

                    <br />

                    <div className="priceContainer">
                        <label className="labelPeso">
                            <span>Preço:</span>
                            <div className="inputPeso">
                                <input type="text" />
                                <span>   R$</span>
                            </div>
                        </label>
                    </div>

                    <br />

                    <div className="priceContainer">
                        <label className="labelPeso">
                            <span>Malha: </span>
                            <div className="inputPeso">
                                <input list="mesh" name="mesh" id="meshInput" />
                                <datalist id="mesh">
                                    <option value="Poliêster" />
                                    <option value="Algodão" />
                                    <option value="DryFit" />
                                </datalist>
                            </div>
                        </label>
                    </div>
          <div className="containerButton">
            <button>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
