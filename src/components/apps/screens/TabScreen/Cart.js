import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Entypo, AntDesign } from '@expo/vector-icons';
import { AppContext } from '../../AppContext';
import { UserContext } from '../../../users/UserContext';

const Cart = (props) => {
  const { navigation } = props;
  const {user} = useContext(UserContext);
  const {onGetOrderDetailsByIdOrder, listCart, setListCart, onGetProductById, title} = useContext(AppContext);

  //Lay danh sach san phma trong gio hang
  useEffect(() => {
    const getListCart = async () => {
      try {
        const response = await onGetOrderDetailsByIdOrder(user.cart);
        console.log("List cart: ", response);
        for (let i = 0; i < response.length; i++) {
          const productId = response[i].idProduct;
          console.log("Product id: ", productId);
          const product = await onGetProductById(productId);
          //console.log(product);
          response[i].imageurl = product.listImage[0];
          console.log("Product image: ", product.listImage[0]); 
          response[i].prodName = product.name;
          response[i].price = product.price * response[i].amount;
        }
        setListCart(response);
      } catch (error) {
        console.log("Get list cart error: ", error);
      }
    };
    getListCart();
  }, [title]);

  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ flex: 1, justifyContent: 'center', marginTop: 50, paddingHorizontal: 20, backgroundColor: 'white' }}>
        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '800', marginTop: 18, marginBottom: 12 }}>My cart</Text>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={listCart}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) =>
              <Item
                prodName={item.prodName}
                imageurl={item.imageurl}
                price={item.price}
                quality={item.amount} />
            }
            keyExtractor={item => item._id}
          />
        </SafeAreaView>
        <View style={{ height: 150, justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#ffff', borderRadius: 10, paddingStart: 11 }}>
            <TextInput>Enter your promo code</TextInput>
            <AntDesign name="rightsquare" size={44} color="black" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
            <Text style={{ fontSize: 20 }}>Total:</Text>
            <Text style={{ fontSize: 20 }}>$ 95.00</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate("CheckOut")} style={{ backgroundColor: '#000', height: 60, borderRadius: 8, flexDirection: 'column', justifyContent: 'center' }}>
            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Check out</Text>
            {/* Bấm đây nhảy qua check out */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Cart

const Item = ({ prodName, price, quality, imageurl }) => (
  <View style={styles.item}>
    <View style={{ flexDirection: 'row' }}>
      <Image source={{ uri: imageurl }} style={styles.image} />
      <View style={{ justifyContent: 'space-between', paddingVertical: 5, paddingStart: 10 }}>
        <View>
          <Text style={{ fontSize: 14 }}>{prodName}</Text>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>$ {price}</Text>
        </View>
        <View style={styles.qualityRange}>
          <Entypo name="squared-plus" size={30} color="black" />
          <Text style={{ fontSize: 18 }}>{quality}</Text>
          <Entypo name="squared-minus" size={30} color="black" />
        </View>
      </View>
    </View>
    <AntDesign name="closecircleo" size={20} color="black" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingBottom: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.2,
    borderBottomColor: 'gray',

  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
  },
  qualityRange:
  {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    prodName: 'Iphone 14',
    price: '50.00',
    quality: '01',
    imageurl: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    prodName: 'Iphone 14',
    price: '50.00',
    quality: '01',
    imageurl: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    prodName: 'Second Item',
    price: '50.00',
    quality: '01',
    imageurl: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    prodName: 'Second Item',
    price: '50.00',
    quality: '01',
    imageurl: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    prodName: 'Third Item',
    price: '50.00',
    quality: '01',
    imageurl: 'https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg',
  },
];