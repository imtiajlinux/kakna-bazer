import "./warrantyPageStyle.css";
import React from "react";
import warrantyPageData from "./warrantyPageData";
import textLine from "./warrantyPageLineData";

const WarrantyPage = () => {
  return (
    <div className="warranty-container">
      <div className="warranty-content">
        <h1>warranty</h1>
        {warrantyPageData.map((data) => {
          return (
            <div key={data.id}>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          );
        })}
        {textLine.map((line) => {
          return (
            <div key={line.id}>
              <p>{line.line}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WarrantyPage;
