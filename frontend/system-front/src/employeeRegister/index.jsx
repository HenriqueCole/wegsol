import React from "react";
import "../styles.scss";
import Sidebar from "../Components/Sidebar/sidebar";
import Header from "../Components/Header/header";

import toast, { Toaster } from "react-hot-toast";

const notify = () => toast.success("Funcionário cadastrado com sucesso!");

export default function providerRegister() {

  const [nome, setNome] = useState("");
  function handleName(event) {
    setNome(event.target.value);
  }

  const [cpf, setCpf] = useState("");
  function handleCpf(event) {
    setCpf(event.target.value);
  }

  return (
    <div className="container">
      <Header></Header>
      <Sidebar></Sidebar>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            backgroundColor: "#414141",
            color: "white",
          },
        }}
      />
      <main>
        <div className="form">
          <div className="headerModal">
            <span>Cadastrar Funcionário</span>
          </div>
          <div className="containerInputs">
            <label>
              <span>Nome:</span>
              <input type="text" />
            </label>

            <div className="flex">
              <label>
                <span>CPF:</span>
                <input type="text" />
              </label>

              <label>
                <span>Idade:</span>
                <input type="text" />
              </label>
            </div>

            <div className="flex">
              <label>
                <span>Salário:</span>
                <input type="text" />
              </label>

              <label>
                <span>Turno:</span>
                <input type="text" />
              </label>
            </div>
          </div>
          <div className="containerButton">
            <button onClick={notify}>Concluir</button>
          </div>
        </div>
      </main>
    </div>
  );
}
