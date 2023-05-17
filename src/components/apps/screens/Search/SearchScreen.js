import { StyleSheet, Text, View, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import back from '../../../backEvent/back';
import { AppContext } from '../../AppContext';

const Item = ({ item, onPress }) => (
  <TouchableOpacity style={{ flexWrap: 'wrap', width: '49%', marginBottom: 10 }} onPress={onPress}>
    <View style={styles.itemContainer}>
      <View style={{ width: '100%', height: '100%', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 12 }}>
        <Image
          style={{ width: '98%', height: 150, position: 'relative', borderRadius: 10 }}
          resizeMode='cover'
          source={{ uri: item.listImage[0], }} />
        <Image
          style={{ width: 35, height: 35, position: 'absolute', right: 13, bottom: 60 }}
          resizeMode='cover'
          source={require('../../../../assets/images/ic_shop.png')} />
        <Text style={{ height: 19, color: 'black', fontWeight: '400', fontSize: 14, lineHeight: 19.1, marginTop: 5 }}>
          {item.name}</Text>
        <Text style={{ height: 19, color: 'black', fontWeight: '700', fontSize: 14, lineHeight: 19.1, marginTop: 5 }}>
          Price: {item.price}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const SearchScreen = (props) => {
  const { navigation } = props;
  const { onGetProductsByName } = useContext(AppContext);
  const [listProduct, setListProduct] = useState('');
  const [name, setName] = useState('');
  back(navigation);

  useEffect(() => {
    getListProduct(name);
  }, [name]);

  const getListProduct = async (name) => {
    const list = await onGetProductsByName(name);
    //console.log(list);
    setListProduct(list);
  }

  const handleClear = () => {
    setName('');
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 12 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 12, marginTop: 48, marginBottom: 12 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.iconTopBar}
            resizeMode='cover'
            source={require('../../../../assets/images/back2.png')} />
        </TouchableOpacity>

        <Text style={styles.textProfile}>Search</Text>
        <View style={styles.iconTopBar}></View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'white' }}>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter name product"
          clearButtonMode="never"
          style={styles.input} />
        {
          name !== '' ?
            <TouchableOpacity style={{ position: 'absolute', right: 24, top: 20 }} onPress={() => handleClear()}>
              <Image source={require('../../../../assets/images/del.png')} style={{ width: 20, height: 20 }} />
            </TouchableOpacity> : null
        }

        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {
            listProduct ?
              listProduct.map((item) =>
                <Item key={item._id} item={item} onPress={() => navigation.navigate('ProductDetail', { item: item })} />
              ) : null
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    position: 'relative',
    paddingRight: 36
  },
  itemContainer: {
    flex: 1,
    width: '100%',
    elevation: 5,
    shadowColor: 'grey',
    borderRadius: 4,
    shadowOffset: {
      width: 1,
      height: 3
    },
    backgroundColor: 'white',
    shadowRadius: 5,
    shadowOpacity: 0.3
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