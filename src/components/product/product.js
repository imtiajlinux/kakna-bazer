import "./productStyle.css";
import React, { useEffect, useState } from "react";
import ProductCard from "./productCard";
import CurosalIn from "./curosal in product/product-curosal-container";

const Product = () => {
  const [product, setproduct] = useState([]);
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
        return <ProductCard key={val.id} product={val}></ProductCard>;
      })}
      <CurosalIn></CurosalIn>
      {product.slice(15).map((val) => {
        return <ProductCard key={val.id} product={val}></ProductCard>;
      })}
    </div>
  );
};

export default Product;
