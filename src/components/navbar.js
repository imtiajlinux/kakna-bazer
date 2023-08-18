import "./navbarStyle.css";
import React, { useState, useEffect, useContext } from "react";
import { FaBarsStaggered, FaCircleUser } from "react-icons/fa6";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";
import navLogo from "../assets/brand logo.png";
import { cartContext } from "./context/cartContext";
import SearchBar from "./search/searchBar";

const NavBar = () => {
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
          <Link to="/shoppingCard">
            {" "}
            <FaShoppingCart></FaShoppingCart>
            <span className="shopping-cart-indicator">{cart.length}</span>
          </Link>

          <Link to="/login">
            <FaCircleUser></FaCircleUser>
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
