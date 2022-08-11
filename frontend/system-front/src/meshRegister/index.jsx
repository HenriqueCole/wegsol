import React from "react";

import "../styles.scss";

export default function meshRegister() {
    return (
        <div className="container">
            <main>
                <div className="form">
                    <div className="headerModal">
                        <span>Cadastrar Malha</span>
                    </div>
                    <div className="containerInputs">
                        <label>
                            <span>Descrição:</span>
                            <textarea cols="30" rows="10"></textarea>
                        </label>

                        <label>
                            <span>Fio malha:</span>
                            <input type="text" />
                        </label>

                        <label>
                            <span>Cliente:</span>
                            <input type="text" />
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
