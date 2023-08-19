import "./productStyle.css";
import React, { useEffect, useState, useContext } from "react";
import ProductCard from "./productCard";
import CurosalIn from "./curosal in product/product-curosal-container";
import { cartContext } from "../context/cartContext";

const Product = ({ handelAddProduct }) => {
  const [product, setproduct] = useState([]);
  // const { cart, setcart } = useContext(cartContext);
  // const [cart, setcart] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setproduct(data.products);
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="product-container">
      {product.slice(0, 15).map((val) => {
        return (
          <ProductCard
            key={val.id}
            handelAddProduct={handelAddProduct}
            product={val}
          ></ProductCard>
        );
      })}
      <CurosalIn></CurosalIn>
      {product.slice(15).map((val) => {
        return (
          <ProductCard
            key={val.id}
            handelAddProduct={handelAddProduct}
            product={val}
          ></ProductCard>
        );
      })}
    </div>
  );
};

export default Product;
