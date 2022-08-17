import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar"
import Header from "../Components/Header/header";

export default function addLeaveMesh() {
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
                            <div className="menos">-</div>
                            <input type="text" value={0} />
                            <div className="mais">+</div>
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
