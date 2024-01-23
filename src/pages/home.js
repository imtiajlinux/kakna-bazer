import React from "react";
import Hero from "../components/hero-curosal/hero";
import Product from "../components/product/product";
const Home = ({ handelAddProduct }) => {
  return (
    <div>
      <Hero handelAddProduct={handelAddProduct}></Hero>
      <Product handelAddProduct={handelAddProduct}></Product>
    </div>
  );
};

export default Home;