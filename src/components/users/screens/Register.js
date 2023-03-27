import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, ToastAndroid, alert, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react';
import back from '../../backEvent/back';
import { UserContext } from '../UserContext';
import { AppContext } from '../../apps/AppContext';

const Register = (props) => {
  const { navigation } = props;
  const { onRegister } = useContext(UserContext);
  const { onAddCart } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  back(navigation);

  const handleRegister = async () => {
    const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const checkEmail = patternEmail.test(email);
    if (!checkEmail) {
      ToastAndroid.show('Email is not valid', ToastAndroid.SHORT);
      return;
    }
    if (!email || !password || !name) {
      alert('Please fill all the fields');
      return;
    };
    if (password !== confirmPassword) {
      alert('Password and Confirm Password must be the same');
      return;
    };
    await onRegister(email, password, name);
    ToastAndroid.show('Register successfully!', ToastAndroid.SHORT);
    navigation.navigate('Login');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ alignItems: 'center' }}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 50, marginHorizontal: 30}}>
          <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
          <Image style={{ width: 50, height: 50 }} source={require('../../../assets/images/logo.png')}></Image>
          <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
        </View>
        <View style={{width: "100%"}}>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: '800', marginVertical: 30, marginStart: 40 }} >WELCOME</Text>
        </View>

        <View>
          <Text style={{ color: 'grey', marginBottom: 10 }}>Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            style={{  }} />
          <View style={{ width: 300, height: 1, backgroundColor: 'black', marginBottom: 40 }} ></View>

          <Text style={{ color: 'grey', marginBottom: 10 }}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            style={{}} />
          <View style={{ width: 300, height: 1, backgroundColor: 'black', marginBottom: 40}} ></View>

          <Text style={{ color: 'grey', marginBottom: 10 }}>Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            style={{  }}
            secureTextEntry={true} />
          <View style={{ width: 300, height: 1, backgroundColor: 'black', marginBottom: 40 }} ></View>

          <Text style={{ color: 'grey', marginBottom: 10 }}>Comfirm Password</Text>
          <TextInput
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Enter your confirm password"
            style={{}}
            secureTextEntry={true} />
          <View style={{ width: 300, height: 1, backgroundColor: 'black', marginBottom: 20 }} ></View>

          <TouchableOpacity onPress={() => handleRegister()} style={styles.btn}>
            <Text style={{ color: '#ffffff', textAlign: 'center',fontWeight: 'bold' }} >SIGN UP</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: 'black', fontWeight: '600', textAlign: 'center', marginTop: 10 }} >Already have account? SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  btn: {
    width: 300,
    height: 50,
    backgroundColor: 'black',
    borderRadius: 5, 
    justifyContent: 'center',
    alignItems: 'center',
  }
})