
import React, { createContext, useState } from "react";
import { Map } from 'immutable';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [email, setEmail] = useState("");
    const [cart, setCart] = useState(Map());

  return (
    <UserContext.Provider value={{ email, setEmail, cart, setCart }}>
      {children}
    </UserContext.Provider>
  );
};
