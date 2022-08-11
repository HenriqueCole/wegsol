import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ClientRegister from "./clientRegister";
import MachineRegister from "./machineRegister";
import ProductRegister from "./productRegister";
import ProviderRegister from "./providerRegister";
import MeshRegister from "./meshRegister";
import WireRegister from "./wireRegister";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
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
    </BrowserRouter>
  </React.StrictMode>
);
