import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const ProductSortDialog = ({ onSort, isVisible }) => {
  const [sort, setSort] = useState(''); // ['name', 'price', 'rating'
  const [modalVisible, setModalVisible] = useState(false);

  const handleSort = (sort) => {
    onSort(sort);
    setModalVisible(!modalVisible);
  }

  return (
    <Modal isVisible={isVisible} backdropOpacity={0.5}>
      <View style={styles.container}>
        <Text style={{textAlign: 'center', fontWeight: '800', fontSize: 16, color: 'black'}}>Sort by</Text>
        <TouchableOpacity style={styles.sortOption} onPress={() => handleSort('down')}>
          <Text>Decrease</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption} onPress={() => handleSort('up')}>
          <Text>Ascending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortOption} onPress={() => handleSort('rate')}>
          <Text>Rate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sortButton} onPress={() => handleSort('')}>
          <Text style={{color: 'white', fontWeight: '800', fontSize: 16, textAlign: 'center'}}>Cancel</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.sortButton} onPress={() => handleSort(sort)} >
          <Text style={{color: 'white', fontWeight: '800', fontSize: 16, textAlign: 'center'}}>Sort</Text>
        </TouchableOpacity> */}
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

export default ProductSortDialog;
