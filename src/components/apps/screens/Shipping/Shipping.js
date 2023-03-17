import { Button, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import styleAddShippingAddress from '../../../style/styleAddShippingAddress'

const Shipping = () => {
  return (
    <View style={styleAddShippingAddress.container}>
      <View style={styleAddShippingAddress.header}>
        <View style={styleAddShippingAddress.viewHeader}>
          <Image
            style={styleAddShippingAddress.icBack}
            source={require('../../../../assets/images/back.png')}
            resizeMode="cover"></Image>
          <Text style={styleAddShippingAddress.txtOrderDetail}>Add shipping address</Text>
        </View>
      </View>

      {/* body */}
      <View style={styleAddShippingAddress.body}>
        <View style={styleAddShippingAddress.viewFullName}>
          <Text style={styleAddShippingAddress.txtFullName}>Full name</Text>
          <Text style={styleAddShippingAddress.txtExFullName}>Ex: Phạm Quốc Tín</Text>
        </View>
        <View style={styleAddShippingAddress.viewFullName}>
          <Text style={styleAddShippingAddress.txtFullName}>Address</Text>
          <Text style={styleAddShippingAddress.txtExFullName}>Ex: 25 Robert Latouche Street</Text>
        </View>
        <View style={styleAddShippingAddress.viewZipcode}>
          <Text style={styleAddShippingAddress.txtFullName}>Zipcode (Postal Code)</Text>
          <Text style={styleAddShippingAddress.txtZipcode}>Pham Cong Thanh</Text>
        </View>
        <View style={styleAddShippingAddress.viewCountry}>
          <View>
            <Text style={styleAddShippingAddress.txtFullName}>Country</Text>
            <Text style={styleAddShippingAddress.txtExFullName}>Select Country</Text>
          </View>
          <View>
            <Image
              style={styleAddShippingAddress.imgDown}
              source={require('../../../../assets/images/down.png')}
              resizeMode="cover"></Image>
          </View>
        </View>

        <View style={styleAddShippingAddress.viewCity}>
          <View>
            <Text style={styleAddShippingAddress.txtFullName}>City</Text>
            <Text style={styleAddShippingAddress.txtCity}>New York</Text>
          </View>
          <View>
            <Image
              style={styleAddShippingAddress.imgDown}
              source={require('../../../../assets/images/down.png')}
              resizeMode="cover"></Image>
          </View>
        </View>


        <View style={styleAddShippingAddress.viewCountry}>
          <View>
            <Text style={styleAddShippingAddress.txtFullName}>District</Text>
            <Text style={styleAddShippingAddress.txtExFullName}>Select District</Text>
          </View>
          <View>
            <Image
              style={styleAddShippingAddress.imgDown}
              source={require('../../../../assets/images/down.png')}
              resizeMode="cover"></Image>
          </View>
        </View>
      </View>
      <View style={styleAddShippingAddress.footer}>
        <Pressable style={styleAddShippingAddress.btnSaveAddress}>
          <Text style={styleAddShippingAddress.txtSaveAddress}>SAVE ADDRESS</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Shipping

const styles = StyleSheet.create({})