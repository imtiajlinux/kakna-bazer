import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { getFirestore, getDoc, doc } from "firebase/firestore";

const CurrentUserinfocontext = createContext();

const Userinfoprovider = ({ children }) => {
  const [userinfo, setuserinfo] = useState();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docref = doc(getFirestore, "profileinfo", user.uid);
          const docsnap = await getDoc(docref);
          if (docsnap.exists()) {
            const data = docsnap.data();
            setuserinfo(data);
          } else {
            console.log("there is no data in userinfo");
          }
        } catch (error) {
          console.log("Error fetching user info:", error);
        }
      } else {
        // Handle the case when no user is signed in
        setuserinfo(null);
      }
    });

    // Unsubscribe from the auth state observer when the component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <CurrentUserinfocontext.Provider value={{ userinfo }}>
      {children}
    </CurrentUserinfocontext.Provider>
  );
};

export default CurrentUserinfocontext;
export { Userinfoprovider };
