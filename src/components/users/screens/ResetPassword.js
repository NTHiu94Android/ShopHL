import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ToastAndroid, ScrollView } from 'react-native'
import React, { useContext, useState } from 'react'
import back from '../../backEvent/back';

import ProgressDialog from 'react-native-progress-dialog';

import { UserContext } from '../UserContext';

const ResetPassword = (props) => {
   const { navigation } = props;
   const { onResetPassword } = useContext(UserContext);
   const [newPassword, setNewPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   back(navigation);

   const handleResetPassword = async () => {
      if (!newPassword || !confirmPassword) {
         ToastAndroid.show('Please fill all the fields!', ToastAndroid.SHORT);
         return;
      };
      if (newPassword !== confirmPassword) {
         ToastAndroid.show('Password does not match!', ToastAndroid.SHORT);
         return;
      };

      setIsLoading(true);
      const res = await onResetPassword(newPassword);
      if (res.data) {
         ToastAndroid.show('Reset password successfully!', ToastAndroid.SHORT);
         navigation.navigate('Login');
      } else {
         ToastAndroid.show('Reset password fail!', ToastAndroid.SHORT);
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
               <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 20, }} >RESET PASSWORD</Text>
               <Text style={{ color: 'grey', marginTop: 40, marginBottom: 8 }}>New password</Text>
               <TextInput
                  value={newPassword}
                  onChangeText={setNewPassword}
                  placeholder="Enter your new password"
                  style={{}} />
               <View style={{ height: 1, backgroundColor: 'black', }} ></View>

               <Text style={{ color: 'grey', marginTop: 20, marginBottom: 8 }}>Confirm password</Text>
               <TextInput
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  placeholder="Enter your confirm password"
                  style={{}}
                  secureTextEntry={true} />
               <View style={{ height: 1, backgroundColor: 'black' }} ></View>

               <TouchableOpacity style={styles.btn} onPress={() => handleResetPassword()}>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold' }} >Submit</Text>
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

export default ResetPassword

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