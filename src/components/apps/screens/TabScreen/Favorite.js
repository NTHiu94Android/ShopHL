import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'

import { AppContext } from '../../AppContext';
import { UserContext } from '../../../users/UserContext';

const Favorite = (props) => {
  const { navigation } = props;
  const { user } = useContext(UserContext);
  const {
    onGetOrderDetailsByIdOrder, listFavorite,
    setListFavorite, onGetProductById, countFavorite,
    onDeleteOrderDetail
  } = useContext(AppContext);
  //Lay danh sach san phma trong gio hang
  useEffect(() => {
    const getListfavorite = async () => {
      try {
        const response = await onGetOrderDetailsByIdOrder(user.favorite);
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
      } catch (error) {
        console.log("Get list favorite error: ", error);
      }
    };
    getListfavorite();
  }, [countFavorite]);

  const addAllToCart = async () => {
    // try {
    //   for (let i = 0; i < listFavorite.length; i++) {
    //     const response = await onAddToCart(listFavorite[i].idProduct, 1);
    //     console.log("Add to cart: ", response);
    //   }
    // } catch (error) {
    //   console.log("Add to cart error: ", error);
    // }
  };

  const deleteFavoriteItem = async (idOrderDetail) => {
    try {
      const response = await onDeleteOrderDetail(idOrderDetail);
      console.log("Delete favorite item: ", response);
    } catch (error) {
      console.log("Delete favorite item error: ", error);
    }
  };

  return (
    <View style={{ position: 'relative', flex: 1, backgroundColor: 'white' }}>
      <View style={styles.header}>
        <Image source={require('../../../../assets/images/ic_search.png')} style={styles.Icon} />
        <Text style={styles.h1}>Favorites</Text>
        <Image source={require('../../../../assets/images/Cart.png')} style={styles.Icon} />
      </View>
      <TouchableOpacity onPress={() => addAllToCart()} style={styles.button}>
        <Text style={styles.buttonText}>Add all to my cart</Text>
      </TouchableOpacity>
      <FlatList
        data={listFavorite}
        renderItem={({ item }) =>
          <Item
            name={item.name}
            image={item.image}
            price={item.price} />
        }
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item._id}
      />

    </View>

  )
}

export default Favorite

const styles = StyleSheet.create({
  header: {
    margin: 20,
    marginTop: "15%",
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
    padding: 10,
    paddingVertical: 20,
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
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 5,
  },
  TextlstPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 5,
  },
  listItemIcon: {
    flex: 1,
    justifyContent: 'space-between',
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

const Item = ({ name, price, image }) => {
  return (
    <View style={styles.listItem}>
      <Image source={{ uri: image }} style={styles.imgLst} />
      <View style={styles.listItemName}>
        <Text style={styles.TextlstName}>{name}</Text>
        <Text style={styles.TextlstPrice}>$ {price}</Text>
      </View>
      <View style={styles.listItemIcon}>
        <TouchableOpacity>
          <View style={{ alignSelf: 'flex-start', width: '100%', alignItems: 'center' }}>
            <Image source={require('../../../../assets/images/del.png')} style={{ width: 30, height: 30 }} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={{ alignSelf: 'flex-start', width: '100%', alignItems: 'center' }}>
            <Image source={require('../../../../assets/images/shop.png')} style={{ width: 30, height: 30 }} />
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