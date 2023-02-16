import React from "react";
import { useState } from "react";
import axios from "axios";
export const UserContext = React.createContext(null);

const UserContextProvider = ({ children }) => {
  const [token , settoken] = useState(localStorage.getItem('token') || null)
  const [currentUser, setcurrentUser] = useState(localStorage.getItem('currentUser') || null)

  return (
    <UserContext.Provider
      value={{ token,currentUser, settoken, setcurrentUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
