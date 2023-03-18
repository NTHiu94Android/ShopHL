import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

const Favorite = () => {

  return (
    <View style={{ position: 'relative', flex: 1 }}>
      <View style={styles.header}>
        <Image source={require('../../../../assets/images/Kinhlup.png')} style={styles.Icon} />
        <Text style={styles.h1}>Favorites</Text>
        <Image source={require('../../../../assets/images/Cart.png')} style={styles.Icon} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add all to my cart</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />

    </View>

  )
}

export default Favorite

const styles = StyleSheet.create({
  header: {
    margin: 20,
    marginTop: "15%",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  Icon: {
    width: 24,
    height: 24,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 24,
    flex: 8,
    textAlign: 'center',
  },
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 0,
    padding: 10,
    paddingVertical: 20,
    marginHorizontal: 20,
    borderTopWidth: 0.5,
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.2)',
  },
  imgLst: {

  },
  listItemName: {
    flex: 5,
    paddingStart: 20,
  },
  TextlstName: {
    fontWeight: 'normal',
    fontSize: 20,
    marginBottom: 5,
  },
  TextlstPrice: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 5,
  },
  listItemIcon: {
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    position: 'absolute',
    width: '80%',
    alignItems: 'center',
    bottom: 20,
    backgroundColor: '#242424',
    borderRadius: 10,
    paddingVertical: 15,
    zIndex: 1,
    alignSelf: 'center',

  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '400'
  },

})

const renderItem = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Image source={require('../../../../assets/images/Iphone14.png')} style={styles.imgLst} />
      <View style={styles.listItemName}>
        <Text style={styles.TextlstName}>{item.name}</Text>
        <Text style={styles.TextlstPrice}>$ {item.price}</Text>
      </View>
      <View style={styles.listItemIcon}>
        <View style={{ alignSelf: 'flex-start', width: '100%', alignItems: 'center' }}>
          <Image source={require('../../../../assets/images/del.png')} style={{ width: 30, height: 30 }} />
        </View>
        <View style={{ alignSelf: 'flex-start', width: '100%', alignItems: 'center' }}>
          <Image source={require('../../../../assets/images/shop.png')} style={{ width: 30, height: 30 }} />
        </View>
      </View>
    </View>

  );
};


const data = [
  { id: 1, name: 'Iphone 14', price: 50.00, img: 'Iphone14.png' },
  { id: 2, name: 'Iphone 13', price: 50.00, img: 'Iphone14.png' },
  { id: 3, name: 'Iphone 12', price: 40.00, img: 'Iphone14.png' },
  { id: 4, name: 'Iphone 11', price: 30.00, img: 'Iphone14.png' },
  { id: 5, name: 'Iphone 10', price: 20.00, img: 'Iphone14.png' },
  { id: 6, name: 'Iphone 9', price: 10.00, img: 'Iphone14.png' },
  { id: 7, name: 'Iphone 8', price: 510.00, img: 'Iphone14.png' },
  { id: 8, name: 'Iphone 7', price: 100.00, img: 'Iphone14.png' },
  { id: 9, name: 'Iphone XS', price: 50.00, img: 'Iphone14.png' },
]