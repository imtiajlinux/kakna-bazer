import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import {
  cartContext,
  searchProductContext,
} from "./components/context/cartContext";

import {
  Home,
  ContactUs,
  About,
  Login,
  ShoppingCart,
  Warranty,
  Search,
} from "./pages/index";

function App() {
  const [cart, setcart] = useState([]);

  const [product, setproduct] = useState([]);

  // const handelAddProduct = (product) => {
  //   const newcard = [...cart, product];
  //   setcart(newcard);
  // };
  const handelAddProduct = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    if (productExist) {
      setcart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setcart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const handelRemoveProduct = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setcart(cart.filter((item) => item.id !== product.id));
    } else {
      setcart(
        cart.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <searchProductContext.Provider value={{ product, setproduct }}>
                <cartContext.Provider value={{ cart, setcart }}>
                  <Layout />{" "}
                </cartContext.Provider>
              </searchProductContext.Provider>
            }
          >
            <Route
              index
              element={<Home handelAddProduct={handelAddProduct} />}
            />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/shoppingCart"
              element={
                <ShoppingCart
                  handelAddProduct={handelAddProduct}
                  handelRemoveProduct={handelRemoveProduct}
                />
              }
            />
            <Route path="/warranty" element={<Warranty />} />
            <Route
              path="/search"
              element={<Search handelAddProduct={handelAddProduct} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
