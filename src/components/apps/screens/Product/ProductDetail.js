import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'

const ProductDetail = ({ route }) => {
  const { item } = route.params;
  // console.log("Detail item: ");
  // console.log(item);
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{position: "relative", justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
        <Image
          style={{ width: Dimensions.get('window').width - 24, height: 400 }}
          resizeMode='cover'
          source={{
            uri: item.link,
          }}/>
        <View style={{ position: "absolute", top: 0, left: 0 }}>
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

      <View style={{  marginLeft: 24, marginTop: 15, marginRight: 24, }}>
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
    </ScrollView >
  )

}


export default ProductDetail

const styles = StyleSheet.create({

})