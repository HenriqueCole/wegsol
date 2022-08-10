import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import ClientRegister from "./clientRegister";

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
    </BrowserRouter>
  </React.StrictMode>
);
