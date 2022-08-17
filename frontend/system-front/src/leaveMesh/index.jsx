import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";


export default function leaveMesh() {
    return (
        <div className="container">
            <Header></Header>
            <Sidebar></Sidebar>
            <main>
                <div className="form">
                    <div className="headerModal">
                        <span>Saída de Malha</span>
                    </div>
                    <label>
                        <span>Adicionar saídas:</span>
                        <input type="text"></input>
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
                        <button>Concluir</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
