import "./cursalStyle.css";
import React from "react";

const Curosal = ({ product, handelAddProduct }) => {
  const { images, text, title, price } = product;
  return (
    <div className="card">
      <div className="card-content">
        <h2>{title}</h2>
        <p>{text}</p>
        <p>price: {price}$</p>
        <button
          type="submit"
          className="buy-now-btn"
          onClick={() => {
            handelAddProduct(product);
          }}
        >
          ADD TO Cart
        </button>
      </div>
      <div className="card-photo">
        <img src={images[0]} alt="iiiii" />
      </div>
    </div>
  );
};

export default Curosal;
