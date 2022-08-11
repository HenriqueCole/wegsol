import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/sidebar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       
        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
