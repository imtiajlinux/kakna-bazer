import React from "react";
import "./product-curosal-container-style.css";
import ProductCurosal from "./product-curosal";
import ProductCard from "./product-card";
import ProductCardData from "./product-card-data";
import ProductCurosalData from "./product-curosal-data";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const CurosalIn = () => {
  return (
    <div className="product-banner-container">
      <div>
        {" "}
        <AutoplaySlider
          play={true}
          bullets={false}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={6000}
        >
          {ProductCurosalData.map((val) => {
            return (
              <div key={val.id}>
                <ProductCurosal
                  // key={val.id}
                  imgs={val.photo}
                  into={val.into}
                  title={val.title}
                  price={val.price}
                ></ProductCurosal>
              </div>
            );
          })}
        </AutoplaySlider>
      </div>
      <div className="product-card-container">
        {ProductCardData.map((val) => {
          return (
            <ProductCard
              key={val.id}
              imgs={val.photo}
              title={val.title}
              into={val.into}
              price={val.price}
            ></ProductCard>
          );
        })}
      </div>
    </div>
  );
};

export default CurosalIn;
