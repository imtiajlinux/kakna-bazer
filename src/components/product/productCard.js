import "./productCardStyle.css";
import React, { useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product, handelAddProduct }) => {
  const { title, images, description, price, brand, category, stock } = product;

  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={images[0]} alt={description} />
      </div>
      <div className="product-card-info">
        <h3>{brand}</h3>
        <h2>{title}</h2>
        <p className="description">{description}</p>

        <div className="product-dit">
          <div>
            <h3> price: {price}$</h3>

            <button
              type="submit"
              onClick={() => {
                handelAddProduct(product);
              }}
              className="buy-now-btn"
            >
              {" "}
              <FaShoppingCart></FaShoppingCart> Add Cart
            </button>
          </div>
          <div>
            {" "}
            <h3 className="stock"> only {stock} in stock</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
