import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';

const Item = ({ name, click }) => (
   <TouchableOpacity onPress={() => click(name)}>
      <Text style={{ fontSize: 16, fontWeight: '600', marginVertical: 2 }}>{name}</Text>
   </TouchableOpacity>
);

const DialogCity = ({ onName, isVisible }) => {
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
         <View style={styles.container}>
            {
               countries.map((item) => <Item key={item.id} name={item.name} click={handleClick} />)
            }
         </View>
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

export default DialogCity;

const countries = [
   //64 tinh thanh or viet nam
   {
      id: 1,
      name: 'Viet Nam',
   },
   {
      id: 2,
      name: 'Australia',
   },
   {
      id: 3,
      name: 'Portugal',
   },
   {
      id: 4,
      name: 'France',
   },
   {
      id: 5,
      name: 'Italy',
   },
   {
      id: 6,
      name: 'Spain',
   },
   {
      id: 7,
      name: 'United Kingdom',
   },
   {
      id: 8,
      name: 'United States',
   },
];
