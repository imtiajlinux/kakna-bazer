import "./navbarStyle.css";
import React, { useState, useEffect, useContext } from "react";
import { FaBarsStaggered, FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import CurrentUserContext from "./context/currentuserContext";

import { Link } from "react-router-dom";
import navLogo from "../assets/brand logo.png";
import { cartContext } from "./context/cartContext";

const NavBar = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const { cart } = useContext(cartContext);
  const [click, setclick] = useState(false);
  const handelclick = () => setclick(!click);
  const [bgColor, setbgcolor] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setclick(false);
      setbgcolor(true);
    } else {
      setbgcolor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={bgColor ? "nav nav-bg" : "nav"}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <div className="nav-content">
          <div className="nav-logo">
            <Link to="/">
              {" "}
              <img src={navLogo} alt="brand logo" />
            </Link>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to="/">home</Link>
            </li>

            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
            <li>
              <Link to="/warranty">warranty</Link>
            </li>
          </ul>
        </div>
        <div className="nav-icons">
          <Link to="/shoppingCart">
            {" "}
            <FaShoppingCart></FaShoppingCart>
            <span className="shopping-cart-indicator">{cart.length}</span>
          </Link>

          <Link to="/profile">
            {currentUser ? (
              <img
                className="nav-profilepic"
                src={
                  currentUser.photoURL
                    ? currentUser.photoURL
                    : "https://static.vecteezy.com/system/resources/previews/000/439/863/large_2x/vector-users-icon.jpg"
                }
                alt=""
              />
            ) : (
              <FaCircleUser></FaCircleUser>
            )}
          </Link>
          <Link to="#" onClick={handelclick}>
            {click ? (
              <FaTimes className="bars-icons" />
            ) : (
              <FaBarsStaggered className="bars-icons" />
            )}
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
