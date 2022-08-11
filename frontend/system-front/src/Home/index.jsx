import React from "react";
import "./styles.scss";
import Sidebar from "../Components/sidebar";

export default function App() {
  return (
    <div className="containerPageHome">
      <div className="quadrado-cima"></div>

      <div className="quadrados">
        <div className="quadrado-esquerda"></div>
        <div className="quadrado-direita"></div>
      </div>
    </div>
  );
}
