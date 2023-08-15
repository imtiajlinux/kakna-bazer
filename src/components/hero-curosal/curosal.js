import "./cursalStyle.css";
import React from "react";

const Curosal = ({ photo, text, titel, price }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h2>{titel}</h2>
        <p>{text}</p>
        <p>price: {price}</p>
        <button type="submit" className="buy-now-btn">
          buy now
        </button>
      </div>
      <div className="card-photo">
        <img src={photo} alt="iiiii" />
      </div>
    </div>
  );
};

export default Curosal;
