import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar"

export default function addLeaveMesh() {
    return (
        <div className="container">
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
