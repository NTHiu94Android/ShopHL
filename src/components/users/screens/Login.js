import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'

import { UserContext } from '../UserContext';

const Login = (props) => {
  const { navigation } = props;
  const { setUser } = useContext(UserContext);
  const getUser = () => {
    const us = { username: "admin", password: "123" }
    setUser(us);
  }
  return (
    <View>
      <View style={{ width: 300, height: 300, flexDirection: 'row', alignItems: 'center', left: 50 }}>
        <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
        <Image style={{ width: 50, height: 50, padding: 10 }} source={require('../../../assets/images/logo.png')}></Image>
        <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
      </View>
      <View>
        <Text style={{ fontWeight: 'bold', color: 'grey', fontSize: 25, left: 50, bottom: 100 }} >Hello !</Text>
        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20, left: 50, bottom: 100 }} >WELCOME BACK</Text>
        <Text style={{ color: 'grey', left: 50, bottom: 50 }}>Email</Text>
        <TextInput style={{ left: 50, bottom: 40 }} />
        <View style={{ width: 300, height: 1, backgroundColor: 'black', left: 50, bottom: 40 }} ></View>

        <Text style={{ color: 'grey', left: 50, bottom: 10 }}>Password</Text>
        <TextInput style={{ left: 50 }} secureTextEntry={true}></TextInput>
        <View style={{ width: 300, height: 1, backgroundColor: 'black', left: 50 }} ></View>

        <Text style={{ top: 30, left: 150, color: 'black', fontWeight: '600' }} >Forgot Password</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: '#ffffff', textAlign: 'center', top: 15, fontWeight: 'bold' }} >Log In</Text>
        </TouchableOpacity>

        <Text style={{ top: 130, left: 175, color: 'black', fontWeight: '600' }} onPress={() => getUser()} >SIGN UP</Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  btn: {
    width: 300,
    height: 50,
    backgroundColor: 'black',
    left: 50,
    top: 100,
    borderRadius: 5
  }
})