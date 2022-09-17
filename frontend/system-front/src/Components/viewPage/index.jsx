import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/sidebar";
import Header from "../Header/header";
import "../../styles.scss";
import { Link } from "react-router-dom";
import Services from "../../services/service.ts";
import toast, { Toaster } from "react-hot-toast";

import deleteIcon from "../../assets/excluir.png";

const notify = () => toast.success("Excluido com sucesso!");

export default function Client() {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  let url = window.location.search.substring(1);
  const [currentPage, setCurrentPage] = useState("");
  let [linkPage, setLinkPage] = useState("");
  const [viewList, setViewList] = useState(undefined);
  const [headerlist, setHeaderList] = useState(undefined);
  const [loading, setLoading] = useState();
  const [placeholderName, setPlaceholderName] = useState("");

  useEffect(() => {
    setLoading(
      <div className="loading">
        <img src="/loading.svg" alt="" />
      </div>
    );

    function excluirCliente(id) {
      Services.excluirCliente(id).then((result) => {
        notify();

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    }

    function excluirFuncionario(id) {
      Services.excluirFuncionario(id).then((result) => {
        notify();

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    }

    function excluirProduto(id) {
      Services.excluirProduto(id).then((result) => {
        notify();

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    }

    function excluirFio(id) {
      Services.excluirFio(id).then((result) => {
        notify();

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    }

    function excluirMalha(id) {
      Services.excluirMalha(id).then((result) => {
        notify();

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    }

    if (url === "client") {
      setCurrentPage("Cadastrar Cliente");
      setLinkPage("/clientRegister");
      setPlaceholderName("um cliente");

      Services.buscarClientes().then((result) => {
        if (search !== "") {
          let filteredList = [];
          for (let i = 0; i < result.length; i++) {
            if (result[i].nome == search) {
              filteredList.push(result[i]);
            }
          }
          setList(filteredList);
        } else {
          setList(result.data);
        }

        setViewList(
          list.map((e) => e)
          // result.map(function (item) {
          //   return (
          //     <>
          //       <tr id="" key={item.id}>
          //         <td>{item.nome}</td>
          //         <td>{item.cnpj}</td>
          //         <div
          //           onClick={() => excluirCliente(item.id)}
          //           className="containerDelete"
          //         >
          //           <img className="deleteIcon" src={deleteIcon} alt="" />
          //         </div>
          //       </tr>
          //     </>
          //   );
          // })
        );
        setHeaderList(
          <tr key="name">
            <th>ID</th>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Excluir</th>
          </tr>
        );
        setLoading(undefined);
      });
    } else if (url === "machine") {
      setCurrentPage("Cadastrar Maquina");
      setLinkPage("/machineRegister");
      setPlaceholderName("uma maquina");

      Services.buscarMaquinas().then((result) => {
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.marca}</td>
                <td>{item.ano_fabricacao}</td>
                <td>{item.ano_compra}</td>
                <td>{item.valor_compra}</td>
                <td>{item.rpm}</td>
                <td>{item.qtd_agulhas}</td>
                <td>{item.qtd_platinas}</td>
                <td>{item.qtd_blocos}</td>
                <td>{item.qtd_gaiolas}</td>
                <td>{item.qtd_cones_por_gaiola}</td>
              </tr>
            );
          })
        );

        setHeaderList(
          <tr key="name">
            <th>ID</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Ano Fab.</th>
            <th>Ano Compra</th>
            <th>Valor Compra</th>
            <th>RPM</th>
            <th>Agulhas</th>
            <th>Platinas</th>
            <th>Blocos</th>
            <th>Gaiolas</th>
            <th>Cones</th>
          </tr>
        );
        setLoading(undefined);
      });
    } else if (url === "product") {
      setCurrentPage("Cadastrar Produtos");
      setLinkPage("/productRegister");
      setPlaceholderName("um produto");

      Services.buscarProdutos().then((result) => {
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.id}</td>
                <td>{item.descricao}</td>
                <td>{item.quantidade}</td>
                <td>{item.valor_total_produto}</td>
                <td>{item.arquivo_nf}</td>
                <td>{item.idFornecedor}</td>

                <td
                  onClick={() => excluirProduto(item.id)}
                  className="containerDelete"
                >
                  <img className="deleteIcon" src={deleteIcon} alt="" />
                </td>
              </tr>
            );
          })
        );

        setHeaderList(
          <tr key="name">
            <th>ID</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Total</th>
            <th>Anexo</th>
            <th>Fornecedor</th>
            <th>Excluir</th>
          </tr>
        );
        setLoading(undefined);
      });
    } else if (url === "provider") {
      setCurrentPage("Cadastrar Fornecedor");
      setLinkPage("/providerRegister");
      setPlaceholderName("um Fornecedor");

      Services.buscarFornecedores().then((result) => {
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.cnpj}</td>
              </tr>
            );
          })
        );

        setHeaderList(
          <tr key="name">
            <th>ID</th>
            <th>Nome</th>
            <th>CNPJ</th>
          </tr>
        );
        setLoading(undefined);
      });
    } else if (url === "mesh") {
      setCurrentPage("Cadastrar Malha");
      setLinkPage("/meshRegister");
      setPlaceholderName("uma malha");

      Services.buscarMalha().then((result) => {
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.id}</td>
                <td>{item.descricao}</td>
                <td>{item.fioMalha}</td>
                <td>{item.cliente}</td>

                <td
                  onClick={() => excluirMalha(item.id)}
                  className="containerDelete"
                >
                  <img className="deleteIcon" src={deleteIcon} alt="" />
                </td>
              </tr>
            );
          })
        );

        setHeaderList(
          <tr key="name">
            <th>ID</th>
            <th>Descrição</th>
            <th>Fio Malha</th>
            <th>Cliente</th>
            <th>Excluir</th>
          </tr>
        );
        setLoading(undefined);
      });
    } else if (url === "wire") {
      setCurrentPage("Cadastrar Fio");
      setLinkPage("/wireRegister");
      setPlaceholderName("um Fio");

      Services.buscarFios().then((result) => {
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.id}</td>
                <td>{item.descricao}</td>
                <td
                  onClick={() => excluirFio(item.id)}
                  className="containerDelete"
                >
                  <img className="deleteIcon" src={deleteIcon} alt="" />
                </td>
              </tr>
            );
          })
        );

        setHeaderList(
          <tr key="name">
            <th>ID</th>
            <th>Descrição</th>
            <th>Excluir</th>
          </tr>
        );
        setLoading(undefined);
      });
    } else if (url === "employee") {
      setCurrentPage("Cadastrar Funcionário");
      setLinkPage("/employeeRegister");
      setPlaceholderName("um funcionário");

      Services.buscarFuncionarios().then((result) => {
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.cpf}</td>
                <td>{item.idade}</td>
                <td>{item.salario}</td>
                <td>{item.turno}</td>
                <td
                  onClick={() => excluirFuncionario(item.id)}
                  className="containerDelete"
                >
                  <img className="deleteIcon" src={deleteIcon} alt="" />
                </td>
              </tr>
            );
          })
        );

        setHeaderList(
          <tr key="name">
            <th>ID</th>
            <th>Nome</th>
            <th>CNPJ</th>
            <th>Idade</th>
            <th>Salário</th>
            <th>Turno</th>
            <td>Excluir</td>
          </tr>
        );
        setLoading(undefined);
      });
    } else if (url === "enterWire") {
      setCurrentPage("Cadastrar Entrada de Fio");
      setLinkPage("/enterWire");
      setPlaceholderName("uma entrada de fio");

      Services.buscarEntradaFio().then((result) => {
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.qtd_caixa}</td>
                <td>{item.td_kg}</td>
                <td>{item.qtd_rolos_por_caixa}</td>
                <td>{item.subtotal}</td>
                <td>{item.idFornecedor}</td>
                <td>{item.idFio}</td>
                <td>{item.arquivo_nf}</td>
              </tr>
            );
          })
        );

        setHeaderList(
          <tr key="name">
            <th>Caixas</th>
            <th>Kg</th>
            <th>Rolos</th>
            <th>Sub-total</th>
            <th>Fornecedor</th>
            <th>Fio</th>
            <th>Anexo</th>
          </tr>
        );
        setLoading(undefined);
      });
    } else if (url === "leaveMesh") {
      setCurrentPage("Cadastrar Saída de Fio");
      setLinkPage("/leaveMesh");
      setPlaceholderName("uma saída de fio");

      Services.buscarSaidaMalha().then((result) => {
        setViewList(
          result.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.saida}</td>
                <td>{item.anexo}</td>
                <td>{item.valorTotal}</td>
                <td>{item.cliente}</td>
              </tr>
            );
          })
        );

        setHeaderList(
          <tr key="name">
            <th>Saída</th>
            <th>Anexo</th>
            <th>Valor Total</th>
            <th>Cliente</th>
          </tr>
        );
        setLoading(undefined);
      });
    } else if (url === "productionScreen") {
      setCurrentPage("Iniciar Produção");
      setLinkPage("/productionScreen");
      setPlaceholderName("uma produção");

      Services.buscarProducoes().then((result) => {
        setViewList(
          list.map(function (item) {
            return (
              <tr id="" key={item.id}>
                <td>{item.peso}</td>
                <td>{item.defeitos}</td>
                <td>{item.cliente}</td>
                <td>{item.maquina}</td>
                <td>{item.funcionario}</td>
              </tr>
            );
          })
        );

        setHeaderList(
          <tr key="name">
            <th>Peso</th>
            <th>Defeitos</th>
            <th>Cliente</th>
            <th>Maquina</th>
            <th>Funcionário</th>
          </tr>
        );
        setLoading(undefined);
      });
    }
  }, []);

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

      <div className="container">
        <main>
          <div className="page">
            <input
              type="text"
              value={search}
              placeholder={`Procure ${placeholderName}`}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />

            <Link to={linkPage}>
              <button>{currentPage}</button>
            </Link>
          </div>

          <div className="tabela">
            <table>
              {loading}
              {headerlist}
              {viewList}
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
