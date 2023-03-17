import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const data = [
  {
    _id: "No238562312",
    date: "20/03/2020",
    quantity: 3,
    totalAmount: 140,
    status: "Delivered"
  },
  {
    _id: "No238562313",
    date: "20/03/2020",
    quantity: 8,
    totalAmount: 440,
    status: "Delivered"
  },
  {
    _id: "No238562314",
    date: "20/03/2020",
    quantity: 5,
    totalAmount: 250,
    status: "Delivered"
  },
];

const Item = ({ item, onpress }) => (
  <View style={styles.containerItem}>
    <View style={styles.rowItem}>
      <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>Order {item._id}</Text>
      <Text style={{ fontSize: 16, fontWeight: '400' }}>{item.date}</Text>
    </View>
    <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', marginVertical: 10 }}></View>
    <View style={styles.rowItem}>
      <View style={styles.rowItem}>
        <Text style={{ fontSize: 16, fontWeight: '400' }}>Quantity: </Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>{item.quantity}</Text>
      </View>
      <View style={styles.rowItem}>
        <Text style={{ fontSize: 16, fontWeight: '400' }}>Total Amount: </Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>{item.totalAmount}</Text>
      </View>
    </View>
    <View style={[styles.rowItem, { marginTop: 16 }]}>
      <TouchableOpacity onPress={onpress} style={styles.buttonDetail}>
        <Text style={styles.textDetail}>Detail</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 16, fontWeight: '600', color: '#27AE60' }}>{item.status}</Text>
    </View>
  </View>
);
const Delivered = (props) => {
  const { navigation } = props;
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={styles.container}>
        {
          data.map((item) => <Item key={item._id} item={item} onpress={() => navigation.navigate('OrderDetail')} />)
        }
      </View>
    </ScrollView>
  )
}

export default Delivered

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: 'white',
  },
  containerItem: {
    flexDirection: 'column',
    padding: 12,
    backgroundColor: 'white',
    shadowColor: 'grey',
    borderRadius: 4,
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    marginBottom: 6
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonDetail: {
    backgroundColor: 'black',
    width: 100,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  },
  textDetail: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  }
})