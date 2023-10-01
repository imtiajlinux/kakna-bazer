import React, { useContext } from "react";
import SingupPage from "../components/login & singup & profile page/singup page/singupPage";
import CurrentUserContext from "../components/context/currentuserContext";
import ProfilePage from "../components/login & singup & profile page/profile page/profilePage";

const Profile = () => {
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div style={{ marginTop: "140px" }}>
      {currentUser ? <ProfilePage /> : <SingupPage />}
    </div>
  );
};

export default Profile;
