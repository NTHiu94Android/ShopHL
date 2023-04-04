import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../AppContext';
import back from '../../../backEvent/back';
import { UserContext } from '../../../users/UserContext';

import Swiper from 'react-native-swiper';
import ProgressDialog from 'react-native-progress-dialog';


const ProductDetail = ({ route, navigation }) => {
  const { item } = route.params;
  const { onAddToCart, onAddToFavorite, setListCart,
    setListFavorite, setCountCart, countCart, listCmt, setListCmt,
    total, setTotal, onGetImagesByIdProduct, onGetImageByIdProductAndColor, onGetCommentsByIdProduct
  } = useContext(AppContext);
  const { user } = useContext(UserContext);
  const [count, setCount] = useState(1);
  const [listImage, setListImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  back(navigation);

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
      setCount(1);
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

  //Lay tat ca hinhanh cua san pham
  useEffect(() => {
    setIsLoading(false);
    const getImagesProduct = async () => {
      const images = await onGetImagesByIdProduct(item._id);
      //console.log("Images: ", images);
      let list = [];
      for (let i = 0; i < images.length; i++) {
        list.push(images[i].url);
      }
      setListImage(list);
      setIsLoading(true);
    }
    getImagesProduct();
  }, []);

  useEffect(() => {
    getListCmt();
  }, []);

  //Lay danh sach cmt
  const getListCmt = async () => {
    try{
      const cmts = await onGetCommentsByIdProduct(item._id);
      console.log("Get list cmt: ", cmts);

      let rate = 0;
      if(cmts.length > 0){
        for (let i = 0; i < cmts.length; i++) {
          rate += cmts[i].rate/cmts.length;
          cmts.rate = rate.toFixed(1);
        }
      }else{
        cmts.rate = 0;
      }
      setListCmt(cmts);
    }catch(error){
      console.log("Get list cmt error: ", error);
    }
  };

  //Lay anh theo mau
  // const getImageByColor = async (color) => {
  //   try {
  //     const image = await onGetImageByIdProductAndColor(item._id, color);
  //     //console.log("Image: ", image);
  //     //set image vao item
  //     item.listImage = [image];
  //   } catch (error) {
  //     console.log("Get image by color error: ", error);
  //   }
  // };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView style={{ flex: 1, position: 'relative', marginBottom: 80 }}>

        {/* Box product */}

        <View style={{ flex: 4, justifyContent: 'center', alignItems: 'center' }}>
          {
            isLoading ?
              <Swiper
                style={{ height: 350 }}
                autoplayTimeout={3}
                autoplay={true}
                loop={true}
                showsPagination={true}>
                {listImage.map((image, index) => {
                  return (
                    <Image
                      key={index}
                      style={{ width: '100%', height: 350 }}
                      resizeMode='stretch'
                      source={{
                        uri: image,
                      }} />
                  )
                })}
              </Swiper> : null
          }


          <View style={{ position: "absolute", top: 20, left: 10 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                resizeMode='cover'
                source={require('../../../../assets/images/ic_back.png')}
                style={{ width: 50 }}
              />
            </TouchableOpacity>

            <Image
              resizeMode='cover'
              source={require('../../../../assets/images/ic_color.png')}
              style={{ width: 40, height: 155 }}
            />
          </View>
        </View>

        {/* Box information */}
        <View style={{ flex: 6, paddingHorizontal: 12 }}>
          <Text style={{ color: 'black', fontWeight: '800', fontSize: 24, marginTop: 16, lineHeight: 30.47 }}>
            {item.name}</Text>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ color: 'black', fontWeight: '700', fontSize: 30, marginTop: 6, flex: 3 }}>
              $ {item.price}
            </Text>
            <View style={{ flexDirection: 'row', marginHorizontal: 20, marginTop: 6, flex: 1 }}>
              <TouchableOpacity style={{}} onPress={() => handleCountMinus()}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('../../../../assets/images/btn_minus.png')} />
              </TouchableOpacity>

              <View style={{ width: 25, height: 25, marginHorizontal: 10, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{}}>{count}</Text>
              </View>

              <TouchableOpacity onPress={() => handleCountPlus()}>
                <Image
                  style={{ width: 25, height: 25 }}
                  source={require('../../../../assets/images/btn_plus.png')}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 6, alignItems: 'center' }}>
            <Image
              style={{ width: 20, height: 20 }}
              source={require('../../../../assets/images/ic_star.png')}
            />
            <Text style={{ color: 'black', fontWeight: '700', fontSize: 18 }}>
              {listCmt.rate}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Review', {item})}>
              <Text style={{ color: '#808080', fontWeight: '600', fontSize: 14, marginLeft: 10, textDecorationLine: 'underline' }}>
                See all reviews
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={{ color: '#808080', fontWeight: '300', textAlign: 'justify', marginTop: 14, }}>
            {item.describer}
          </Text>
        </View>


      </ScrollView >


      {/* Box favorite + add to cart (absolute) */}
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

      <ProgressDialog
        visible={!isLoading}
        title="Đang tải dữ liệu"
        message="Vui lòng đợi trong giây lát..." />
    </View>
  )

}


export default ProductDetail

const styles = StyleSheet.create({
  viewButton: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 10,
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