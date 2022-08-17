import React from "react";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";
import "./styles.scss";
import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';




export default function App() {



  return (
    <div className="containerPageHome">
      <Header></Header>
      <Sidebar></Sidebar>
      <div class="container-home">
        <div className="quadrado-cima"></div>
        <div className="quadrados">
          <div className="quadrado-esquerda"></div>
          <div className="quadrado-direita"></div>
        </div>
      </div>

    </div>
  );
}
