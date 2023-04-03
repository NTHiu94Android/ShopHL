import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ToastAndroid, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'

import { UserContext } from '../UserContext';

const Login = (props) => {
  const { navigation } = props;
  const { setUser, onLogin } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      ToastAndroid.show('Please fill all the fields!', ToastAndroid.SHORT);
      return;
    };
    const res = await onLogin(email, password);
    if (res.data) {
      setUser(res.data);
    } else {
      ToastAndroid.show('Login fail!', ToastAndroid.SHORT);
    }
  };

  
  // const getUser = () => {
  //   const us = { username: "admin", password: "123" }
  //   setUser(us);
  // }
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50, paddingHorizontal: 50 }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
          <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
          <Image style={{ width: 50, height: 57, marginHorizontal: 10 }} source={require('../../../assets/images/logo.png')}></Image>
          <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
        </View>

        <View>
          <Text style={{ fontWeight: 'bold', color: 'grey', fontSize: 25, }} >Hello !</Text>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20, }} >WELCOME BACK</Text>
          <Text style={{ color: 'grey', marginTop: 40, marginBottom: 8 }}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            style={{}} />
          <View style={{ height: 1, backgroundColor: 'black', }} ></View>

          <Text style={{ color: 'grey', marginTop: 20, marginBottom: 8 }}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            style={{}}
            secureTextEntry={true} />
          <View style={{ height: 1, backgroundColor: 'black' }} ></View>

          <TouchableOpacity style={styles.btn} onPress={() => handleLogin()}>
            <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold' }} >Log In</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={{ color: 'black', fontWeight: '600', textAlign: 'center' }}>Do you have account ? </Text>
            <Text
              style={{ color: 'black', fontWeight: '600', textAlign: 'center', marginLeft: 4, textDecorationLine: 'underline' }}
              onPress={() => navigation.navigate('Register')} >
              Signup
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={{ color: 'black', fontWeight: '600', textAlign: 'center', marginTop: 8, textDecorationLine: 'underline' }}>
              Forgot password
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
  btn: {
    height: 50,
    backgroundColor: 'black',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 8
  }
})