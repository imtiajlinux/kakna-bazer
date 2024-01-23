import React, { useContext } from "react";
import "./loginPageStyle.css";
import CurrentUserContext from "../../context/currentuserContext";
import Login from "./login";
import ProfilePage from "../profile page/profilePage";

const LoginPage = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div style={{ marginTop: "140px" }}>
      {currentUser ? <ProfilePage /> : <Login />}
    </div>
  );
};

export default LoginPage;
