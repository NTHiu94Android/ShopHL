import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Delivered from './OrderStatus/Delivered';
import Canceled from './OrderStatus/Canceled';
import Processing from './OrderStatus/Processing';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import back from '../../../backEvent/back';

const Tab = createMaterialTopTabNavigator();

const Order = (props) => {
  const { navigation } = props;
  back(navigation);
  return (
    <View style={{ flex: 1, paddingTop: 50, backgroundColor: 'white' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.iconTopBar}
            resizeMode='cover'
            source={require('../../../../assets/images/back2.png')} />
        </TouchableOpacity>

        <Text style={styles.textProfile}>My order</Text>
        <View style={styles.iconTopBar}></View>
      </View>

      <Tab.Navigator>
        <Tab.Screen options={{ headerShown: false }} name="Delivered" component={Delivered} />
        <Tab.Screen options={{ headerShown: false }} name="Processing" component={Processing} />
        <Tab.Screen options={{ headerShown: false }} name="Canceled" component={Canceled} />
      </Tab.Navigator>
    </View>


  )
}

export default Order

const styles = StyleSheet.create({
  iconTopBar: {
    width: 24, height: 24,
  },
  textProfile: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
  },
})