import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../../AppContext';
import { UserContext } from '../../../../users/UserContext';

const Item = ({ item, onpress }) => (
  <View style={styles.containerItem}>
    <View style={styles.rowItem}>
      <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>Order {item._id}</Text>
      <Text style={{ fontSize: 16, fontWeight: '400' }}>{item.orderDate}</Text>
    </View>
    <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', marginVertical: 10 }}></View>
    <View style={styles.rowItem}>
      <View style={styles.rowItem}>
        <Text style={{ fontSize: 16, fontWeight: '400' }}>Quantity: </Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>{item.quantity}</Text>
      </View>
      <View style={styles.rowItem}>
        <Text style={{ fontSize: 16, fontWeight: '400' }}>Total Amount: </Text>
        <Text style={{ fontSize: 16, fontWeight: '600', color: 'black' }}>{item.totalPrice}</Text>
      </View>
    </View>
    <View style={[styles.rowItem, { marginTop: 16 }]}>
      <TouchableOpacity onPress={onpress} style={styles.buttonDetail}>
        <Text style={styles.textDetail}>Detail</Text>
      </TouchableOpacity>
      {
        item.status == 'Processing' && <Text style={{ fontSize: 16, fontWeight: '600', color: '#FFD700' }}>{item.status}</Text>
      }
      {
        item.status == 'Confirmed' && <Text style={{ fontSize: 16, fontWeight: '600', color: '#27AE60' }}>{item.status}</Text>
      }
    </View>
  </View>
);

const Processing = (props) => {
  const { navigation } = props;
  const { onGetOrderByIdUserAndStatus, listProcessing, setListProcessing, countOrderDetail, setCountOrderDetail } = useContext(AppContext);
  const { user } = useContext(UserContext);

  useEffect(() => {
    getOrderByIdUserAndStatus();
  }, []);

  const getOrderByIdUserAndStatus = async () => {
    const res1 = await onGetOrderByIdUserAndStatus(user._id, 'Processing'); 
    const res2 = await onGetOrderByIdUserAndStatus(user._id, 'Confirmed'); 
    //console.log("Processing list: ", res1); 
    //console.log("Confirmed list: ", res2);
    setListProcessing([...res1, ...res2]);
  };

  const gotoOrderDetail = (item) => {
    setCountOrderDetail(countOrderDetail + 1);
    navigation.navigate('OrderDetail', { item });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={styles.container}>
        {
          listProcessing.length > 0 && 
          listProcessing.map((item) => <Item key={item._id} item={item} onpress={() => gotoOrderDetail(item)} />)
        }
      </View>
    </ScrollView>
  )
}

export default Processing

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
    elevation: 5,
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
});

const data = [
  {
    _id: "No238562312",
    orderDate: "20/03/2020",
    quantity: 3,
    totalPrice: 140,
    status: "Delivered"
  },
  {
    _id: "No238562313",
    orderDate: "20/03/2020",
    quantity: 8,
    totalPrice: 440,
    status: "Delivered"
  },
  {
    _id: "No238562314",
    orderDate: "20/03/2020",
    quantity: 5,
    totalPrice: 250,
    status: "Delivered"
  },
];