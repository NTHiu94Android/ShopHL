import { StyleSheet, Text, View, SafeAreaView, Image, Pressable, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={{ flex: 1, flexDirection: 'column', padding: 4 }}>
      <Image
        style={{ flex: 1, width: 150, height: 96, borderRadius: 6, }}
        resizeMode='cover'
        source={{ uri: item.link, }} />
      <View style={{ flex: 1 }}>
        <Text
          style={{ fontWeight: '400', fontSize: 13, lineHeight: 20, color: '#4e4b66' }}>
          {item.field}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);
const ProductDetail = ({ route }) => {
  const { item } = route.params;
  console.log("Detail item: ");
  console.log(item);
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Image
          style={{ width: 400, height: 450, position: "relative", }}
          resizeMode='cover'
          source={{
            uri: item.link,
          }}
        />
        <View style={{ position: "absolute" }}>
          <Image
            resizeMode='cover'
            source={require('../../../../assets/images/ic_back.png')}
            style={{ width: 35, marginTop: 40, marginLeft: 27 }}
          />
          <Image
            resizeMode='cover'
            source={require('../../../../assets/images/ic_color.png')}
            style={{ width: 35, height: 149, marginLeft: 27 }}
          />
        </View>
      </View>
      <View style={{ flex: 5, marginLeft: 24, marginTop: 15, marginRight: 24, }}>
        <Text style={{ color: 'black', fontWeight: '800', fontSize: 24, marginTop: 16, lineHeight: 30.47 }}>{item.field}</Text>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: 'black', fontWeight: '700', fontSize: 30, lineHeight: 40.92, marginTop: 10, flex: 3 }}>
            {item.price}
          </Text>
          <View style={{ flexDirection: 'row', margin: 20, flex: 1 }}>
            <Image
              style={{ width: 25, height: 25, marginRight: 15 }}
              source={require('../../../../assets/images/btn_plus.png')}
            />
            <Text style={{ width: 25, height: 25, marginRight: 15 }}>
              01
            </Text>
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../../../../assets/images/btn_minus.png')}
            />
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10 }}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../../../../assets/images/ic_star.png')}
          />
          <Text style={{ color: 'black', fontWeight: '700', fontSize: 18, lineHeight: 24.55, marginLeft: 25 }}>
            {item.reviews}
          </Text>
          <Text style={{ color: '#808080', fontWeight: '600', fontSize: 14, lineHeight: 24.55, marginLeft: 25 }}>
            {item.status_review}
          </Text>
        </View>
        <Text style={{ color: '#808080', fontWeight: '300', textAlign: 'justify', marginTop: 14 }}>
          {item.description}
        </Text>
      </View>
      {/* ---------------------- */}
      <View style={{ flex: 1, flexDirection: 'row', margin: 25 }}>
        <View style={{ marginVertical: 8, width: '20%', marginRight: 4 }}>
          <TouchableOpacity>
            <Image style={{ width: 24, height: 28, marginTop: 26, marginLeft: 18 }}
              source={require('../../../../assets/images/ic_fvr.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ marginVertical: 8, width: '20%', marginRight: 4 }}>
          <TouchableOpacity>
            <TouchableOpacity>
              <Image style={{ width: 280, height: 60, marginRigh: 20, marginTop: 18 }}
                source={require('../../../../assets/images/btn_add.png')} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  )

}


export default ProductDetail

const styles = StyleSheet.create({

})