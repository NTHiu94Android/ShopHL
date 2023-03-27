import React, { createContext, useContext, useState } from 'react'
import { 
  addOrder, addToCart, delete_order_detail, getProducts, get_order_by_id, 
  get_order_by_idUser, get_order_by_idUser_and_status, 
  get_order_details_by_idOrder, get_product_by_id, update_order_detail 
} from './AppService';
import { UserContext } from '../users/UserContext';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  const { children } = props;
  const {user} = useContext(UserContext);
  const [listCart, setListCart] = useState([]);
  const [listFavorite, setListFavorite] = useState([]);
  const [listOrder, setListOrder] = useState([]);
  const [listProcessing, setListProcessing] = useState([]);
  const [listDelivered, setListDelivered] = useState([]);
  const [listCanceled, setListCanceled] = useState([]);
  const [countCart, setCountCart] = useState(0);
  const [countFavorite, setCountFavorite] = useState(0);
  const [total, setTotal] = useState(0);
  const [ship, setShip] = useState(5);

  //-----------------------PRODUCT-------------------------
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
      //console.log("OnGetProductById Response: ", product.data);
      return product.data;
    } catch (error) {
      console.log("OnGetProductById Error: ", error);
    }
  };

  //Lay danh sach san pham theo brand
  const onGetProductsByBrand = async (brand) => {
    try {
      const products = await getProducts();
      const productsByBrand = products.data.filter((product) => product.brand === brand);
      //console.log("OnGetProductsByBrand Response: ", productsByBrand);
      return productsByBrand;
    } catch (error) {
      console.log("OnGetProductsByBrand Error: ", error);
    }
  };

  //------------------------------ORDER DETAIL------------------------------
  //Them san pham vao gio hang
  const onAddToCart = async (totalPrice, amount, idOrder, idProduct) => {
    try {
      const respone = await addToCart(totalPrice, amount, idOrder, idProduct);
      //console.log("Add to cart: ", respone.data);
      //setCountCart(countCart + 1);
      return respone.data;
    } catch (error) {
      console.log("Add to cart error: ", error);
    }
  };

  //Them san pham vao yeu thich
  const onAddToFavorite = async (totalPrice, amount, idOrder, idProduct) => {
    try {
      const respone = await addToCart(totalPrice, amount, idOrder, idProduct);
      //console.log("Add to favorite: ", respone.data);
      setCountFavorite(countFavorite + 1);
      return respone.data;
    } catch (error) {
      console.log("Add to cart error: ", error);
    }
  };

  //Xoa san pham khoi gio hang/yeu thich
  const onDeleteOrderDetail = async (idOrderDetail) => {
    try {
      const respone = await delete_order_detail(idOrderDetail);
      //console.log("Delete cart: ", respone.data);
      //setCountCart(countCart - 1);
      setCountFavorite(countFavorite - 1);
      return respone.data;
    } catch (error) {
      console.log("Delete cart error: ", error);
    }
  };

  //Cap nhat san pham trong gio hang/yeu thich
  const onUpdateOrderDetail = async (_idOrderDetail, _totalPrice, _amount, _idOrder, _idProduct) => {
    try {
      const respone = await update_order_detail(_idOrderDetail, _totalPrice, _amount, _idOrder, _idProduct);
      //console.log("Update cart: ", respone.data);
      return respone.data;
    } catch (error) {
      console.log("Update cart error: ", error);
    }
  };

   //Lay danh sach chi tiet don hang theo idOrder
   const onGetOrderDetailsByIdOrder = async (idOrder) => {
    try {
      const orderDetail = await get_order_details_by_idOrder(idOrder);
      //console.log("OnGetOrderDetailByIdOrder Response: ", orderDetail.data);
      return orderDetail.data;
    } catch (error) {
      console.log("OnGetOrderDetailByIdOrder Error: ", error);
    }
  };


  //------------------------------ORDER------------------------------
  //Them don hang
  const onAddOrder = async (orderDate, totalPrice, status, quantity, idUser) => {
    try {
      const respone = await addOrder(orderDate, totalPrice, status, quantity, idUser);
      console.log("Add order: ", respone.data);
      return respone.data;
    } catch (error) {
      console.log("Add order error: ", error);
    }
  };

  //Lay danh sach don hang theo idUser
  const onGetOrdersByIdUser = async () => {
    try {
      const order = await get_order_by_idUser(user._id);
      console.log("OnGetOrder Response: ", order.data);
      return order.data;
    } catch (error) {
      console.log("OnGetOrder Error: ", error);
    }
  };

  //Lay danh sach don hang theo id
  const onGetOrderById = async (idOrder) => {
    try {
      const order = await get_order_by_id(idOrder);
      console.log("OnGetOrderById Response: ", order.data);
      return order.data;
    } catch (error) {
      console.log("OnGetOrderById Error: ", error);
    }
  };

  //Lay don hang theo idUser va status
  const onGetOrderByIdUserAndStatus = async (idUser, status) => {
    try {
      const order = await get_order_by_idUser_and_status(idUser, status);
      console.log("OnGetOrderByIdUserAndStatus Response: ", order.data);
      return order.data;
    } catch (error) {
      console.log("OnGetOrderByIdUserAndStatus Error: ", error);
    }
  };

  return (
    <AppContext.Provider value={{
      onGetProducts, onAddToCart, onAddToFavorite, onAddOrder,
      listCart, setListCart, onGetOrdersByIdUser, onGetOrderById,
      onGetOrderDetailsByIdOrder, onGetProductById, countCart, setCountCart,
      countFavorite, setCountFavorite, onGetProductsByBrand,
      listFavorite, setListFavorite, onDeleteOrderDetail, onUpdateOrderDetail,
      total, setTotal, ship, setShip, listOrder, setListOrder, onGetOrderByIdUserAndStatus,
      listProcessing, setListProcessing
    }}>
      {children}
    </AppContext.Provider>
  )
}
