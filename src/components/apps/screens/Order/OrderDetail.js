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
    const { onGetOrderDetailsByIdOrder, countOrderDetail, onGetProductById, onGetCommentByIdUser, onGetCommentByIdUserAndIdProduct } = useContext(AppContext);

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
            const cmt = await onGetCommentByIdUserAndIdProduct(user._id, product._id);
            console.log('cmt: ' + i, cmt);
            if (cmt.length > 0) {
                res[i].isCmt = true;
            } else {
                res[i].isCmt = false;
            }
            res[i].product = product;
            res[i].status = item.status;
        }
        console.log('res list order detail: ', res.cmt);
        if (res != undefined) {
            setListOrderDetail(res);
        } else {
            setListOrderDetail([]);
        }
        setIsLoading(false);
    };

    const gotoComment = (item) => {
        navigation.navigate('Comment', { item });
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
                        <View style={[styleOrderDetail.viewCustomer, { flexDirection: 'column' }]}>
                            <Text style={[styleOrderDetail.txtCustomer, { marginBottom: 16, width: '100%' }]}>List product</Text>
                            {
                                listOrderDetail.length > 0 &&
                                listOrderDetail.map((item) => <Item key={item._id} item={item} gotoComment={() => gotoComment(item)} />)
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
        flexDirection: 'row',
        paddingVertical: 8,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        // borderBottomWidth: 0.5,
        // borderColor: 'rgba(0, 0, 0, 0.2)',
    },
    imgLst: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    listItemName: {
        paddingStart: 20,
    },
    TextlstName: {
        fontWeight: 'normal',
        fontSize: 14,
        fontWeight: '400',
        marginBottom: 5,
        width: 150,
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
    btnReview: {
        backgroundColor: 'black',
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5, margin: 5
    },
    textReview: {
        color: 'white',
        fontSize: 14,
    },
});

const Item = ({ item, gotoComment }) => {
    console.log("Itemmmmmmmmmmmmmm: ", item.isCmt);
    return (
        <View style={styles.listItem}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={{ uri: item.product.listImage[0] }} style={styles.imgLst} />
                <View style={styles.listItemName}>
                    <Text numberOfLines={1} style={styles.TextlstName}>{item.product.name}</Text>
                    <Text style={styles.TextlstPrice}>$ {item.product.price} * {item.amount}</Text>
                </View>
            </View>

            <View >
                {
                    item.status == 'Delivered' && item.isCmt == false ?
                        <TouchableOpacity style={styles.btnReview} onPress={() => gotoComment()}>
                            <Text style={styles.textReview}>Review</Text>
                        </TouchableOpacity> :
                        <TouchableOpacity style={[styles.btnReview, { backgroundColor: '#CCCCCC' }]}>
                            <Text style={styles.textReview}>Review</Text>
                        </TouchableOpacity>
                }
            </View>

        </View>

    );
};