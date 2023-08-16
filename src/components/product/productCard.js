import "./productCardStyle.css";
import React from "react";

const ProductCard = ({ product }) => {
  const { title, images, description, price, brand, category, stock } = product;
  return (
    <div className="product-card">
      <div className="product-card-img">
        <img src={images[0]} alt={description} />
      </div>
      <div className="product-card-info">
        <h2>{title}</h2>
        <h3>{brand}</h3>
        <p>{description}</p>
        <p>{category}</p>
        <div className="product-dit">
          <div>
            <h3> price: {price}$</h3>
            <button type="submit" className="buy-now-btn">
              buy now
            </button>
          </div>
          <div>
            {" "}
            <h3 className="stock">{stock} in stock</h3>
            <button className="add-to-card-btn">add to card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
