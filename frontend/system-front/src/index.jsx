import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar/sidebar";

import Home from "./Home";
import ClientRegister from "./clientRegister";
import MachineRegister from "./machineRegister";
import ProductRegister from "./productRegister";
import ProviderRegister from "./providerRegister";
import MeshRegister from "./meshRegister";
import WireRegister from "./wireRegister";
import EmployeeRegister from "./employeeRegister";
import LeaveMesh from "./leaveMesh";
import AddLeaveMesh from "./addLeaveMesh";
import EnterWire from "./enterWire";
import ProductionScreen from "./productionScreen";
import Header from "./Components/Header/header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Routes>
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>

      <Routes>
        <Route path="/clientRegister" element={<ClientRegister />} />
      </Routes>

      <Routes>
        <Route path="/machineRegister" element={<MachineRegister />} />
      </Routes>

      <Routes>
        <Route path="/productRegister" element={<ProductRegister />} />
      </Routes>

      <Routes>
        <Route path="/providerRegister" element={<ProviderRegister />} />
      </Routes>

      <Routes>
        <Route path="/meshRegister" element={<MeshRegister />} />
      </Routes>

      <Routes>
        <Route path="/wireRegister" element={<WireRegister />} />
      </Routes>

      <Routes>
        <Route path="/leaveMesh" element={<LeaveMesh />} />
      </Routes>

      <Routes>
        <Route path="/addLeaveMesh" element={<AddLeaveMesh />} />
      </Routes>

      <Routes>
        <Route path="/employeeRegister" element={<EmployeeRegister />} />
      </Routes>

      <Routes>
        <Route path="/enterWire" element={<EnterWire />} />
      </Routes>

      <Routes>
        <Route path="/productionScreen" element={<ProductionScreen />} />
      </Routes>

      <Routes>
        <Route path="/header" element={<Header />} />
      </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
