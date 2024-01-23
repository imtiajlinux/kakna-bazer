import React, { useContext } from "react";
import "./profilePageStyle.css";
import { signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import CurrentUserContext from "../../context/currentuserContext";
import CurrentUserinfocontext from "../../context/getUserInfocontext";
import { auth } from "../../../firebaseConfig";
import { cartContext } from "../../context/cartContext";

const ProfilePage = () => {
  const { setcart } = useContext(cartContext);
  const { userinfo, userCart } = useContext(CurrentUserinfocontext);
  const { village, street, city, country, dateofbirth, phone } =
    userinfo?.profileinfo || {};
  const { currentUser } = useContext(CurrentUserContext);
  const logout = async () => {
    try {
      await signOut(auth);
      setcart([]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="profilepage-container">
      <img
        className="profilepage-profilephoto"
        src={
          currentUser?.photoURL
            ? currentUser.photoURL
            : "https://static.vecteezy.com/system/resources/previews/000/439/863/large_2x/vector-users-icon.jpg"
        }
        alt=""
      />
      <h2>{currentUser?.displayName}</h2>

      <hr />
      <div className="profilepage-content">
        <div className="info">
          <p>personal info</p>
          <hr />
          <h3>phone no : {phone}</h3>
          <h3> date of birth : {dateofbirth}</h3>
          <h3> email : {currentUser.email}</h3>
        </div>
        <div className="info">
          <p>address</p>
          <hr />
          <h3>{country}</h3>
          <h3>{city}</h3>
          <h3>{village}</h3>
          <h3>{street}</h3>
        </div>
      </div>
      <div className="profilepage-btns">
        <button onClick={logout}>log out</button>

        <Link to="/updateProfie">
          <button>upgrade profile </button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePage;
