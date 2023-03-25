import React, { createContext, useContext, useState } from 'react'
import { 
  addOrder, addToCart, getProducts, get_order_by_id, get_order_by_idUser_and_status, 
  get_order_details_by_idOrder, get_product_by_id 
} from './AppService';
import { UserContext } from '../users/UserContext';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const { children } = props;
  const {user} = useContext(UserContext);
  const [listCart, setListCart] = useState([]);
  const [countCart, setCountCart] = useState(0);

  //Lay danh sach san pham
  const onGetProducts = async () => {
    try {
      const products = await getProducts();
      //console.log("OnGetProducts Response: ", products.data);
      return products.data;
    } catch (error) {
      console.log("OnGetProducts Error: ", error);
    }
  };

  //Lay san pham theo id
  const onGetProductById = async (idProduct) => {
    try {
      const product = await get_product_by_id(idProduct);
      console.log("OnGetProductById Response: ", product.data);
      return product.data;
    } catch (error) {
      console.log("OnGetProductById Error: ", error);
    }
  };

  //Them san pham vao gio hang
  const onAddToCart = async (totalPrice, amount, idOrder, idProduct) => {
    try {
      const respone = await addToCart(totalPrice, amount, idOrder, idProduct);
      console.log("Add to cart: ", respone.data);
      setCountCart(countCart + 1);
      return respone.data;
    } catch (error) {
      console.log("Add to cart error: ", error);
    }
  };

  //Them don hang
  const onAddOrder = async (orderDate, totalPrice, status, idUser) => {
    try {
      const respone = await addOrder(orderDate, totalPrice, status, idUser);
      console.log("Add order: ", respone.data);
      return respone.data;
    } catch (error) {
      console.log("Add order error: ", error);
    }
  };

  const onGetOrdersByIdUser = async () => {
    try {
      const order = await get_order_by_idUser(user._id);
      console.log("OnGetOrder Response: ", order.data);
      return order.data;
    } catch (error) {
      console.log("OnGetOrder Error: ", error);
    }
  };

  const onGetOrderById = async (idOrder) => {
    try {
      const order = await get_order_by_id(idOrder);
      console.log("OnGetOrderById Response: ", order.data);
      return order.data;
    } catch (error) {
      console.log("OnGetOrderById Error: ", error);
    }
  };

  const onGetOrderDetailsByIdOrder = async (idOrder) => {
    try {
      const orderDetail = await get_order_details_by_idOrder(idOrder);
      console.log("OnGetOrderDetailByIdOrder Response: ", orderDetail.data);
      return orderDetail.data;
    } catch (error) {
      console.log("OnGetOrderDetailByIdOrder Error: ", error);
    }
  };

  return (
    <AppContext.Provider value={{
      onGetProducts, onAddToCart, onAddOrder,
      listCart, setListCart, onGetOrdersByIdUser, onGetOrderById,
      onGetOrderDetailsByIdOrder, onGetProductById, countCart, setCountCart
    }}>
      {children}
    </AppContext.Provider>
  )
}
