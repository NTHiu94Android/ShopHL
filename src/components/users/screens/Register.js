import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react';
import back from '../../backEvent/back';

const Register = (props) => {
  const { navigation } = props;
  back(navigation);
  return (
    <View style={{ bottom: 60 }}>
      <View style={{ width: 300, height: 300, flexDirection: 'row', alignItems: 'center', left: 50 }}>
        <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
        <Image style={{ width: 50, height: 50, padding: 10 }} source={require('../../../assets/images/logo.png')}></Image>
        <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
      </View>
      <View>
        <Text style={{ left: 60, fontSize: 20, color: 'black', bottom: 100 }} >WELCOME</Text>
        <Text style={{ color: 'grey', left: 60, bottom: 50 }}>Name</Text>
        <TextInput style={{ left: 60, bottom: 40 }} ></TextInput>
        <View style={{ width: 300, height: 1, backgroundColor: 'black', left: 60, bottom: 40 }} ></View>

        <Text style={{ color: 'grey', left: 60, bottom: 10 }}>Email</Text>
        <TextInput style={{ left: 60 }} ></TextInput>
        <View style={{ width: 300, height: 1, backgroundColor: 'black', left: 60 }} ></View>

        <Text style={{ color: 'grey', left: 60, top: 30 }}>Password</Text>
        <TextInput style={{ left: 60, top: 40 }} secureTextEntry={true} />
        <View style={{ width: 300, height: 1, backgroundColor: 'black', left: 60, top: 40 }} ></View>

        <Text style={{ color: 'grey', left: 60, top: 70 }}>Comfirm Password</Text>
        <TextInput style={{ left: 60, top: 80 }} secureTextEntry={true} />
        <View style={{ width: 300, height: 1, backgroundColor: 'black', left: 60, top: 80 }} ></View>

        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: '#ffffff', textAlign: 'center', top: 15, fontWeight: 'bold' }} >SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{ top: 140, left: 120, color: 'black', fontWeight: '600' }} >Already have account? SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  btn: {
    width: 300,
    height: 50,
    backgroundColor: 'black',
    left: 60,
    top: 120,
    borderRadius: 5
  }
})