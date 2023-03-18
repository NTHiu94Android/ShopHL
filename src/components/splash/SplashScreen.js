import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = (props) => {
    const { navigation } = props;
    const nextScreen = () => {
        navigation.navigate('SplashNavigation');
    }
    // useEffect(() => {
    //     setTimeout(nextScreen, 1500);
    // }, []);
    return (
        <View style={{flex: 1}}>
            <View>
                <Image style={styles.img} source={require('../../assets/images/logo.png')}></Image>
                <Text style={styles.text} >Hoang Long</Text>
                <Text style={styles.text} >Mobile</Text>
                <TouchableOpacity style={styles.btn} onPress={() => nextScreen()}>
                    <Text style={{ color: '#ffffff', textAlign: 'center', top: 15, fontWeight: 'bold' }}>Get Started</Text>
                </TouchableOpacity>
            </View >
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    img: {
        width: 200,
        height: 200,
        top: 150,
        left: 100
    },

    text: {
        textAlign: 'center',
        fontSize: 30,
        top: 200,
        fontWeight: 'bold'
    },

    btn: {
        width: 100,
        height: 50,
        backgroundColor: 'black',
        left: 150,
        top: 300
    }
})