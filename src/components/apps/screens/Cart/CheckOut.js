import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';

const CheckOut = (props) => {
  const { navigation } = props;
  return (
    <View style={{ flex: 1, paddingTop: 56, paddingHorizontal: 20, justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Entypo name="chevron-thin-left" size={24} color="black" />
          {/* Bấm đây nhảy qua cart () */}
        </TouchableOpacity>
        <Text style={{ fontSize: 16, fontWeight: 'bold', flex: 1, textAlign: 'center' }}>Check out</Text>
      </View>
      <View style={{ justifyContent: 'space-between', height: 175 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: '300' }}>Shipping Address</Text>
          <AntDesign name="edit" size={24} color="black" />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 8, paddingVertical: 10 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', borderBottomWidth: 0.5, borderBottomColor: 'grey', padding: 10 }}>Phạm Quốc Tín</Text>
          <Text style={{ fontSize: 14, lineHeight: 25, padding: 10 }}>18C, Khu phố Hòa Long, Phường Lái Thiêu, Thành phố Thuận An, Tỉnh Bình Dương, Việt Nam</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'space-between', height: 100 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18, fontWeight: '300' }}>Delivery method</Text>
          <AntDesign name="edit" size={24} color="black" />
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 8, paddingVertical: 10, flexDirection: 'row' }}>
          <Image source={{ uri: 'https://theme.hstatic.net/200000472237/1000829412/14/logo.png?v=584' }}
            style={{ height: 20, width: 90, margin: 10 }} />
          <Text style={{ margin: 10, fontSize: 14, fontWeight: 'bold' }}>Fast (2-3 days)</Text>
        </View>
      </View>
      <View style={{ backgroundColor: '#fff', padding: 10, borderRadius: 8, height: 125, justifyContent: 'space-between' }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18 }}>Order:</Text>
          <Text style={{ fontSize: 18, fontWeight: '300' }}>$ 95.00</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18 }}>Delivery::</Text>
          <Text style={{ fontSize: 18, fontWeight: '300' }}>$ 5.00</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 18 }}>Total:</Text>
          <Text style={{ fontSize: 18, fontWeight: '300' }}>$ 100.00</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Success")} style={{ backgroundColor: '#000', height: 60, borderRadius: 8, flexDirection: 'column', justifyContent: 'center' }}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>SUBMIT ORDER</Text>
        {/* Bấm đây nhảy qua success */}
      </TouchableOpacity>
    </View>
  )
}

export default CheckOut

const styles = StyleSheet.create({})