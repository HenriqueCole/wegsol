import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";


export default function wireRegister() {
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
                        <span>Descrição:</span>
                        <textarea cols="30" rows="10"></textarea>
                    </label>

                    <div className="containerButton">
                        <button>Concluir</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
