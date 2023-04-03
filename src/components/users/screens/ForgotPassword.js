import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ToastAndroid, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import back from '../../backEvent/back';

import ProgressDialog from 'react-native-progress-dialog';

import { UserContext } from '../UserContext';

const ForgotPassword = (props) => {
   const { navigation } = props;
   const { onForgotPassword } = useContext(UserContext);
   const [email, setEmail] = useState('');

   const [isLoading, setIsLoading] = useState(false);

   back(navigation);

   const handleForgotPassword = async (email) => {
      setIsLoading(true);
      //forgot password
      const res = await onForgotPassword(email);
      if (res.data) {
         ToastAndroid.show('Please check your email!', ToastAndroid.SHORT);
      } else {
         ToastAndroid.show('Email does not exist!', ToastAndroid.SHORT);
      }
      setIsLoading(false);
   };

   return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
         <View style={{ flex: 1, backgroundColor: 'white', marginTop: 50, paddingHorizontal: 50 }}>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
               <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
               <Image style={{ width: 50, height: 57, marginHorizontal: 10 }} source={require('../../../assets/images/logo.png')}></Image>
               <View style={{ height: 1, backgroundColor: 'black', flex: 1 }}></View>
            </View>

            <View>
               <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20, }} >FORGOT PASSWORD</Text>
               <Text style={{ color: 'grey', marginTop: 40, marginBottom: 8 }}>New password</Text>
               <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder="Enter your new email"
                  style={{}} />
               <View style={{ height: 1, backgroundColor: 'black', }} ></View>


               <TouchableOpacity style={styles.btn} onPress={() => handleForgotPassword(email)}>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold' }} >Send email</Text>
               </TouchableOpacity>


            </View>
         </View>
         <ProgressDialog
            visible={isLoading}
            title="Đang tải dữ liệu"
            message="Vui lòng đợi trong giây lát..." />
      </ScrollView>
   )
}

export default ForgotPassword

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