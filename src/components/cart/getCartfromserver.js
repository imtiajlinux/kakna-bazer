import React, { useContext, useEffect, useState } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import CurrentUserContext from "../context/currentuserContext";

const firestorage = getFirestore();
export const Getcartdata = () => {
  const { currentUser } = useContext(CurrentUserContext);
  const [cartdata, setcartdata] = useState();

  const fatchdata = async () => {
    if (currentUser) {
      try {
        const cartref = doc(firestorage, "userCartitem", currentUser.uid);
        const snapcart = await getDoc(cartref);
        if (snapcart.exists()) {
          const data = snapcart.data();
          setcartdata(data);
        }
      } catch (error) {
        console.log("this error is from get cart func", error);
      }
    }
  };

  fatchdata();

  return cartdata;
};
