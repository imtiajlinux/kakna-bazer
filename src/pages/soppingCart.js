import React from "react";
import Cart from "../components/cart/cart";

const SoppingCart = ({ handelAddProduct, handelRemoveProduct }) => {
  return (
    <div>
      <Cart
        handelAddProduct={handelAddProduct}
        handelRemoveProduct={handelRemoveProduct}
      ></Cart>
    </div>
  );
};

export default SoppingCart;
