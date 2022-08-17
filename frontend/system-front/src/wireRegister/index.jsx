import React from "react";
import "../styles.scss";
import Sidebar from "../Components/sidebar"

export default function providerRegister() {
    return (
        <div className="container">
            <Sidebar></Sidebar>
            <main>
                <div className="form">
                    <div className="headerModal">
                        <span>Cadastrar Produto</span>
                    </div>
                    <label>
                        <span>Descrição:</span>
                        <textarea cols="30" rows="10"></textarea>
                    </label>
                </div>
            </main>
        </div>
    );
}
