import React, { useState, useEffect } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/TabScreen/Home';
import Favorite from './screens/TabScreen/Favorite';
import Cart from './screens/TabScreen/Cart';
import Profile from './screens/TabScreen/Profile';
import SearchScreen from './screens/Search/SearchScreen';
import ProductDetail from './screens/Product/ProductDetail';
import CheckOut from './screens/Cart/CheckOut';
import Success from './screens/Cart/Success';
import Review from './screens/Product/Review';
import OrderStack from './screens/Order/OrderStack';
import Setting from './screens/Setting/Setting';
import Shipping from './screens/Shipping/Shipping';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home-outline';
                    } else if (route.name === 'Favorite') {
                        iconName = focused
                            ? 'bookmark'
                            : 'bookmark-outline';
                    } else if (route.name === 'Cart') {
                        iconName = focused
                            ? 'cart'
                            : 'cart-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused
                            ? 'person'
                            : 'person-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },

                tabBarActiveTintColor: 'black',
                tabBarInactiveTintColor: 'gray',
            })}>

            <Tab.Screen options={{ headerShown: false }} name="Home" component={Home} />
            <Tab.Screen options={{ headerShown: false }} name="Favorite" component={Favorite} />
            <Tab.Screen options={{ headerShown: false }} name="Cart" component={Cart} />
            <Tab.Screen options={{ headerShown: false }} name="Profile" component={Profile} />

        </Tab.Navigator>
    )
}


const AppNavigation = () => {
    const [backPressCount, setBackPressCount] = useState(0);
    useEffect(() => {
        const backAction = () => {
            if (backPressCount < 1) {
                setBackPressCount(backPressCount + 1);
                ToastAndroid.show('Press back again to exit', ToastAndroid.SHORT);
                setTimeout(() => setBackPressCount(0), 1000); // reset after 1 seconds
                return true;
            } else {
                BackHandler.exitApp();
                return true;
            }
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, [backPressCount]);
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName="BottomNavigation">
                {/* {GetComponent()} */}
                <Stack.Screen options={{ headerShown: false }} name='BottomNavigation' component={BottomNavigation} />
                <Stack.Screen options={{ headerShown: false }} name='SearchScreen' component={SearchScreen} />
                <Stack.Screen options={{ headerShown: false }} name='ProductDetail' component={ProductDetail} />
                <Stack.Screen options={{ headerShown: false }} name='CheckOut' component={CheckOut} />
                <Stack.Screen options={{ headerShown: false }} name='Success' component={Success} />
                <Stack.Screen options={{ headerShown: false }} name='Review' component={Review} />
                <Stack.Screen options={{ headerShown: false }} name='OrderStack' component={OrderStack} />
                <Stack.Screen options={{ headerShown: false }} name='Setting' component={Setting} />
                <Stack.Screen options={{ headerShown: false }} name='Shipping' component={Shipping} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;