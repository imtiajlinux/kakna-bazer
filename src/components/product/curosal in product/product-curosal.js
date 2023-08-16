import "./product-curosal-style.css";
import React from "react";

const ProductCurosal = ({ imgs, into, title, price }) => {
  return (
    <div className="productCurosal">
      <img src={imgs} alt="" />
      <div className="product-content">
        <p>{into}</p>
        <h2>{title}</h2>
        <h3>price:{price}$</h3>
        <button type="submit" className="buy-now-btn">
          buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCurosal;
