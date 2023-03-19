import { StyleSheet} from 'react-native'

const styleAddShippingAddress = StyleSheet.create({
  // footer
  txtSaveAddress: {},
  txtSaveAddress: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnSaveAddress: {
    backgroundColor: 'black',
    width: '90%',
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 5,
  },
    footer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 30,
    },

    //body
    txtCity: {
      color: 'black',
      fontWeight: 'bold',
    },
    viewCity: {
      borderColor:'#A9A9A9',
      borderWidth: 1, 
      paddingHorizontal: 15,
      backgroundColor: 'white',
      width: '90%',
      height: 65,
      marginHorizontal: 10,
      marginTop: 15,
      borderRadius: 5,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    imgDown: {
      width: 12,
      height: 12,
    },
    viewCountry: {
      paddingHorizontal: 15,
      backgroundColor: '#D3D3D3',
      width: '90%',
      height: 65,
      marginHorizontal: 10,
      marginTop: 15,
      borderRadius: 5,
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'center',
    },
    txtZipcode: {
      color: 'black',
      fontSize: 15,
      fontWeight: 'bold',
    },
    viewZipcode: {
      borderColor:'#A9A9A9',
      borderWidth: 1, 
      paddingStart: 15,
      backgroundColor: 'white',
      width: '90%',
      height: 65,
      marginHorizontal: 10,
      marginTop: 15,
      borderRadius: 5,
      justifyContent: 'center',
    },
    txtExFullName: {
      color: '#A9A9A9',
      fontSize: 15,
    },
    txtFullName: {
      fontSize: 12,
    },
    viewFullName: {
      paddingStart: 15,
      backgroundColor: '#D3D3D3',
      width: '90%',
      height: 65,
      marginHorizontal: 10,
      marginTop: 15,
      borderRadius: 5,
      justifyContent: 'center',
    },
    body: {
      justifyContent: 'center',
      alignItems: 'center', 
    },

    //header
  

    txtOrderDetail: {
      fontSize: 18,
      color: 'black',
      fontWeight: '800',
      marginStart: 70,
    },
    icBack: {
      width: 16,
      height: 16,
      marginEnd: 20,
    },
    viewHeader: {
      flexDirection: 'row',
      marginStart: 15,
      marginTop: 15,
      marginBottom: 20,
    },
    header: {
    },


    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingTop: 50,
    },
})
export default styleAddShippingAddress