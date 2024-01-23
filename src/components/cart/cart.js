import "./cartStyle.css";
import React, { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/cartContext";
import CurrentUserContext from "../context/currentuserContext";
import { getDoc, getFirestore, doc } from "firebase/firestore";

import { FaRegSquareMinus, FaRegSquarePlus } from "react-icons/fa6";

const firestorage = getFirestore();
const Cart = ({ handelAddProduct, handelRemoveProduct }) => {
  const [test1, settest1] = useState();
  const { cart, setcart } = useContext(cartContext);
  const [onlinecart, setonlinecart] = useState([]);

  const { currentUser } = useContext(CurrentUserContext);
  const totalprice = cart.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  useEffect(() => {
    const getcartdata = async () => {
      if (currentUser) {
        settest1(cart);
        try {
          const cartraf = doc(firestorage, "userCartitem", currentUser.uid);
          const snapcart = await getDoc(cartraf);
          if (snapcart.exists()) {
            const data = snapcart.data();
            setonlinecart(data);
            // console.dir(data);
            // const temp = Object.values(data); // Convert the object into an array and set it to the state variable
            // setonlinecart(temp[0]);
            // console.dir(onlinecart);
            // setonlinecart(...cart.push(...data));

            console.log(`this is data`, data);
            console.log(`this test1`, test1);
            console.log(`this is cart`, cart);
          }
        } catch (error) {
          console.log("this error from geting cart data from server ", error);
        }
      }
    };
    return () => {
      getcartdata();
    };
  }, [cart]);
  // console.log("online cart", onlinecart, "offline cart", cart);

  return (
    <div style={{ margin: "150px 0", padding: ".5rem" }}>
      <div className="cart-items">
        <div className="cart-items-header">
          {" "}
          <h1>this is you card item</h1>
        </div>
        {cart.lenght === 0 && (
          <div className="cart-items-empty">
            <h1>no item are addend</h1>
          </div>
        )}

        <div>
          <div
            className="cart-item-list"
            style={{
              borderBottom: "3px",
              borderBottomStyle: "dashed",
              borderBottomColor: "black",
            }}
          >
            <div className="cart-item-img">
              <h5>images</h5>
            </div>
            <div className="cart-items-title">
              <h5>Name</h5>
            </div>
            <div style={{ paddingRight: "1rem" }}>
              <h5>quantity</h5>
            </div>
            <div className="cart-items-price">
              {" "}
              <h5> price</h5>
            </div>
          </div>
          {cart.map((val) => {
            const itemprice = val.quantity * val.price;
            return (
              <div key={val.id}>
                <div className="cart-item-list">
                  <div className="cart-item-img">
                    <img src={val.images[0]} alt="product img" />
                  </div>
                  <div className="cart-items-title">
                    <h5>{val.title}</h5>
                  </div>
                  <div className="cart-items-add-remove-function">
                    <FaRegSquarePlus
                      className="cart-items-add"
                      onClick={() => {
                        handelAddProduct(val);
                      }}
                    ></FaRegSquarePlus>
                    <h4 className="cart-item-qt">{val.quantity}</h4>
                    <FaRegSquareMinus
                      className="cart-items-remove"
                      onClick={() => {
                        handelRemoveProduct(val);
                      }}
                    ></FaRegSquareMinus>
                  </div>
                  <div className="cart-items-price">
                    {" "}
                    <h4>{itemprice}$</h4>{" "}
                  </div>
                </div>
              </div>
            );
          })}
          <div className="cart-items-total-price">
            {" "}
            <div>
              <h2>Total price</h2>
            </div>{" "}
            <div>{<h2>:{totalprice}$</h2>}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
