import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useContext } from 'react'
import { AppContext } from '../../AppContext';
import back from '../../../backEvent/back';
import { UserContext } from '../../../users/UserContext';

const ProductDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const {onAddToCart, onAddToFavorite, setListCart, 
    setListFavorite, setCountCart, countCart,
    total, setTotal
  } = useContext(AppContext);
  const {user} = useContext(UserContext);
  const [count, setCount] = useState(1);
  
  back(navigation);
  // console.log("Detail item: ");
  // console.log(item);

  const handleCountPlus = () => {
    setCount(count + 1);
  };
  const handleCountMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  //Them san pham vao gio hang
  const addToCart = async () => {
    try {
      const totalPrice = item.price * count;
      const amount = count;
      const idOrder = user.cart;
      const idProduct = item._id;
      const order_detail = await onAddToCart(totalPrice, amount, idOrder, idProduct);
      console.log("Add to cart: ", order_detail);
      setListCart(current => [...current, order_detail]);
      setCountCart(countCart + 1);
      console.log("Total: ", total);
      console.log("Total price: ", totalPrice + total);
      setTotal(total + totalPrice);
      navigation.navigate('Cart');
    } catch (error) {
      console.log("Add to cart error: ", error);
    }
  };

  //Them san pham vao favorite
  const addToFavorite = async () => {
    try {
      const totalPrice = item.price;
      const amount = 1;
      const idOrder = user.favorite;
      const idProduct = item._id;
      const order_detail = await onAddToFavorite(totalPrice, amount, idOrder, idProduct);
      console.log("Add to favorite: ", order_detail);
      setListFavorite(current => [...current, order_detail]);
      navigation.navigate('Favorite');
    } catch (error) {
      console.log("Add to favorite error: ", error);
    }
  };

  //console.log("List favorite update: ", listFavorite);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1, position: 'relative' }}>
        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center', paddingTop: 50, }}>
          <Image
            style={{ width: '100%', height: 350 }}
            resizeMode='stretch'
            source={{
              uri: item.listImage[0],
            }} />
          <View style={{ position: "absolute", top: 0, left: 0 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                resizeMode='cover'
                source={require('../../../../assets/images/ic_back.png')}
                style={{ width: 35, marginTop: 40, marginLeft: 27 }}
              />
            </TouchableOpacity>

            <Image
              resizeMode='cover'
              source={require('../../../../assets/images/ic_color.png')}
              style={{ width: 35, height: 149, marginLeft: 27 }}
            />
          </View>
        </View>

        <View style={{ flex: 6, paddingTop: 15, paddingHorizontal: 12 }}>
          <Text style={{ color: 'black', fontWeight: '800', fontSize: 24, marginTop: 16, lineHeight: 30.47 }}>
            {item.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'black', fontWeight: '700', fontSize: 30, lineHeight: 40.92, marginTop: 10, flex: 3 }}>
              {item.price}
            </Text>
            <View style={{ flexDirection: 'row', margin: 20, flex: 1 }}>
              <TouchableOpacity style={{}} onPress={() => handleCountPlus()}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('../../../../assets/images/btn_plus.png')} />
              </TouchableOpacity>

              <View style={{ width: 25, height: 25, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{}}>{count}</Text>
              </View>

              <TouchableOpacity onPress={() => handleCountMinus()}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('../../../../assets/images/btn_minus.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../../../../assets/images/ic_star.png')}
            />
            <Text style={{ color: 'black', fontWeight: '700', fontSize: 18, lineHeight: 24.55, marginLeft: 25 }}>
              {item.reviews}</Text>
            <Text style={{ color: '#808080', fontWeight: '600', fontSize: 14, lineHeight: 24.55, marginLeft: 25 }}>
              {item.status_review}
            </Text>
          </View>
          <Text style={{ color: '#808080', fontWeight: '300', textAlign: 'justify', marginTop: 14, }}>
            {item.describer}
          </Text>
        </View>
      </ScrollView >
      {/* ---------------------- */}
      <View style={styles.viewButton}>
        <View style={{ marginRight: 15 }}>
          <TouchableOpacity onPress={() => addToFavorite()} style={styles.button1}>
            <Image style={{ width: 24, height: 24 }}
              source={require('../../../../assets/images/ic_fvr.png')} />
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <TouchableOpacity onPress={() => addToCart()} style={styles.button2}>
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>
              Add to cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )

}


export default ProductDetail

const styles = StyleSheet.create({
  viewButton: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 30,
    borderRadius: 10,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  button2: {
    backgroundColor: '#000', height: 60, width: 250,
    borderRadius: 8, flexDirection: 'column', justifyContent: 'center'
  },
  button1: {
    backgroundColor: '#F0F0F0', height: 60, width: 60,
    borderRadius: 8, justifyContent: 'center', alignItems: 'center'
  }
})