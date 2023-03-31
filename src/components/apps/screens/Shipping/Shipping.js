import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import styleAddShippingAddress from '../../../style/styleAddShippingAddress'
import back from '../../../backEvent/back';
import { UserContext } from '../../../users/UserContext';
import { ScrollView } from 'react-native';

import DialogCountries from './DialogCountries';
import DialogCity from './DialogCity';

const Shipping = (props) => {
  const { navigation } = props;
  const { user } = useContext(UserContext);

  const [visibleCountries, setVisibleCountries] = useState(false);
  const [visibleCity, setVisibleCity] = useState(false);

  const [country, setCountry] = useState('Select country');
  const [city, setCity] = useState('Select city');

  const showDialogCountries = () => {
    setVisibleCountries(true);
  };

  const handleName = (name) => {
    setVisibleCountries(false);
    setCountry(name);
    console.log(name);
  };

  const showDialogCity = () => {
    setVisibleCity(true);
  };

  const handleNameCity = (name) => {
    setVisibleCity(false);
    setCity(name);
    console.log(name);
  };

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

        <ScrollView showsVerticalScrollIndicator={false}>
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
              <Text style={styleAddShippingAddress.txtZipcode}>{user.name}</Text>
            </View>
            <View style={styleAddShippingAddress.viewCountry}>
              <View>
                <Text style={styleAddShippingAddress.txtFullName}>Country</Text>
                <Text style={styleAddShippingAddress.txtExFullName}>{country}</Text>
              </View>

              {/* Hien thi 64 tinh thanh */}
              {
                visibleCountries ? <DialogCountries onName={handleName} isVisible={visibleCountries} /> : null
              }

              <View>
                <TouchableOpacity onPress={() => showDialogCountries()}>
                  <Image
                    style={styleAddShippingAddress.imgDown}
                    source={require('../../../../assets/images/down.png')}
                    resizeMode="cover">
                  </Image>
                </TouchableOpacity>
              </View>

            </View>

            {
              visibleCity ? <DialogCity onName={handleNameCity} isVisible={visibleCity} /> : null
            }

            <View style={styleAddShippingAddress.viewCity}>
              <View>
                <Text style={styleAddShippingAddress.txtFullName}>City</Text>
                <Text style={styleAddShippingAddress.txtCity}>{city}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => showDialogCity()}>
                  <Image
                    style={styleAddShippingAddress.imgDown}
                    source={require('../../../../assets/images/down.png')}
                    resizeMode="cover"></Image>
                </TouchableOpacity>
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
        </ScrollView>

      </View >
    </View >
  )
}

export default Shipping

const styles = StyleSheet.create({})