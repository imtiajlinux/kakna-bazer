import React, { useState } from "react";
import "./singupPageStyle.css";
import { Link } from "react-router-dom";
import handelChange from "./handelchange";
import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SingupPage = () => {
  const [loding, setloding] = useState();
  const [error, seterror] = useState("");
  const [users, setusers] = useState({
    email: "",
    password: "",
    repassword: "",
  });

  const handelClick = async (e) => {
    e.preventDefault();
    seterror("");
    setloding(true);
    if (users.password === users.repassword) {
      try {
        await createUserWithEmailAndPassword(auth, users.email, users.password);
        alert("account created successfully");
      } catch (error) {
        seterror(error.message.substring(15));
      }
    } else {
      seterror("password not metch");
    }
    setloding(false);
  };

  //here i just create a function to set input data to state.
  const handelChandeInput = (e) => {
    handelChange(users, setusers, e);
  };

  return (
    <div className="singuppage-container">
      <form action="#">
        <h2 className="error">{error}</h2>
        <h2 style={{ color: "blue", fontSize: "2rem" }}>
          Sing <span style={{ color: "royalblue" }}>Up</span>{" "}
        </h2>
        <input
          type="email"
          name="email"
          value={users.email}
          placeholder="enter your email..."
          onChange={handelChandeInput}
          required
        />
        <input
          type="password"
          name="password"
          value={users.password}
          placeholder="create a password"
          onChange={handelChandeInput}
          required
        />
        <input
          type="password"
          name="repassword"
          value={users.repassword}
          placeholder="retype password"
          onChange={handelChandeInput}
          required
        />
        <button
          onClick={handelClick}
          disabled={
            loding ||
            users.email == "" ||
            users.password == "" ||
            users.repassword == ""
          }
        >
          create account
        </button>
        <h4>
          Already have account ?{" "}
          <Link style={{ color: "blue" }} to="/login">
            login
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default SingupPage;
