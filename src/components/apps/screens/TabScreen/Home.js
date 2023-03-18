import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, TextInput, ScrollView, Pressable, onSearch } from 'react-native'
import React, { useState } from 'react'


const Item = ({ item, onPress }) => (
    <TouchableOpacity onPress={onPress}>
        <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 15, marginRight: 15, width: 175, height: 230, padding: 16, marginBottom: 5 }}>
                <Image
                    style={{ width: 150, height: 180, position: 'relative' }}
                    resizeMode='cover'
                    source={{ uri: item.link, }}
                />
                <Image
                    style={{ width: 35, height: 35, position: 'absolute', marginLeft: 120, marginTop: 155 }}
                    resizeMode='cover'
                    source={require('../../../../assets/images/ic_shop.png')}
                />
                <Text style={{ height: 19, color: 'black', fontWeight: '400', fontSize: 14, lineHeight: 19.1, marginTop: 5 }}>
                    {item.field}
                </Text>
                <Text style={{ height: 19, color: 'black', fontWeight: '700', fontSize: 14, lineHeight: 19.1, marginTop: 5 }}>
                    {item.price}
                </Text>
            </View>

        </View>
    </TouchableOpacity>
);


const Home = (props) => {
    const { navigation } = props;
    const [selectedId, setSelectedId] = useState('');

    const seletedItem = (item) => {
        setSelectedId(item._id);
        console.log(item._id);
        navigation.navigate('ProductDetail', { item: item })
        //console.log("Homejs selectedId: ", selectedId);
    };


    const FlatListData = [
        {
            _id: "1",
            field: "SamSung S20",
            price: "$25",
            description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
            link: "https://cdn.tgdd.vn/Products/Images/42/217937/samsung-galaxy-s20-ultra-600x600-1-600x600.jpg",
            reviews: "4.5",
            status_review: "(50 reviews)",
        },
        {
            _id: "2",
            field: "Iphone 14",
            price: "$25",
            description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
            link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
            reviews: "4.5",
            status_review: "(50 reviews)",
        },
        {
            _id: "3",
            field: "Iphone 14",
            price: "$25",
            description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
            link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
            reviews: "4.5",
            status_review: "(50 reviews)",
        },
        {
            _id: "4",
            field: "Iphone 14",
            price: "$25",
            description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
            link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
            reviews: "4.5",
            status_review: "(50 reviews)",
        },
        {
            _id: "5",
            field: "Iphone 14",
            price: "$25",
            description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
            link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
            reviews: "4.5",
            status_review: "(50 reviews)",
        },
        {
            _id: "6",
            field: "Iphone 14",
            price: "$25",
            description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
            link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
            reviews: "4.5",
            status_review: "(50 reviews)",
        },

        {
            _id: "7",
            field: "Iphone 14",
            price: "$25",
            description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
            link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
            reviews: "4.5",
            status_review: "(50 reviews)",
        },
        {
            _id: "8",
            field: "Iphone 14",
            price: "$25",
            description: "Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ",
            link: "https://cdn.tgdd.vn/Products/Images/42/247508/iphone-14-pro-tim-thumb-600x600.jpg",
            reviews: "4.5",
            status_review: "(50 reviews)",
        },
    ];

    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, marginTop: 10 }}>
                    <Image
                        style={{ width: 24, height: 24 }}
                        resizeMode='cover'
                        source={require('../../../../assets/images/ic_search.png')} />
                    <Image
                        style={{ width: 70, height: 80 }}
                        resizeMode='cover'
                        source={require('../../../../assets/images/ic_profile2.png')} />
                    <Image
                        style={{ width: 24, height: 24 }}
                        resizeMode='cover'
                        source={require('../../../../assets/images/ic_ring.png')} />
                </View>

                <ScrollView horizontal={true}>
                    <View style={{ paddingEnd: 5 }}>
                        <Image
                            style={{ width: 35, height: 40 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_ip.png')} />
                    </View>
                    <View style={{ marginTop: 15, paddingEnd: 5, paddingLeft: 10 }}>
                        <Image
                            style={{ width: 70, height: 11 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_samsung.png')} />
                    </View>
                    <View style={{ paddingEnd: 5, paddingLeft: 10 }}>
                        <Image
                            style={{ width: 35, height: 40 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_xiomi.png')} />
                    </View>
                    <View style={{ marginTop: 15, paddingEnd: 5, paddingLeft: 10 }}>
                        <Image
                            style={{ width: 70, height: 11 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_sony.png')} />
                    </View>
                    <View style={{ paddingEnd: 5, paddingLeft: 10 }}>
                        <Image
                            style={{ width: 35, height: 40 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_xiomi.png')} />
                    </View>
                    <View style={{ marginTop: 15, paddingEnd: 5, paddingLeft: 10 }}>
                        <Image
                            style={{ width: 70, height: 11 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_sony.png')} />
                    </View>
                    <View style={{ marginTop: 15, paddingEnd: 5, paddingLeft: 10 }}>
                        <Image
                            style={{ width: 70, height: 11 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_sony.png')} />
                    </View>
                    <View style={{ paddingEnd: 5, paddingLeft: 10 }}>
                        <Image
                            style={{ width: 35, height: 40 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_xiomi.png')} />
                    </View>
                    <View style={{ marginTop: 15, paddingEnd: 5, paddingLeft: 10 }}>
                        <Image
                            style={{ width: 70, height: 11 }}
                            resizeMode='cover'
                            source={require('../../../../assets/images/ic_sony.png')} />
                    </View>

                </ScrollView>

                {/* <FlatList
                    data={FlatListData}
                    renderItem={renderItem}
                    keyExtractor={(item) => item._id}
                    extraData={selectedId}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                /> */}
                {
                    FlatListData.map((item) =>
                        <Item key={item._id} item={item} onPress={() => seletedItem(item)} />
                    )
                }
            </View>
        </ScrollView>
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


})