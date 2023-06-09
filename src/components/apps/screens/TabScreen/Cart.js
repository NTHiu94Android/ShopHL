import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, alert } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { AppContext } from '../../AppContext';
import { UserContext } from '../../../users/UserContext';

import ProgressDialog from 'react-native-progress-dialog';

const Cart = (props) => {
  const { navigation } = props;
  const { user } = useContext(UserContext);
  const {
    onGetOrderDetailsByIdOrder, listCart, setListCart, onGetProductById,
    countCart, onUpdateOrderDetail, onDeleteOrderDetail,
    total, setTotal
  } = useContext(AppContext);

  const [isLoading, setIsLoading] = useState(false);


  //Lay danh sach san phma trong gio hang
  useEffect(() => {
    const getListCart = async () => {
      try {
        setIsLoading(true);
        let sum = 0;
        const response = await onGetOrderDetailsByIdOrder(user.cart);
        if (!response) return;
        //console.log("List cart: ", response);
        for (let i = 0; i < response.length; i++) {
          const productId = response[i].idProduct;
          //console.log("Product id: ", productId);
          const product = await onGetProductById(productId);
          //console.log(product);
          response[i].imageurl = product.listImage[0];
          //console.log("Product image: ", product.listImage[0]);
          response[i].prodName = product.name;
          response[i].totalPrice = product.price * response[i].amount;
          response[i].price = product.price;
          sum += response[i].totalPrice;
        }
        setListCart(response);
        setTotal(sum);
        setIsLoading(false);

      } catch (error) {
        console.log("Get list cart error: ", error);
      }
    };
    getListCart();
  }, [countCart]);

  // useEffect(() => {
  //   //updateItemCart
  // }, [amount]);

  const updateItemCart = async (_idOrderDetail, _totalPrice, _amount, _idOrder, _idProduct) => {
    try {
      const product = await onGetProductById(_idProduct);
      if (product.amount < _amount) {
        alert("Số lượng sản phẩm trong kho không đủ!");
        return;
      }
      const response = await onUpdateOrderDetail(_idOrderDetail, _totalPrice, _amount, _idOrder, _idProduct);
      console.log("Update item cart: ", response.amount + " ... " + response.totalPrice);
      //setCountCart(countCart + 1);
    } catch (error) {
      console.log("Update item cart error: ", error);
    }
  };

  const updateItem = (id, newValue) => {
    //Cap nhat tren giao dien 
    let sum = 0;
    const newItems2 = listCart.map(item => {
      if (item._id === id) {
        item.amount = newValue;
        item.totalPrice = item.price * newValue;
      }
      sum += item.totalPrice;
      return item;
    });
    setTotal(sum);
    setListCart(newItems2);

    //Cap nhat tren server mongodb
    listCart.map(item => {
      if (item._id === id) {
        const itemNew = { ...item, amount: newValue, totalPrice: item.price * newValue };
        console.log(">>>>>>>>>>>>TotalPrice: ", itemNew.price * itemNew.amount);
        updateItemCart(itemNew._id, itemNew.totalPrice, itemNew.amount, itemNew.idOrder, itemNew.idProduct);
      }
      return item;
    });
  };

  const deleteItem = async (id) => {
    const newItems = listCart.filter(item => item._id !== id);
    console.log("Delete item cart: ", newItems);
    if (newItems.length === 0) {
      setTotal(0);
    } else {
      let sum = 0;
      newItems.map(item => {
        sum += item.totalPrice;
        return item;
      });
      setTotal(sum);
    }
    setListCart(newItems);
    //setTotal(total - listCart.find(item => item._id === id).totalPrice);
    const res = await onDeleteOrderDetail(id);
    console.log("Delete item cart: ", res);
  };


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', marginTop: 30, paddingHorizontal: 20, backgroundColor: 'white' }}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '800', marginTop: 18, marginBottom: 20 }}>My cart</Text>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={listCart}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <Item
                deleteItem={() => deleteItem(item._id)}
                plus={() => updateItem(item._id, item.amount + 1)}
                minus={() => updateItem(item._id, item.amount > 1 ? item.amount - 1 : 1)}
                item={item} />
            }
            keyExtractor={item => item._id}
          />
        </SafeAreaView>

        {
          listCart.length !== 0 ?
            <View style={{ height: 150, justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffff', borderRadius: 10, paddingStart: 11 }}>
                <TextInput>Enter your promo code</TextInput>
                <AntDesign name="rightsquare" size={44} color="black" />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 20 }}>Total:</Text>
                <Text style={{ fontSize: 20 }}>$ {total}</Text>
              </View>

              <TouchableOpacity onPress={() => navigation.navigate("CheckOut")} style={{ backgroundColor: '#000', height: 60, borderRadius: 8, flexDirection: 'column', justifyContent: 'center' }}>
                <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Check out</Text>
                {/* Bấm đây nhảy qua check out */}
              </TouchableOpacity>
            </View> :
            <View style={{ backgroundColor: '#BBB', height: 60, borderRadius: 8, flexDirection: 'column', justifyContent: 'center' }}>
              <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Check out</Text>
            </View>
        }
      </View>
      <ProgressDialog
        visible={isLoading}
        title="Đang tải dữ liệu"
        message="Vui lòng đợi trong giây lát..."
      />
    </View>
  )
}

export default Cart

const Item = ({ item, plus, minus, deleteItem }) => (

  <View style={styles.item}>
    <View style={{ flexDirection: 'row' }}>
      <Image source={{ uri: item.imageurl }} style={styles.image} />
      <View style={{ justifyContent: 'space-between', paddingVertical: 5, paddingStart: 10 }}>
        <View>
          <Text style={{ fontSize: 16, fontWeight: '800' }}>{item.prodName}</Text>
          <Text style={{ fontSize: 14, fontWeight: '600' }}>$ {item.totalPrice}</Text>
        </View>
        <View style={styles.qualityRange}>
          <TouchableOpacity onPress={plus}>
            <Entypo name="squared-plus" size={30} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 18 }}>{item.amount}</Text>
          <TouchableOpacity onPress={minus}>
            <Entypo name="squared-minus" size={30} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
    <TouchableOpacity onPress={deleteItem}>
      <AntDesign name="closecircleo" size={20} color="black" />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingBottom: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray',

  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  qualityRange:
  {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    prodName: 'Iphone 14',
    price: '50.00',
    quality: '01',
    imageurl: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    prodName: 'Iphone 14',
    price: '50.00',
    quality: '01',
    imageurl: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    prodName: 'Second Item',
    price: '50.00',
    quality: '01',
    imageurl: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    prodName: 'Second Item',
    price: '50.00',
    quality: '01',
    imageurl: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    prodName: 'Third Item',
    price: '50.00',
    quality: '01',
    imageurl: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg',
  },
];