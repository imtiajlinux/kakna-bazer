import React, { createContext, useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const CurrentUserContext = createContext();

const Authprovider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const ValedUser = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => {
      ValedUser();
    };
  }, []);
  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      {children}
    </CurrentUserContext.Provider>
  );
};
export default CurrentUserContext;
export { Authprovider };
