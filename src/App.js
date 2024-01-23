import "./App.css";

import React, { useState, useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import { uploadCart } from "./components/login & singup & profile page/profile page/upgrade&&upload";
import CurrentUserContext from "./components/context/currentuserContext";

import {
  cartContext,
  searchProductContext,
} from "./components/context/cartContext";

import {
  Home,
  ContactUs,
  About,
  Profile,
  ShoppingCart,
  Warranty,
  Search,
} from "./pages/index";
import LoginPage from "./components/login & singup & profile page/login page/loginPage";
import UpdateProfile from "./components/login & singup & profile page/profile page/upgrade profile/updateProfile";

function App() {
  const { currentUser } = useContext(CurrentUserContext);
  const [cart, setcart] = useState([]);

  const [product, setproduct] = useState([]);

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

  useEffect(() => {
    if (currentUser) {
      uploadCart(currentUser, cart);
    }
  }, [cart]);

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
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/updateProfie" element={<UpdateProfile />} />
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
