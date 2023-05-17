import React, { createContext, useState } from 'react'
import { change_password, forgot_password, get_user_by_id, login, register, reset_password, update_profile } from './UserService';

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

  //Doi mat khau
  const onChangePassword = async (id, new_password, confirm_password) => {
    try {
      const response = await change_password(id, new_password, confirm_password);
      return response;
    } catch (error) {
      console.log("Change password Error: ", error);
    }
  };

  //Cap nhat thong tin ca nhan
  const onUpdateProfile = async (id, email, name, birthday, address, numberPhone, avatar) => {
    try {
      const response = await update_profile(id, email, name, birthday, address, numberPhone, avatar);
      return response;
    } catch (error) {
      console.log("Update profile Error: ", error);
    }
  };

  //get user by id
  const onGetUserById = async (id) => {
    try {
      const response = await get_user_by_id(id);
      return response.data;
    } catch (error) {
      console.log("Get user by id Error: ", error);
    }
  };


  return (
    <UserContext.Provider value={{ user, setUser, onLogin, onRegister, onForgotPassword, onResetPassword, onChangePassword, onUpdateProfile, onGetUserById }}>
      {children}
    </UserContext.Provider>
  )
}
