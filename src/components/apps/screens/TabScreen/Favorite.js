import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { AppContext } from '../../AppContext';
import { UserContext } from '../../../users/UserContext';

import ProgressDialog from 'react-native-progress-dialog';

const Favorite = (props) => {
  const { navigation } = props;
  const { user } = useContext(UserContext);
  const {
    onGetOrderDetailsByIdOrder, listFavorite, onAddToCart,
    setListFavorite, onGetProductById, countFavorite, setCountFavorite, setCountCart, countCart,
    onDeleteOrderDetail, onUpdateOrderDetail, total, setTotal, setListCart, listCart
  } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(false);

  //Lay danh sach san phma trong gio hang
  useEffect(() => {
    const getListfavorite = async () => {
      try {
        setIsLoading(true);
        const response = await onGetOrderDetailsByIdOrder(user.favorite);
        if (!response) return;
        //console.log("List favorite: ", response);
        for (let i = 0; i < response.length; i++) {
          const productId = response[i].idProduct;
          //console.log("Product id: ", productId);
          const product = await onGetProductById(productId);
          console.log("Product favorite: ", product);
          response[i].image = product.listImage[0];
          //console.log("Product image: ", product.listImage[0]); 
          response[i].name = product.name;
          response[i].price = product.price;
        }
        setListFavorite(response);
        setIsLoading(false);
      } catch (error) {
        console.log("Get list favorite error: ", error);
      }
    };
    getListfavorite();
  }, [countFavorite]);

  //Them tat ca san pham yeu thich vao gio hang
  const addAllToCart = async () => {
    try {
      if (listFavorite.length === 0) return;
      //Cap nhat idOder tu idFavorite sang idCart
      const listCartNew = listFavorite.map(item => {
        item.idOrder = user.cart;
        return item;
      });

      //Cap nhat lai danh sach gio hang
      if (listCart.length === 0) {
        setListCart(listCartNew);
        setTotal(listCartNew.reduce((a, b) => a + b.totalPrice, 0));
        //Cap nhat tren database
        for (let i = 0; i < listFavorite.length; i++) {
          await onAddToCart(listFavorite[i].totalPrice, listFavorite[i].amount, user.cart, listFavorite[i].idProduct);
        }
      } else {
        for (let i = 0; i < listFavorite.length; i++) {
          const itemToCart = listCart.find(item => item.idProduct === listFavorite[i].idProduct);
          if (itemToCart) {
            const newListCart = listCart.map(async item => {
              if (item.idProduct === itemToCart.idProduct) {
                item.amount = item.amount + 1;
                item.totalPrice = item.totalPrice + listFavorite[i].price;
                setTotal(total + listFavorite[i].price);
                await onUpdateOrderDetail(item._id, item.totalPrice, item.amount, user.cart, item.idProduct);
              }
              return item;
            });
            setListCart(newListCart);
            //Cap nhat tren database
            //await onUpdateOrderDetail(listFavorite[i]._id, listFavorite[i].totalPrice, listFavorite[i].amount, user.cart, listFavorite[i].idProduct);
          } else {
            setListCart([...listCart, listFavorite[i]]);
            setTotal(total + listFavorite[i].totalPrice);
            //Them moi san pham vao gio hang
            await onAddToCart(listFavorite[i].totalPrice, listFavorite[i].amount, user.cart, listFavorite[i].idProduct);
          }
        }
      }
      setCountCart(countCart + 1);
      navigation.navigate('Cart');
      //Xoa san pham khoi danh sach yeu thich va cap nhat lai database
      for (let i = 0; i < listFavorite.length; i++) {
        await deleteFavoriteItem(listFavorite[i]._id);
      }
      setCountFavorite(countFavorite + 1);
      setListFavorite([]);

      // let sum = 0;
      // for (let i = 0; i < listFavorite.length; i++) {
      //   //Cap nhat idOder tu idFavorite sang idCart
      //   const cartItem = await onUpdateOrderDetail(
      //     listFavorite[i]._id, listFavorite[i].totalPrice,
      //     listFavorite[i].amount, user.cart,
      //     listFavorite[i].idProduct
      //   );
      //   sum = sum + listFavorite[i].totalPrice;
      //   //console.log("Add to cart: ", response);
      // }
      // setCountCart(countCart + 1);
      // // setCountFavorite(countFavorite - 1);
      // setTotal(total + sum);
      // setListFavorite([]);
      // navigation.navigate('Cart');
    } catch (error) {
      console.log("Add to cart error: ", error);
    }
  };

  const deleteFavoriteItem = async (idOrderDetail) => {
    try {
      const response = await onDeleteOrderDetail(idOrderDetail);
      console.log("Delete favorite item: ", response);
    } catch (error) {
      console.log("Delete favorite item error: ", error);
    }
  };

  const addOneToCart = async (it) => {
    try {
      let check = false;
      for (let i = 0; i < listCart.length; i++) {
        if (listCart[i].idProduct === it.idProduct) {
          listCart[i].amount = listCart[i].amount + 1;
          listCart[i].totalPrice = listCart[i].totalPrice + it.price;
          setTotal(total + it.price);
          check = true;
          await onUpdateOrderDetail(listCart[i]._id, listCart[i].totalPrice, listCart[i].amount, user.cart, listCart[i].idProduct);
        }
      }
      //console.log("Check: ", check);

      if (check == false) {
        await onAddToCart(it.totalPrice, 1, user.cart, it.idProduct);
      }
      //Xoa san pham khoi danh sach yeu thich va cap nhat lai database
      await deleteFavoriteItem(it._id);
      setCountFavorite(countFavorite + 1);
      setCountCart(countCart + 1);
      //await onUpdateOrderDetail(itemToCart._id, itemToCart.totalPrice, itemToCart.amount, user.cart, itemToCart.idProduct);
    } catch (error) {
      console.log("Add 1 to cart fail: ", error);
    }
  };

  return (
    <View style={{ position: 'relative', flex: 1, backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Image source={require('../../../../assets/images/ic_search.png')} style={styles.Icon} />
        <Text style={styles.h1}>Favorites</Text>
        <Image source={require('../../../../assets/images/Cart.png')} style={styles.Icon} />
      </View>
      {
        listFavorite.length !== 0 ?
          <TouchableOpacity onPress={() => addAllToCart()} style={styles.button}>
            <Text style={styles.buttonText}>Add all to my cart</Text>
          </TouchableOpacity> :
          <View style={[styles.button, { backgroundColor: '#BBB' }]}>
            <Text style={styles.buttonText}>Add all to my cart</Text>
          </View>
      }

      <FlatList
        data={listFavorite}
        renderItem={({ item }) =>
          <Item
            addOneToCart={() => addOneToCart(item)}
            deleteFavoriteItem={() => deleteFavoriteItem(item._id)}
            name={item.name}
            image={item.image}
            price={item.price} />
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
      />

      <ProgressDialog
        visible={isLoading}
        title="Đang tải dữ liệu"
        message="Vui lòng đợi trong giây lát..."
      />

    </View>

  )
}

export default Favorite

const styles = StyleSheet.create({
  header: {
    marginBottom: 20,
    marginHorizontal: 20,
    marginTop: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Icon: {
    width: 24,
    height: 24,
  },
  h1: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
    flex: 8,
    textAlign: 'center',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 0,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',

  },
  imgLst: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },
  listItemName: {
    flex: 5,
    paddingStart: 20,
  },
  TextlstName: {
    fontWeight: 'normal',
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 5,
  },
  TextlstPrice: {
    fontWeight: 'bold',
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5,
  },
  listItemIcon: {
    flex: 1,
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    width: '80%',
    alignItems: 'center',
    bottom: 20,
    backgroundColor: '#242424',
    borderRadius: 10,
    paddingVertical: 15,
    zIndex: 1,
    alignSelf: 'center',

  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600'
  },

})

const Item = ({ name, price, image, deleteFavoriteItem, addOneToCart }) => {
  return (
    <View style={styles.listItem}>
      <Image source={{ uri: image }} style={styles.imgLst} />
      <View style={styles.listItemName}>
        <Text style={styles.TextlstName}>{name}</Text>
        <Text style={styles.TextlstPrice}>$ {price}</Text>
      </View>
      <View style={styles.listItemIcon}>
        <TouchableOpacity onPress={deleteFavoriteItem}>
          <View style={{ width: '100%', alignItems: 'center', marginVertical: 5 }}>
            <Image source={require('../../../../assets/images/del.png')} style={{ width: 24, height: 24 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={addOneToCart}>
          <View style={{ width: '100%', alignItems: 'center', marginVertical: 5 }}>
            <Image source={require('../../../../assets/images/shop.png')} style={{ width: 24, height: 24 }} />
          </View>
        </TouchableOpacity>
      </View>
    </View>

  );
};


const data = [
  { id: 1, name: 'Iphone 14', price: 50.00, img: 'Iphone14.png' },
  { id: 2, name: 'Iphone 13', price: 50.00, img: 'Iphone14.png' },
  { id: 3, name: 'Iphone 12', price: 40.00, img: 'Iphone14.png' },
  { id: 4, name: 'Iphone 11', price: 30.00, img: 'Iphone14.png' },
  { id: 5, name: 'Iphone 10', price: 20.00, img: 'Iphone14.png' },
  { id: 6, name: 'Iphone 9', price: 10.00, img: 'Iphone14.png' },
  { id: 7, name: 'Iphone 8', price: 510.00, img: 'Iphone14.png' },
  { id: 8, name: 'Iphone 7', price: 100.00, img: 'Iphone14.png' },
  { id: 9, name: 'Iphone XS', price: 50.00, img: 'Iphone14.png' },
]