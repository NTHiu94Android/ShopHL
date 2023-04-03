import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AppNavigation from '../apps/AppNavigation';
import UserNavigation from '../users/UserNavigation';

import { UserContextProvider, UserContext } from '../users/UserContext';
import { AppContextProvider } from '../apps/AppContext';
import { View } from 'react-native';

const NavigationApp = () => {
  const { user } = useContext(UserContext);
  return (
    <NavigationContainer independent={true}>
      {user ? <AppNavigation /> : <UserNavigation />}
    </NavigationContainer>
  )
}
const SplashNavigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <UserContextProvider>
        <AppContextProvider>
          <NavigationApp />
        </AppContextProvider>
      </UserContextProvider>
    </View>

  )
}

export default SplashNavigation