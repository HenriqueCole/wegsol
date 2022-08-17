import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";


export default function productRegister() {
    return (
        <div className="container">
            <Sidebar></Sidebar>
            <main>
                <div className="form">
                    <div className="headerModal">
                        <span>Cadastrar Produto</span>
                    </div>
                    <div className="containerInputs">
                        <label>
                            <span>Descrição:</span>
                            <textarea cols="30" rows="10"></textarea>
                        </label>

                        <label>
                            <span>Quantidade:</span>
                            <div className="quantidade">
                                <div className="menos">-</div>
                                <input type="text" value={0} />
                                <div className="mais">+</div>
                            </div>
                        </label>

                        <label>
                            <span>Valor Total:</span>
                            <input type="text" />
                        </label>

                        <label>
                            <span>Anexo NF:</span>
                            <input type="file" />
                        </label>

                        <label>
                            <span>Fornecedor:</span>
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
