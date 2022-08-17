import React from "react";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import "./styles.scss";
import Grafico from "../Components/Grafico/grafico"
import Grafico2 from "../Components/Grafico2/grafico2"
import Grafico3 from "../Components/Grafico3/grafico3"

export default function App() {



  return (
    <div className="containerPageHome">
      <Header></Header>
      <Sidebar></Sidebar>
      <div class="container-home">
        <div className="fundo-quadro">
          <div className="quadrado-cima">
            <Grafico></Grafico>
          </div>
        </div>

        <div className="quadrados">
          <div className="quadrado-esquerda">
            <Grafico2></Grafico2>
          </div>
          <div className="quadrado-direita">
            <Grafico3></Grafico3>
          </div>
        </div>
      </div>



    </div>
  );
}


