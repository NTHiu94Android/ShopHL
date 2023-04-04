import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ToastAndroid, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../../../users/UserContext';

const UpdateProfile = (props) => {
   const { navigation } = props;
   const { onUpdateProfile, user } = useContext(UserContext);
   const [name, setName] = useState('');
   const [birthday, setBirthday] = useState('');
   const [address, setAddress] = useState('');
   const [numberPhone, setNumberPhone] = useState('');


   useEffect(() => {
      if (user) {
         setName(user.name);
         setBirthday(user.birthday);
         setAddress(user.address);
         setNumberPhone(user.numberPhone);
      }
   }, []);


   const handleUpdateProfile = async () => {
      if (!name || !birthday || !address || !numberPhone) {
         ToastAndroid.show('Please fill all the fields!', ToastAndroid.SHORT);
      };

      const res = await onUpdateProfile(user._id, user.email, name, birthday, address, numberPhone, user.avatar);
      if (res.status === 200) {
         //ToastAndroid.show('Update password successfully!', ToastAndroid.SHORT);
         console.log(res.data);
      } else {
         //ToastAndroid.show('Update password fail!', ToastAndroid.SHORT);
         console.log("Update password fail!");
      }
      navigation.navigate('Setting');
   };

   return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
         <View style={{ flex: 1, backgroundColor: 'white'}}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, marginTop: 48 }}>
               <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image
                     style={styles.iconTopBar}
                     resizeMode='cover'
                     source={require('../../../../assets/images/back2.png')} />
               </TouchableOpacity>

               <Text style={styles.textProfile}>Update profile</Text>
               <View style={styles.iconTopBar}></View>
            </View>

            
            <View style={{paddingHorizontal: 50}}>
               <Text style={{ color: 'grey', marginTop: 40, marginBottom: 8 }}>Name</Text>
               <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder="Name"
                  style={{}} />
               <View style={{ height: 1, backgroundColor: 'black', }} ></View>

               <Text style={{ color: 'grey', marginTop: 20, marginBottom: 8 }}>Birthday</Text>
               <TextInput
                  value={birthday}
                  onChangeText={setBirthday}
                  placeholder="Birthday"
                  style={{}} />
               <View style={{ height: 1, backgroundColor: 'black' }} ></View>

               <Text style={{ color: 'grey', marginTop: 20, marginBottom: 8 }}>Address</Text>
               <TextInput
                  value={address}
                  onChangeText={setAddress}
                  placeholder="Address"
                  style={{}} />
               <View style={{ height: 1, backgroundColor: 'black' }} ></View>

               <Text style={{ color: 'grey', marginTop: 20, marginBottom: 8 }}>Number phone</Text>
               <TextInput
                  value={numberPhone}
                  onChangeText={setNumberPhone}
                  placeholder="Number phone"
                  style={{}}
                  secureTextEntry={true} />
               <View style={{ height: 1, backgroundColor: 'black' }} ></View>

               <TouchableOpacity style={styles.btn} onPress={() => handleUpdateProfile()}>
                  <Text style={{ color: '#ffffff', textAlign: 'center', fontWeight: 'bold' }} >Submit</Text>
               </TouchableOpacity>

            </View>
         </View>
      </ScrollView>
   )
}

export default UpdateProfile

const styles = StyleSheet.create({
   btn: {
      height: 50,
      backgroundColor: 'black',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 8
   },
   iconTopBar: {
      width: 24, height: 24,
   },
   textProfile: {
      textAlign: 'center',
      color: 'black',
      fontSize: 18,
      fontWeight: '800',
   },
})