import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useEffect} from 'react'

const SplashScreen = (props) => {
    const { navigation } = props;
    const nextScreen = () => {
        navigation.navigate('SplashNavigation');
    }
    useEffect(() => {
        setTimeout(nextScreen, 1500);
    }, []);
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>SplashScreen</Text>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    
})