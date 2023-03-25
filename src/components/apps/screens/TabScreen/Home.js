import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, ScrollView, Pressable, onSearch } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { AppContext } from '../../../apps/AppContext';

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


const Home = (props) => {
    const { navigation } = props;
    const { onGetProducts } = useContext(AppContext);
    const [listProduct, setListProduct] = useState([]);
    //const [selectedId, setSelectedId] = useState('');
    // const listData = [
    //     {
    //         _id: "1",
    //         field: "SamSung S20",
    //         price: "$25",
    //         description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
    //         link: "https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg",
    //         reviews: "4.5",
    //         status_review: "(50 reviews)",
    //     },
    //     {
    //         _id: "2",
    //         field: "Iphone 14",
    //         price: "$25",
    //         description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
    //         link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
    //         reviews: "4.5",
    //         status_review: "(50 reviews)",
    //     },
    //     {
    //         _id: "3",
    //         field: "Iphone 14",
    //         price: "$25",
    //         description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
    //         link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
    //         reviews: "4.5",
    //         status_review: "(50 reviews)",
    //     },
    //     {
    //         _id: "4",
    //         field: "Iphone 14",
    //         price: "$25",
    //         description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
    //         link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
    //         reviews: "4.5",
    //         status_review: "(50 reviews)",
    //     },
    //     {
    //         _id: "5",
    //         field: "Iphone 14",
    //         price: "$25",
    //         description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
    //         link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
    //         reviews: "4.5",
    //         status_review: "(50 reviews)",
    //     },
    //     {
    //         _id: "6",
    //         field: "Iphone 14",
    //         price: "$25",
    //         description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
    //         link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
    //         reviews: "4.5",
    //         status_review: "(50 reviews)",
    //     },

    //     {
    //         _id: "7",
    //         field: "Iphone 14",
    //         price: "$25",
    //         description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
    //         link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
    //         reviews: "4.5",
    //         status_review: "(50 reviews)",
    //     },
    //     {
    //         _id: "8",
    //         field: "Iphone 14",
    //         price: "$25",
    //         description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
    //         link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
    //         reviews: "4.5",
    //         status_review: "(50 reviews)",
    //     },
    // ];

    useEffect(() => {
        const getData = async () => {
            const list = await onGetProducts();
            //console.log(list);
            setListProduct(list);
        };
        getData();
    }, []);


    // const selectedItem = (item) => {
    //     setSelectedId(item._id);
    //     navigation.navigate('ProductDetail', { item: item });
    // };
    // const renderItem = ({ item }) => {
    //     return (
    //         <Item
    //             item={item}
    //             onPress={() => selectedItem(item)} />
    //     )
    // }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, marginTop: 50, backgroundColor: 'white' }}>
                <View style={styles.container}>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, marginTop: 10, paddingHorizontal: 12 }}>
                        <Image
                            style={{ width: 24, height: 24 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_search.png')} />
                        <Image
                            style={{ width: 50, height: 50 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_profile2.png')} />
                        <Image
                            style={{ width: 24, height: 24 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_ring.png')} />
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <ScrollView style={{ marginVertical: 12, height: 90 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ marginEnd: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 35, height: 40 }}
                                    resizeMode='cover'
                                    source={require('../../../../assets/images/ic_ip.png')} />
                                <Text>Iphone</Text>
                            </View>
                            <View style={{ marginEnd: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 55, height: 40 }}
                                    resizeMode='cover'
                                    source={require('../../../../assets/images/logo_samsung.png')} />
                                <Text>Samsung</Text>
                            </View>
                            <View style={{ marginEnd: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 35, height: 40, marginHorizontal: 8, borderRadius: 8 }}
                                    resizeMode='cover'
                                    source={require('../../../../assets/images/ic_xiomi.png')} />
                                <Text>Xiaomi</Text>
                            </View>
                            <View style={{ marginEnd: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 35, height: 40 }}
                                    resizeMode='cover'
                                    source={require('../../../../assets/images/ic_ip.png')} />
                                <Text>Iphone</Text>
                            </View>
                            <View style={{ marginEnd: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 55, height: 40 }}
                                    resizeMode='cover'
                                    source={require('../../../../assets/images/logo_samsung.png')} />
                                <Text>Samsung</Text>
                            </View>
                            <View style={{ marginEnd: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 35, height: 40, marginHorizontal: 8, borderRadius: 8 }}
                                    resizeMode='cover'
                                    source={require('../../../../assets/images/ic_xiomi.png')} />
                                <Text>Xiaomi</Text>
                            </View>
                            <View style={{ marginEnd: 16, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ width: 35, height: 40 }}
                                    resizeMode='cover'
                                    source={require('../../../../assets/images/ic_ip.png')} />
                                <Text>Iphone</Text>
                            </View>

                        </ScrollView>
                        <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {
                                listProduct ?
                                    listProduct.map((item) =>
                                        <Item key={item._id} item={item} onPress={() => navigation.navigate('ProductDetail', { item: item })} />
                                    ) : null
                            }
                        </View>
                    </ScrollView>

                    {/* <FlatList
                        data={listProduct}
                        renderItem={renderItem}
                        keyExtractor={(item) => item._id}
                        extraData={selectedId}
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                    /> */}


                </View>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
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


})