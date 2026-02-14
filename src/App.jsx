import React from "react";
import Header from "./Header.jsx";
import Product from "./Product.jsx";
import "./App.css";
import { useDispatch } from "react-redux";
import { clearCart } from "./Redux/slice.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartList from "./CartList.jsx";

//const dispatch = useDispatch();

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Product />}></Route>
          <Route path="/cart" element={<CartList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
