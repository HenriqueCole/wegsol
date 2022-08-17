import React from "react";
import Sidebar from "../Components/sidebar";

import "./styles.scss";

export default function App() {
  return (
    <div className="containerPageHome">
      <Sidebar></Sidebar>
      <div className="quadrado-cima"></div>

      <div className="quadrados">
        <div className="quadrado-esquerda"></div>
        <div className="quadrado-direita"></div>
      </div>
    </div>
  );
}
