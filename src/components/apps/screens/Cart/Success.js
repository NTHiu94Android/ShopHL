import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Success = (props) => {
  const { navigation } = props;
  return (
    <View style={{ padding: 30, flex: 1, flexDirection: 'column', justifyContent: 'space-evenly' }}>
      <View style={{alignItems:'center'}}>
        <Text style={{ fontSize: 36, fontWeight: 'bold' }}>SUCCESS!</Text>
        <Image source={{ uri: 'https://giaohangtietkiem.vn/wp-content/uploads/2021/07/services_image.png' }}
          style={{ width: 200, height: 200 }} />
        <View>
          <Text style={{ fontSize: 18 }}>Your order will be delivered soon.</Text>
          <Text style={{ fontSize: 18 }}>Thank you for choosing our app!</Text>
        </View>
      </View>
      <View style={{ justifyContent: 'space-between', height: 150 }}>
        <TouchableOpacity onPress={() => navigation.navigate("Success")} style={{ backgroundColor: '#000', height: 60, borderRadius: 8, flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Track your orders</Text>
          {/* Bấm đây nhảy qua ... */}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ backgroundColor: '#fff', height: 60, borderRadius: 8, flexDirection: 'column', justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>BACK TO HOME</Text>
          {/* Bấm đây nhảy qua home */}
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Success

const styles = StyleSheet.create({})