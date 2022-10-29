import "antd/dist/antd.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CartPage } from "./Pages/CartPage";
import Homepage from "./Pages/Homepage";
import Items from "./Pages/Items";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/Items" element={<Items />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
