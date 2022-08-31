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
                        <span>Adicionar Saída</span>
                    </div>


                    <div className="topContainer">
                        <label>
                            <span>Quantidade:</span>
                            <div className="quantidade">
                                <div className="menos">-</div>
                                <input type="text" value={0} />
                                <div className="mais">+</div>
                            </div>
                        </label>

                        <label className="labelPeso">
                            <span>Peso:</span>
                            <div className="inputPeso">
                                <input type="text" />
                                <span>     Kg</span>
                            </div>
                        </label>
                    </div>

                    <br />

                    <div className="qualityContainer">
                        <label className="labelQuality">
                            <label className="titleAndInput">
                                <span>Qualidade</span>
                                <div className="inputQualidade">
                                    <input type="text" className="inputQuality" />
                                </div>
                            </label>
                        </label>
                    </div>

                    <br />

                    <div className="nfContainer">
                        <label>
                            <span>Anexar Nota Fiscal: </span>
                            <div className="buttonUpload">
                                <input type="file" />
                            </div>
                        </label>
                    </div>

                    <br />

                    <div className="priceContainer">
                        <label className="labelPeso">
                            <span>Preço:</span>
                            <div className="inputPeso">
                                <input type="text" />
                                <span>   R$</span>
                            </div>
                        </label>
                    </div>

                    <br />

                    <div className="priceContainer">
                        <label className="labelPeso">
                            <span>Malha: </span>
                            <div className="inputPeso">
                                <input list="mesh" name="mesh" id="meshInput" />
                                <datalist id="mesh">
                                    <option value="Poliêster" />
                                    <option value="Algodão" />
                                    <option value="DryFit" />
                                </datalist>
                            </div>
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
