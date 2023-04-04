import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Image, } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext';
import { UserContext } from '../../../users/UserContext';

import ProgressDialog from 'react-native-progress-dialog';

const Comment = (props) => {
   const { item } = props.route.params;
   const { navigation } = props;
   //console.log("Item: ", item.idProduct);
   const { onAddComment } = useContext(AppContext);
   const { user } = useContext(UserContext);

   const [star, setStar] = useState(5);
   const [text, setText] = useState('');

   const [isLoading, setIsLoading] = useState(false);

   useEffect(() => {
      //getOrderDetail();
   }, []);

   const handleSendCmt = async () => {
      setIsLoading(true);
      const cmt = await onAddComment(text, star, user._id, item.idProduct);
      console.log("Cmt: ", cmt);
      navigation.goBack();
      setIsLoading(false);
   };

   return (

      <View style={{ flex: 1, paddingTop: 50, backgroundColor: 'white', paddingHorizontal: 12 }}>

         {/* top bar */}
         <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
               <Image
                  style={styles.iconTopBar}
                  resizeMode='cover'
                  source={require('../../../../assets/images/back2.png')} />
            </TouchableOpacity>

            <Text style={styles.textProfile}>Comment</Text>
            <View style={styles.iconTopBar}></View>
         </View>

         <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
            {/* info product */}
            <View style={{ flexDirection: 'row', marginVertical: 10 }}>
               <Image
                  style={styles.imgProduct}
                  resizeMode='cover'
                  source={{ uri: item.product.listImage[0] }} />
               <View>
                  <Text numberOfLines={1} style={{ color: 'black', fontWeight: '800', fontSize: 20, marginStart: 8, width: 250 }}>{item.product.name}</Text>
                  <Text numberOfLines={3} style={{ fontWeight: '200', fontSize: 14, marginStart: 8, width: 250, marginTop: 8 }}>{item.product.describer}</Text>
               </View>

            </View>

            {/* Star */}
            <View>
               {
                  star === 5 ?
                     <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setStar(1)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setStar(2)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(3)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(4)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(5)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>
                     </View> : <View></View>
               }

               {
                  star === 4 ?
                     <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setStar(1)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setStar(2)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(3)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(4)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(5)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star2.png')} />
                        </TouchableOpacity>
                     </View> : <View></View>
               }

               {
                  star === 3 ?
                     <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setStar(1)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setStar(2)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(3)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(4)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(5)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star2.png')} />
                        </TouchableOpacity>
                     </View> : <View></View>
               }

               {
                  star === 2 ?
                     <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setStar(1)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setStar(2)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(3)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(4)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(5)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star2.png')} />
                        </TouchableOpacity>
                     </View> : <View></View>
               }

               {
                  star === 1 ?
                     <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity onPress={() => setStar(1)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setStar(2)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(3)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(4)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star2.png')} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setStar(5)}>
                           <Image
                              style={styles.star}
                              resizeMode='cover'
                              source={require('../../../../assets/images/star2.png')} />
                        </TouchableOpacity>
                     </View> : <View></View>
               }
            </View>

            {/* Cmt */}
            <View>
               <TextInput
                  value={text}
                  onChangeText={(text) => setText(text)}
                  placeholder='Write a comment...'
                  style={{ height: 100, width: '100%', borderWidth: 1, borderColor: 'gray', borderRadius: 8, marginTop: 10, padding: 12 }}
                  multiline={true}
                  numberOfLines={4} />
            </View>

            {/* Upload image - send cmt */}
            <View>
               <TouchableOpacity
                  style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: 'black', paddingVertical: 15, marginTop: 10 }}
                  onPress={() => handleSendCmt()}>
                  <Text style={{ color: 'white', fontSize: 14, fontWeight: '800' }}>Send</Text>
               </TouchableOpacity>
            </View>

         </ScrollView>

         <ProgressDialog
            visible={isLoading}
            title="Đang tải dữ liệu"
            message="Vui lòng đợi trong giây lát..." />

      </View>

   )
}

export default Comment

const styles = StyleSheet.create({
   iconTopBar: {
      width: 24, height: 24,
   },
   textProfile: {
      textAlign: 'center',
      color: 'black',
      fontSize: 18,
      fontWeight: '800',
   },
   imgProduct: {
      width: 80, height: 80,
      borderRadius: 8
   },
   star: {
      width: 24, height: 24,
      marginRight: 4,
   },
})