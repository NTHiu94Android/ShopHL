import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderDetail from './OrderDetail';
import Order from './Order';
import back from '../../../backEvent/back';

const Stack = createNativeStackNavigator();

const OrderStack = (props) => {
    const { navigation } = props;
    back(navigation);
    return (
        <Stack.Navigator initialRouteName="Order">
            <Stack.Screen options={{ headerShown: false }} name='OrderDetail' component={OrderDetail} />
            <Stack.Screen options={{ headerShown: false }} name='Order' component={Order} />
        </Stack.Navigator>
    )
}

export default OrderStack