import "./curosalContainerStyle.css";
import React from "react";
import Curosal from "./curosal";
import heroData from "./heroCurosalData";
// importing react awesome slider
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const CurosalContainer = ({ handelAddProduct }) => {
  return (
    <>
      <div className="curosal-container">
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false}
          interval={5000}
          style={{
            height: "70vh",
          }}
          className="curosal"
        >
          {heroData.map((val) => {
            return (
              <div key={val.id}>
                <Curosal
                  handelAddProduct={handelAddProduct}
                  product={val}
                ></Curosal>
              </div>
            );
          })}
        </AutoplaySlider>
      </div>
    </>
  );
};

export default CurosalContainer;
