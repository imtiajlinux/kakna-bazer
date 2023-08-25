import "./aboutStyle.css";
import React from "react";
import AboutData from "./aboutData";

const Aboutcontent = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>kakna bazer ltd.</h1>
        {AboutData.map((data) => {
          return (
            <div key={data.id}>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Aboutcontent;
