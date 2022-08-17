import React from "react";
import Sidebar from "../Components/Sidebar/sidebar";

import "./styles.scss";

export default function App() {
  return (
    <div className="containerPageHome">
      <Sidebar></Sidebar>

      <div class="container">
        <div className="quadrado-cima"></div>

        <div className="quadrados">
          <div className="quadrado-esquerda"></div>
          <div className="quadrado-direita"></div>
        </div>
      </div>
    </div>
  );
}
