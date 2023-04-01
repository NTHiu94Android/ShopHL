import React, { useState, useEffect } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Register from './screens/Register';
import ForgotPassword from './screens/ForgotPassword';

const Stack = createNativeStackNavigator();

const UserNavigation = () => {
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
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default UserNavigation;