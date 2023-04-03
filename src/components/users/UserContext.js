import React, { createContext, useState } from 'react'
import { forgot_password, login, register, reset_password } from './UserService';

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

  //forgot password
  const onForgotPassword = async (email) => {
    try {
      const response = await forgot_password(email);
      return response;
    } catch (error) {
      console.log("Forgot password Error: ", error);
    }
  };

  //reset password
  const onResetPassword = async (token, password, confirm_password) => {
    try {
      const response = await reset_password(token, password, confirm_password);
      return response;
    } catch (error) {
      console.log("Reset password Error: ", error);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, onLogin, onRegister, onForgotPassword, onResetPassword }}>
      {children}
    </UserContext.Provider>
  )
}
