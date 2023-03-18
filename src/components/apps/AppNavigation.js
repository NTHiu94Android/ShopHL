import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from './screens/TabScreen/Home';
import Favorite from './screens/TabScreen/Favorite';
import Cart from './screens/TabScreen/Cart';
import Profile from './screens/TabScreen/Profile';
import SearchScreen from './screens/Search/SearchScreen';
import OrderDetail from './screens/Order/OrderDetail';
import CheckOut from './screens/Cart/CheckOut';
import Success from './screens/Cart/Success';
import Review from './screens/Product/Review';
import Order from './screens/Order/Order';
import Setting from './screens/Setting/Setting';
import Shipping from './screens/Shipping/Shipping';
import Detail from './screens/Product/Detail';

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
                <Stack.Screen options={{ headerShown: false }} name='Order' component={Order} />
                <Stack.Screen options={{ headerShown: false }} name='OrderDetail' component={OrderDetail} />
                <Stack.Screen options={{ headerShown: false }} name='Setting' component={Setting} />
                <Stack.Screen options={{ headerShown: false }} name='Shipping' component={Shipping} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;