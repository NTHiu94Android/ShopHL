import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import styleOrderDetail from '../../../style/styleOrderDetail';
import { UserContext } from '../../../users/UserContext';
import { AppContext } from '../../AppContext';

import ProgressDialog from 'react-native-progress-dialog';

const OrderDetail = (props) => {
    const { navigation } = props;
    const { item } = props.route.params;
    const { user } = useContext(UserContext);
    const { onGetOrderDetailsByIdOrder, countOrderDetail, onGetProductById } = useContext(AppContext);

    const [listOrderDetail, setListOrderDetail] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        getOrderDetail();
    }, [countOrderDetail]);

    const getOrderDetail = async () => {
        setIsLoading(true);
        const res = await onGetOrderDetailsByIdOrder(item._id);
        for (let i = 0; i < res.length; i++) {
            const product = await onGetProductById(res[i].idProduct);
            //console.log('product on order detail: ', product);
            res[i].product = product;
        }
        //console.log('res list order detail: ', res);
        if (res != undefined) {
            setListOrderDetail(res);
        } else {
            setListOrderDetail([]);
        }
        setIsLoading(false);
    };


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styleOrderDetail.container}>
                <View style={styleOrderDetail.header}>
                    <View style={styleOrderDetail.viewHeader}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image
                                style={styleOrderDetail.icBack}
                                source={require('../../../../assets/images/back.png')}
                                resizeMode="cover"></Image>
                        </TouchableOpacity>
                        <Text style={styleOrderDetail.txtOrderDetail}>Order Detail</Text>
                    </View>
                </View>

                <ScrollView style={{ flex: 1, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
                    <View style={styleOrderDetail.body}>
                        <View style={styleOrderDetail.viewTxtOrder}>
                            <View style={styleOrderDetail.viewOrder}>
                                <Text numberOfLines={1} style={styleOrderDetail.txtOrder}>Order No{item._id}</Text>
                                <Text>{item.orderDate}</Text>
                            </View>
                            <View style={[styleOrderDetail.viewDetail,]}>
                                <View style={styleOrderDetail.viewTotal}>
                                    <Text style={styleOrderDetail.txtTitle}>Total:</Text>
                                    <Text style={styleOrderDetail.txtValue} >${item.totalPrice}</Text>
                                </View>
                                <View style={styleOrderDetail.viewTotal}>
                                    <Text style={styleOrderDetail.txtTitle}>Payments:</Text>
                                    <Text style={styleOrderDetail.txtValuePayments}>Cash</Text>
                                </View>
                                <View style={styleOrderDetail.viewStatus}>
                                    <Text style={styleOrderDetail.txtTitle}>Status:</Text>
                                    {item.status == 'Delivered' && <Text style={styleOrderDetail.txtValueStatus}>{item.status}</Text>}
                                    {item.status == 'Canceled' && <Text style={[styleOrderDetail.txtValueStatus, { color: 'red' }]}>{item.status}</Text>}
                                    {item.status == 'Confirmed' && <Text style={[styleOrderDetail.txtValueStatus]}>{item.status}</Text>}
                                    {item.status == 'Processing' && <Text style={[styleOrderDetail.txtValueStatus, { color: '#FFD700' }]}>{item.status}</Text>}
                                </View>
                            </View>
                        </View>

                        {/* view custom */}
                        <View style={styleOrderDetail.viewTxtCustom}>
                            <View style={styleOrderDetail.viewCustomer}>
                                <Text style={styleOrderDetail.txtCustomer}>Customer Information</Text>
                            </View>
                            <View style={styleOrderDetail.viewInformation}>
                                <View style={styleOrderDetail.viewName}>
                                    <Text style={styleOrderDetail.txtTitle}>Name:</Text>
                                    <Text style={styleOrderDetail.txtValue}>{user.name}</Text>
                                </View>
                                <View style={styleOrderDetail.viewTotal}>
                                    <Text style={styleOrderDetail.txtTitle}>Phone number:</Text>
                                    <Text style={styleOrderDetail.txtValue}>{user.numberPhone}</Text>
                                </View>
                                <View style={styleOrderDetail.viewStatus}>
                                    <Text style={styleOrderDetail.txtTitle}>Address:</Text>
                                    <Text style={styleOrderDetail.txtValue}>{user.address}</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                    <View style={styleOrderDetail.footer}>
                        <View style={[styleOrderDetail.viewCustomer, {flexDirection: 'column'}]}>
                            <Text style={[styleOrderDetail.txtCustomer, {marginBottom: 16, width: '100%'}]}>List product</Text>
                            {
                                listOrderDetail.length > 0 &&
                                listOrderDetail.map((item) => <Item key={item._id} item={item} />)
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>

            <ProgressDialog
                visible={isLoading}
                title="Đang tải dữ liệu"
                message="Vui lòng đợi trong giây lát..."
            />

        </View>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    listItem: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 8,
        // borderBottomWidth: 0.5,
        // borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    imgLst: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    listItemName: {
        flex: 5,
        paddingStart: 20,
    },
    TextlstName: {
        fontWeight: 'normal',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 5,
    },
    TextlstPrice: {
        fontWeight: 'bold',
        fontSize: 16,
        fontWeight: '700',
        marginTop: 5,
    },
    listItemIcon: {
        flex: 1,
        justifyContent: 'space-between',
    },
});

const Item = ({ item }) => {
    return (
        <View style={styles.listItem}>
            <Image source={{ uri: item.product.listImage[0] }} style={styles.imgLst} />
            <View style={styles.listItemName}>
                <Text style={styles.TextlstName}>{item.product.name}</Text>
                <Text style={styles.TextlstPrice}>$ {item.product.price} * {item.amount}</Text>
            </View>
        </View>

    );
};