import "./product-card-style.css";
import React from "react";

const ProductCard = ({ imgs, title, into, price }) => {
  return (
    <div className="product-card-inner">
      <img src={imgs} alt="" />
      <div className="product-card-content">
        <p>{into}</p>
        <h2>{title}</h2>
        <h3>price: {price}$</h3>
      </div>
    </div>
  );
};

export default ProductCard;
