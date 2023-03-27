import { Button, Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useContext} from 'react'
import styleAddShippingAddress from '../../../style/styleAddShippingAddress'
import back from '../../../backEvent/back';
import { UserContext } from '../../../users/UserContext';
import { AppContext } from '../../AppContext';

const Shipping = (props) => {
  const { navigation } = props;
  const {user} = useContext(UserContext);
  const {total} = useContext(AppContext);
  back(navigation);
  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <View style={styleAddShippingAddress.container}>
        <View style={styleAddShippingAddress.header}>
          <View style={styleAddShippingAddress.viewHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styleAddShippingAddress.icBack}
                source={require('../../../../assets/images/back.png')}
                resizeMode="cover"></Image>
            </TouchableOpacity>

            <Text style={styleAddShippingAddress.txtOrderDetail}>Add shipping address</Text>
          </View>
        </View>

        {/* body */}
        <View style={styleAddShippingAddress.body}>
          <View style={styleAddShippingAddress.viewFullName}>
            <Text style={styleAddShippingAddress.txtFullName}>Full name</Text>
            <Text style={styleAddShippingAddress.txtExFullName}>Ex: {user.name}</Text>
          </View>
          <View style={styleAddShippingAddress.viewFullName}>
            <Text style={styleAddShippingAddress.txtFullName}>Address</Text>
            <Text style={styleAddShippingAddress.txtExFullName}>Ex: {user.address}</Text>
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
    </View>
  )
}

export default Shipping

const styles = StyleSheet.create({})