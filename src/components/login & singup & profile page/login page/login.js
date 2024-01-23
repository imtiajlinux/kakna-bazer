import React, { useState } from "react";
import "./loginPageStyle.css";
import { Link } from "react-router-dom";
import handelChange from "../singup page/handelchange";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebaseConfig";
import { cartContext } from "../../context/cartContext";

const Login = () => {
  const [loding, setloding] = useState();
  const [error, seterror] = useState();
  const [user, setuser] = useState({ email: "", password: "" });

  const handelChandeInput = (e) => {
    handelChange(user, setuser, e);
  };

  const login = async (e) => {
    e.preventDefault();
    seterror("");
    setloding(true);

    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      alert("log in successfully");
    } catch (error) {
      seterror(error.message.substring(15));
    }
    setloding(false);
  };

  return (
    <div className="loginPage-container">
      <form action="#">
        <h2 className="error">{error}</h2>
        <h2 style={{ color: "blue", fontSize: "2rem" }}>
          Log <span style={{ color: "royalblue" }}>In</span>{" "}
        </h2>
        <input
          type="email"
          placeholder="Enter you'r email..."
          name="email"
          value={user.email}
          onChange={handelChandeInput}
          required
        />
        <input
          type="password"
          placeholder="password..."
          name="password"
          value={user.password}
          onChange={handelChandeInput}
          required
        />
        <button
          type="submit"
          onClick={login}
          disabled={loding || user.email === "" || user.password === ""}
        >
          log in
        </button>

        <h4>
          don't have account ?{" "}
          <Link style={{ color: "blue" }} to="/profile">
            sing up
          </Link>
        </h4>
      </form>
    </div>
  );
};

export default Login;
