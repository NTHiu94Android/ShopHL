import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import back from '../../../backEvent/back';
import { UserContext } from '../../../users/UserContext';
import { AppContext } from '../../AppContext';

const CheckOut = (props) => {
  const { navigation } = props;
  const { user } = useContext(UserContext);
  const { total, setTotal, ship, onAddOrder, onUpdateOrderDetail, listCart, setListCart, setListProcessing } = useContext(AppContext);
  console.log(">>>>>>>", total);
  back(navigation);

  const gotoSuccess = async () => {
    const totalPrice = total + ship;
    const idUser = user._id;
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const orderDate = `${day}/${month}/${year}`;
    const status = "Processing";
    let qtt = 0;
    for (let i = 0; i < listCart.length; i++) {
      qtt += listCart[i].amount;
    }
    const quantity = qtt;
    const order = await onAddOrder(orderDate, totalPrice, status, quantity, idUser);
    let listOrderDetail = [];
    for (let i = 0; i < listCart.length; i++) {
      let item = await onUpdateOrderDetail(
        listCart[i]._id, listCart[i].totalPrice,
        listCart[i].amount, order._id,
        listCart[i].idProduct
      );
      listOrderDetail.push(item);
    }

    setListCart([]);
    setTotal(0);
    setListProcessing(listOrderDetail);
    console.log("Add order: ", order);
    navigation.navigate("Success");
  };

  return (

    <View style={{ flex: 1, paddingTop: 50, paddingHorizontal: 20, justifyContent: 'space-between', backgroundColor: 'white' }}>

      {/* Bấm đây nhảy qua cart () */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Entypo name="chevron-thin-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold', flex: 1, textAlign: 'center' }}>Check out</Text>
      </View>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Address */}
        <View style={{ justifyContent: 'space-between', marginTop: 30 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <Text style={{ fontSize: 18, fontWeight: '300' }}>Shipping Address</Text>
            <AntDesign name="edit" size={24} color="black" />
          </View>
          <View style={[styles.box, { backgroundColor: '#fff', borderRadius: 8, paddingVertical: 10, }]}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', borderBottomWidth: 0.5, borderBottomColor: 'grey', padding: 10 }}>{user.name}</Text>
            <Text style={{ fontSize: 14, lineHeight: 25, padding: 10 }}>{user.address}</Text>
          </View>
        </View>

        {/* Delivery method */}
        <View style={{ justifyContent: 'space-between', marginTop: 30 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, fontWeight: '300' }}>Delivery method</Text>
            <AntDesign name="edit" size={24} color="black" />
          </View>
          <View style={[styles.box, { borderRadius: 8, paddingVertical: 10, flexDirection: 'row', }]}>
            <Image source={{ uri: 'https://theme.hstatic.net/200000472237/1000829412/14/logo.png?v=584' }}
              style={{ height: 20, width: 90, margin: 10 }} />
            <Text style={{ margin: 10, fontSize: 14, fontWeight: 'bold' }}>Fast (2-3 days)</Text>
          </View>
        </View>

        {/* Total price */}
        <View style={[styles.box, { padding: 10, borderRadius: 8, height: 125, justifyContent: 'space-between', marginTop: 30, marginBottom: 30, }]}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18 }}>Order:</Text>
            <Text style={{ fontSize: 18, fontWeight: '300' }}>$ {total}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18 }}>Delivery::</Text>
            <Text style={{ fontSize: 18, fontWeight: '300' }}>$ {ship}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18 }}>Total:</Text>
            <Text style={{ fontSize: 18, fontWeight: '300' }}>$ {total + ship}</Text>
          </View>
        </View>

        {/* Submit */}
        <TouchableOpacity onPress={() => gotoSuccess()} style={{ backgroundColor: '#000', height: 60, borderRadius: 8, flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>SUBMIT ORDER</Text>
          {/* Bấm đây nhảy qua success */}
        </TouchableOpacity>
      </ScrollView>
    </View>

  )
}

export default CheckOut

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'grey',
    borderRadius: 4,
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3
  }
})