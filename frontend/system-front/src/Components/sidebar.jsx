import React from "react";
import "./sidebar.scss";

import Casa from "../assets/casa.png";
import Cliente from "../assets/cliente.png";
import Fio from "../assets/fio.png";
import Fornecedor from "../assets/fornecedor.png";
import Logo from "../assets/logo.png";
import Malha from "../assets/malha.png";
import Maquina from "../assets/maquina.png";
import Produto from "../assets/produto.png";
import Fio1 from "../assets/fio 1.png";
import Malha1 from "../assets/padrao-de-tecido 1.png";
import Producao from "../assets/linha-de-montagem 1.png";

import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="entireContainer">
      <div className="sidebarContainer">
        <Link to="/">
          <div className="homeContainer">
            <div className="icon-home">
              <img src={Casa} className="icon-home-main" />
            </div>
            <div className="text-home">
              <p className="text-home-main">Home</p>
            </div>
          </div>
        </Link>
        <div className="dotLine"></div>
        <Link to="/clientRegister">
          <div className="registerClient homeContainer">
            <div className="icon-registerClient icon-home">
              <img
                src={Cliente}
                alt=""
                className="icon-registerClient-main icon-home-main"
              />
            </div>
            <div className="text-registerClient ">
              <p className="text-registerClient-main text-home-main">
                Cadastrar Cliente
              </p>
            </div>
          </div>
        </Link>
        <Link to="/machineRegister">
          <div className="registerMachines homeContainer">
            <div className="icon-registerMachines icon-home">
              <img
                src={Maquina}
                alt=""
                className="icon-registerMachines-main icon-home-main"
              />
            </div>
            <div className="text-registerMachines">
              <p className="text-registerMachines-main text-home-main">
                Cadastrar Máquina
              </p>
            </div>
          </div>
        </Link>
        <Link to="/productRegister">
          <div className="registerProduct homeContainer">
            <div className="icon-registerProduct icon-home">
              <img
                src={Produto}
                alt=""
                className="icon-registerProduct-main icon-home-main"
              />
            </div>
            <div className="text-registerProduct">
              <p className="text-registerProduct-main text-home-main">
                Cadastrar Produto
              </p>
            </div>
          </div>
        </Link>
        <Link to="/providerRegister">
          <div className="registerProvider homeContainer">
            <div className="icon-registerProvider icon-home">
              <img
                src={Fornecedor}
                alt=""
                className="icon-registerProvider-main icon-home-main"
              />
            </div>
            <div className="text-registerProvider">
              <p className="text-registerProvider-main text-home-main">
                Cadastrar Fornecedor
              </p>
            </div>
          </div>
        </Link>
        <Link to="/meshRegister">
          <div className="registerMesh homeContainer">
            <div className="icon-registerMesh icon-home">
              <img
                src={Malha}
                alt=""
                className="icon-registerMesh-main icon-home-main"
              />
            </div>
            <div className="text-registerMesh">
              <p className="text-registerMesh-main text-home-main">
                Cadastrar Malha
              </p>
            </div>
          </div>
        </Link>
        <Link to="/wireRegister">
          <div className="enterWire homeContainer">
            <div className="icon-enterWire icon-home">
              <img
                src={Fio}
                alt=""
                className="icon-enterWire-main icon-home-main"
              />
            </div>
            <div className="text-enterWire">
              <p className="text-enterWire-main text-home-main">
                Cadastrar Fio
              </p>
            </div>
          </div>
        </Link>
        <div className="dotLine"></div>
        <Link to="/enterWire">
          <div className="enterWire homeContainer">
            <div className="icon-enterWire icon-home">
              <img
                src={Fio1}
                alt=""
                className="icon-enterWire-main icon-home-main"
              />
            </div>
            <div className="text-enterWire">
              <p className="text-enterWire-main text-home-main">Entrada Fio</p>
            </div>
          </div>
        </Link>
        <Link to="/leaveMesh">
          <div className="leftMesh homeContainer">
            <div className="icon-leftMesh icon-home">
              <img
                src={Malha1}
                alt=""
                className="icon-leftMesh-main icon-home-main"
              />
            </div>
            <div className="text-leftMesh">
              <p className="text-leftMesh-main text-home-main">
                Saída de Malha
              </p>
            </div>
          </div>
        </Link>
        <Link to="/productionScreen">
          <div className="startProduction homeContainer">
            <div className="icon-startProduction icon-home">
              <img
                src={Producao}
                alt=""
                className="icon-startProduction-main icon-home-main"
              />
            </div>
            <div className="text-startProduction">
              <p className="text-enterWire-main text-home-main">
                Iniciar Produção
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
