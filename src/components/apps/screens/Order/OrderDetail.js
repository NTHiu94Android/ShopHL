import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styleOrderDetail from '../../../style/styleOrderDetail';

const OrderDetail = (props) => {
    const { navigation } = props;
    return (
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
            <View style={styleOrderDetail.body}>
                <View style={styleOrderDetail.viewTxtOrder}>
                    <View style={styleOrderDetail.viewOrder}>
                        <Text style={styleOrderDetail.txtOrder}>Order No238562312</Text>
                        <Text>20/03/2020</Text>
                    </View>
                    <View style={styleOrderDetail.viewDetail}>
                        <View style={styleOrderDetail.viewTotal}>
                            <Text style={styleOrderDetail.txtTitle}>Total:</Text>
                            <Text style={styleOrderDetail.txtValue} >$150</Text>
                        </View>
                        <View style={styleOrderDetail.viewTotal}>
                            <Text style={styleOrderDetail.txtTitle}>Payments:</Text>
                            <Text style={styleOrderDetail.txtValuePayments}>Cash</Text>
                        </View>
                        <View style={styleOrderDetail.viewStatus}>
                            <Text style={styleOrderDetail.txtTitle}>Status:</Text>
                            <Text style={styleOrderDetail.txtValueStatus}>Success</Text>
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
                            <Text style={styleOrderDetail.txtValue} >Phạm Quốc Tín</Text>
                        </View>
                        <View style={styleOrderDetail.viewTotal}>
                            <Text style={styleOrderDetail.txtTitle}>Phone number:</Text>
                            <Text style={styleOrderDetail.txtValue}>0987654321</Text>
                        </View>
                        <View style={styleOrderDetail.viewStatus}>
                            <Text style={styleOrderDetail.txtTitle}>Address:</Text>
                            <Text style={styleOrderDetail.txtValue}>Bình Dương</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styleOrderDetail.footer}></View>
        </View>
    )
}

export default OrderDetail

const styles = StyleSheet.create({})