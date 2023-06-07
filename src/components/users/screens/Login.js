import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ToastAndroid, ScrollView, Alert } from 'react-native'
import React, { useContext, useState } from 'react';

import * as Google from 'expo-google-app-auth';

import { UserContext } from '../UserContext';

const Login = (props) => {
  const { navigation } = props;
  const { setUser, onLogin } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    if (!email || !password) {
      //neu tren android
      if (Platform.OS === 'android') {
        ToastAndroid.showWithGravityAndOffset(
          'Please fill all the fields!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
        return;
      } else {
        //neu tren ios
        Alert.alert('Please fill all the fields!');
        return;
      }
    };
    const res = await onLogin(email, password);
    if (res.data) {
      setUser(res.data);
    } else {
      //neu tren android
      if (Platform.OS === 'android') {
        ToastAndroid.showWithGravityAndOffset(
          'Login fail!',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
        return;
      } else {
        //neu tren ios
        Alert.alert('Login fail!');
        return;
      }
    }
  };

  const signInWithGoogleAsync = async() => {
    try {
      const config = {
        //iosClientId: '<YOUR_IOS_CLIENT_ID>',
        androidClientId: '991338502956-dj37d9skmkb13pl0pcjb3aib9oenqgfe.apps.googleusercontent.com',
        //iosStandaloneAppClientId: '<YOUR_IOS_CLIENT_ID>',
        //androidStandaloneAppClientId: '<YOUR_ANDROID_CLIENT_ID>',
        scopes: ['profile', 'email'],
      };

      const { type, accessToken, user } = await Google.logInAsync(config);

      if (type === 'success') {
        // Đăng nhập thành công, lấy được accessToken và user
        console.log(accessToken, user);
      } else {
        // Đăng nhập không thành công
        console.log('Đăng nhập không thành công');
      }
    } catch (e) {
      console.log('Lỗi:', e.message);
    }
  }



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

          <TouchableOpacity style={styles.btn} onPress={() => signInWithGoogleAsync()}>
            <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold' }} >Log In By Google</Text>
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