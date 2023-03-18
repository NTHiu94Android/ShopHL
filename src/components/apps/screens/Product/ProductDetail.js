import { StyleSheet, Text, TouchableOpacity, View  } from 'react-native'
import React from 'react';
import back from '../../../backEvent/back';

const ProductDetail = (props) => {
  const { navigation } = props;
  back(navigation);
  return (
    <View style={{paddingTop: 50}}>
      <TouchableOpacity onPress={()=>navigation.goBack()}><Text>Back</Text></TouchableOpacity>
      <Text>ProductDetail</Text>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({})