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
  ShoppingCard,
  Warranty,
  Search,
} from "./pages/index";
function App() {
  const [cart, setcart] = useState([]);

  const [product, setproduct] = useState([]);

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
            <Route index element={<Home />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shoppingCard" element={<ShoppingCard />} />
            <Route path="/warranty" element={<Warranty />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
