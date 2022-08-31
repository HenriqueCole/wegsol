import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";

import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const notify = () => toast.success("Sucesso!");

export default function leaveMesh() {
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
            <span>Saída de Malha</span>
          </div>
          <label>
            <span>Adicionar saídas:</span>
            <div className="saida">
              <input type="text"></input>
              <Link to="/addLeaveMesh">
                <img
                  className="addSaida"
                  src="https://i.imgur.com/LiEAL12.png"
                  alt=""
                />
              </Link>
            </div>
          </label>

          <label className="malhas">
            <div className="malha">
              <input type="text" disabled placeholder="Malha 01"></input>
              <img src="https://i.imgur.com/05V0IrH.png" alt="" />
            </div>
          </label>

          <label>
            <span>Anexo NF:</span>
            <input type="file" />
          </label>

          <label>
            <span>Valor total:</span>

            <input type="number" placeholder="R$" />
          </label>

          <label>
            <span>Cliente:</span>
            <select>
              <option>caraio</option>
            </select>
          </label>

          <div className="containerButton">
            <button onClick={notify}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
