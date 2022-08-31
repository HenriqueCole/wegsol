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
            <span>Cadastrar Fio</span>
          </div>

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

          <div className="containerButton">
            <button>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
