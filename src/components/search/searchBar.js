import "./SearchBarStyle.css";
import React, { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { searchProductContext } from "../context/cartContext";
const SearchBar = () => {
  const [searchText, setSearchText] = useState();

  const { product, setproduct } = useContext(searchProductContext);
  const fetchProduct = async () => {
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${searchText}`
    );
    const data = await response.json();
    setproduct(data.products);
  };

  return (
    <div
      style={{
        position: "fixed",
        zIndex: "100",
        width: "100%",
        top: "90px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="search-bar">
        <input
          type="text"
          placeholder="search...."
          value={searchText || ""}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Link
          to="/search"
          onClick={() => {
            fetchProduct();
          }}
        >
          <FaSearch></FaSearch>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
