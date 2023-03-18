import React from 'react';
import Started from './src/components/splash/Started';

import { View, Text } from 'react-native';
import Favorite from './src/components/apps/screens/TabScreen/Favorite';
import Home from './src/components/apps/screens/TabScreen/Home';
import Detail from './src/components/apps/screens/Product/Detail';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
