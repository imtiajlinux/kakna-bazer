import "./heroStyle.css";
import React from "react";
import CurosalContainer from "./curosalContainer";

const Hero = ({ handelAddProduct }) => {
  return (
    <div className="hero">
      <CurosalContainer handelAddProduct={handelAddProduct}></CurosalContainer>
    </div>
  );
};

export default Hero;
