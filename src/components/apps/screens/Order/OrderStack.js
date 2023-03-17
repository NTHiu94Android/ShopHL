import { View, Text } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderDetail from './OrderDetail';
import Order from './Order';

const Stack = createNativeStackNavigator();

const OrderStack = () => {
    return (
        <Stack.Navigator initialRouteName="BottomNavigation">
            <Stack.Screen options={{ headerShown: false }} name='OrderDetail' component={OrderDetail} />
            <Stack.Screen options={{ headerShown: false }} name='Order' component={Order} />
        </Stack.Navigator>
    )
}

export default OrderStack