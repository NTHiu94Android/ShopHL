import React, { createContext, useState } from 'react'
import { login, register } from './UserService';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);

  const onRegister = async (email, password, name, birthday, address, numberPhone, avatar) => {
    try {
      const response = await register(email, password, name, birthday, address, numberPhone, avatar);
      console.log("OnRegister Response: ", response.data.user);
      return response.data.user;
    } catch (error) {
      console.log("OnRegister Error: ", error);
    }
  };

  const onLogin = async (email, password) => {
    try {
      const respone = await login(email, password);
      //console.log("OnLogin Response: ", respone);
      return respone;
    } catch (error) {
      console.log("OnLogin Error: ", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, onLogin, onRegister }}>
      {children}
    </UserContext.Provider>
  )
}
