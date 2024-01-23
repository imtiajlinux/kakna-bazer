import React, { useContext } from "react";
import ProductCard from "../components/product/productCard";

import {
  searchProductContext,
  cartContext,
} from "../components/context/cartContext";

const Search = ({ handelAddProduct }) => {
  const { product } = useContext(searchProductContext);
  const { cart, setcart } = useContext(cartContext);

  // const handelAddProduct = (product) => {
  //   const newcard = [...cart, product];
  //   setcart(newcard);
  // };

  return (
    <div style={{ marginTop: "140px" }}>
      <div
        style={{
          maxWidth: "1300px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: ".5rem",
        }}
      >
        {product.length === 0 ? (
          <h1
            style={{
              color: "red",
              textTransform: "capitalize",
              height: "100vh",
              display: "flex",
              alignItems: "center",
            }}
          >
            the search result not found !
          </h1>
        ) : (
          product.map((val) => {
            return (
              <ProductCard
                key={val.id}
                handelAddProduct={handelAddProduct}
                product={val}
              ></ProductCard>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Search;
