import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashNavigation from './SplashNavigation';
import SplashScreen from './SplashScreen';

const Stack = createNativeStackNavigator();

const Started = () => {
    
    return (
        <NavigationContainer >
            <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen name="SplashNavigation" component={SplashNavigation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Started