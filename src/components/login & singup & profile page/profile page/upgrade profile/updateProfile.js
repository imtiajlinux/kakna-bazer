import "./updateProfileStyle.css";
import React, { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../../../context/currentuserContext";
import { Upload, updateinfo } from "../upgrade&&upload";
import handelChange from "../../singup page/handelchange";
import CurrentUserinfocontext from "../../../context/getUserInfocontext";

const UpdateProfile = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [photourl, setphotourl] = useState(
    "https://static.vecteezy.com/system/resources/previews/000/439/863/large_2x/vector-users-icon.jpg"
  );
  const [photo, setphoto] = useState("");
  const [username, setusername] = useState();
  const [loding, setloding] = useState();
  const { userinfo } = useContext(CurrentUserinfocontext);
  const { village, street, city, country, dateofbirth, phone } =
    userinfo?.profileinfo || {};
  const [profileinfo, setprofileinfo] = useState({
    dateofbirth: "",
    phone: "",
    country: "",
    city: "",
    village: "",
    street: "",
  });

  //for take profile photo from input and set it on photo useState
  const handelphotochange = (e) => {
    if (e.target.files[0]) {
      setphoto(e.target.files[0]);
    }
  };

  //for uploding profile photo
  const uploadphoto = (e) => {
    e.preventDefault();
    Upload(photo, currentUser, setloding);
  };

  // for set proflie pic on photourl state
  useEffect(() => {
    if (currentUser?.photoURL) {
      setphotourl(currentUser.photoURL);
    }
  }, [currentUser]);

  //for handel change of prolie infos inputs
  //and set the value to profileinfo state
  const handelChangeinfo = (e) => {
    handelChange(profileinfo, setprofileinfo, e);
  };

  //updating profile info(country, phone, city , village) to firebase storage
  const updateprofileinfo = (e) => {
    e.preventDefault();
    updateinfo(currentUser, username, profileinfo, setloding);
  };
  console.log(profileinfo.city);
  return (
    <div className="updateProfile-container">
      <form action="#">
        <img src={photourl} alt="" />

        <input type="file" onChange={handelphotochange} />
        <button onClick={uploadphoto} disabled={loding || photo === ""}>
          upload photo
        </button>
      </form>
      <hr />
      <form action="#">
        <h4>name : {currentUser?.displayName}</h4>
        <input
          type="text"
          placeholder="username"
          onChange={(e) => {
            setusername(e.target.value);
          }}
        />

        <p>date of birth :{dateofbirth}</p>
        <input
          type="date"
          placeholder="date of birth"
          name="dateofbirth"
          value={profileinfo.dateofbirth}
          onChange={handelChangeinfo}
        />

        <p>mobile no :{phone}</p>
        <input
          type="tel"
          placeholder=" phone number"
          name="phone"
          value={profileinfo.phone}
          onChange={handelChangeinfo}
        />
        <p>country :{country}</p>
        <input
          type="text"
          placeholder="country"
          name="country"
          value={profileinfo.country}
          onChange={handelChangeinfo}
        />
        <p>city :{city}</p>
        <input
          type="text"
          placeholder="city"
          name="city"
          value={profileinfo.city}
          onChange={handelChangeinfo}
        />
        <p>village :{village}</p>
        <input
          type="text"
          placeholder="village"
          name="village"
          value={profileinfo.village}
          onChange={handelChangeinfo}
        />
        <p>address in details :{street}</p>
        <input
          type="text"
          placeholder="give your address in details"
          name="street"
          value={profileinfo.street}
          onChange={handelChangeinfo}
        />

        <button
          onClick={updateprofileinfo}
          disabled={
            loding ||
            username === "" ||
            profileinfo.city === "" ||
            profileinfo.country === "" ||
            profileinfo.dateofbirth === "" ||
            profileinfo.phone === "" ||
            profileinfo.street === "" ||
            profileinfo.village === ""
          }
        >
          upgrade profile info
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
