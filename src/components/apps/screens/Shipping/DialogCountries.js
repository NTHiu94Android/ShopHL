import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const Item = ({ name, click }) => (
   <TouchableOpacity onPress={() => click(name)}>
      <Text style={{ fontSize: 16, fontWeight: '600', marginVertical: 2 }}>{name}</Text>
   </TouchableOpacity>
);

const DialogCountries = ({ onName, isVisible }) => {
   const [modalVisible, setModalVisible] = useState(false);

   const handleClick = (name) => {
      onName(name);
      setModalVisible(!modalVisible);
   }

   return (
      <Modal 
      isVisible={isVisible} backdropOpacity={0.5}
      onRequestClose={() => {
         setModalVisible(!modalVisible);
      }}>
         <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
               {
                  countries.map((item) => <Item key={item.id} name={item.name} click={handleClick} />)
               }
            </View>
         </ScrollView>
      </Modal>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: 'white',
      padding: 16,
      borderRadius: 8,
   },
   sortOption: {
      paddingVertical: 8,
   },
   sortButton: {
      backgroundColor: 'black',
      borderRadius: 8,
      padding: 12,
      marginTop: 16,
   },
});

export default DialogCountries;

const countries = [
   //64 tinh thanh or viet nam
   {
      id: 1,
      name: 'Bac Lieu',
   },
   {
      id: 2,
      name: 'Binh Dinh',
   },
   {
      id: 3,
      name: 'Binh Duong',
   },
   {
      id: 4,
      name: 'Binh Phuoc',
   },
   {
      id: 5,
      name: 'Binh Thuan',
   },
   {
      id: 6,
      name: 'Ca Mau',
   },
   {
      id: 7,
      name: 'Can Tho',
   },
   {
      id: 8,
      name: 'Da Nang',
   },
   {
      id: 9,
      name: 'Dak Lak',
   },
   {
      id: 10,
      name: 'Dak Nong',
   },
   {
      id: 11,
      name: 'Dien Bien',
   },
   {
      id: 12,
      name: 'Thai Nguyen',
   },
   {
      id: 13,
      name: 'Hai Duong',
   },
   {
      id: 14,
      name: 'Hai Phong',
   },
   {
      id: 15,
      name: 'Ha Nam',
   },
   {
      id: 16,
      name: 'Ha Noi',
   },
   {
      id: 17,
      name: 'Ha Tinh',
   },
   {
      id: 18,
      name: 'Hau Giang',
   },
   {
      id: 19,
      name: 'Hoa Binh',
   },
   {
      id: 20,
      name: 'Hung Yen',
   },
   {
      id: 21,
      name: 'Khanh Hoa',
   },
   {
      id: 22,
      name: 'Kien Giang',
   },
   {
      id: 23,
      name: 'Kon Tum',
   },
   {
      id: 24,
      name: 'Lai Chau',
   },
   {
      id: 25,
      name: 'Tien Giang',
   },
   {
      id: 26,
      name: 'Tra Vinh',
   },
   {
      id: 27,
      name: 'Tuyen Quang',
   },
   {
      id: 28,
      name: 'Vinh Long',
   },
   {
      id: 29,
      name: 'Vinh Phuc',
   },
   {
      id: 30,
      name: 'Yen Bai',
   },
   {
      id: 31,
      name: 'An Giang',
   },
   {
      id: 32,
      name: 'Ba Ria - Vung Tau',
   },
   {
      id: 33,
      name: 'Bac Giang',
   },
   {
      id: 34,
      name: 'Bac Kan',
   },
   {
      id: 35,
      name: 'Bac Ninh',
   },
   {
      id: 36,
      name: 'Ben Tre',
   },
   {
      id: 37,
      name: 'Binh Dinh',
   },
   {
      id: 38,
      name: 'Binh Duong',
   },
   {
      id: 39,
      name: 'Binh Phuoc',
   },
   {
      id: 40,
      name: 'Binh Thuan',
   },
   {
      id: 41,
      name: 'Ca Mau',
   },
   {
      id: 42,
      name: 'Can Tho',
   },
   {
      id: 43,
      name: 'Da Nang',
   },
   {
      id: 44,
      name: 'Dak Lak',
   }
];
