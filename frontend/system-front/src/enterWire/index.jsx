import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";

export default function enterWire() {
    return (
        <div className="container">
            <Sidebar></Sidebar>
            <main>
                <div className="form">
                    <div className="headerModal">
                        <span>Entrada Fio</span>
                    </div>

                    <div className="flex">
                        <label>
                            <span>Quantidade caixas:</span>
                            <input type="text" />
                        </label>

                        <label>
                            <span>Quantidade em kg:</span>
                            <input type="text" />
                        </label>
                    </div>

                    <div className="flex">

                        <label>
                            <span>Quantidade de rolos:</span>
                            <input type="text" />
                        </label>

                        <label>
                            <span>Subtotal:</span>
                            <input type="text" />
                        </label>
                    </div>

                    <div className="flex">

                        <label>
                            <span>Fornecedor:</span>
                            <input type="text" />
                        </label>

                        <label>
                            <span>Fio:</span>
                            <input type="text" />
                        </label>
                    </div>


                    <label>
                        <span>Anexo NF:</span>
                        <input type="file" />
                    </label>

                    <div className="containerButton">
                        <button>Concluir</button>
                    </div>
                </div>
            </main >
        </div >
    );
}
