import { StyleSheet } from 'react-native'

const styleOrderDetail = StyleSheet.create({
  /* footer */

  footer: {
    flex: 2,
  },
  /*
  */

  /* body */

  txtName:{
    fontSize: 16,
    marginRight: 30,
    fontSize: 16,
  },

  viewName:{
    paddingTop: 15,
    flexDirection: 'row',
    color: 'black',
    justifyContent:'space-around',
    backgroundColor: 'white',

  },
  viewInformation:{
    marginTop: 1,
    backgroundColor: 'white',
    height: 120,

  },

  txtCustomer:{
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    alignItems: 'flex-start',
    marginRight: 30,
  },
  viewCustomer:{
    paddingStart: 20,
    height: 40,
    flexDirection: 'row',
    color: 'black',
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',

  },

  viewTxtCustom:{
    flex: 3,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginTop: 20,
  },
 

  txtValueStatus:{
    flex: 1,
    color: 'green',
    fontSize: 16,
    marginRight: 30,
    marginStart: 15,
  },

  viewStatus:{
    paddingVertical: 15,
    flexDirection: 'row',
    color: 'black',
    justifyContent:'space-around',
    backgroundColor: 'white',

  },


  txtValuePayments:{
    flex: 1,
    color: 'black',
    fontSize: 16,
    marginRight: 30,
    marginStart: 15,
  },

  txtValue:{
    flex: 1,
    fontSize: 16,
    marginRight: 30,
    marginStart: 15,
  },
  txtTitle:{
    flex: 1,
    fontSize: 16,
    marginRight: 30,
    marginStart: 15,
  },

  viewTotal:{
    flex: 1,
    paddingTop: 15,
    flexDirection: 'row',
    color: 'black',
    justifyContent:'space-around',

    // justifyContent:'flex-start',

    backgroundColor: 'white',

  },
  viewDetail:{

    marginTop: 1,
    backgroundColor: 'white',
    height: 120,

  },

  txtOrder:{
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    alignItems: 'flex-start',
    marginRight: 30,
  },
  viewOrder:{
    paddingStart: 18,
    height: 40,
    flexDirection: 'row',
    color: 'black',
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',

  },

  viewTxtOrder:{
    flex: 3,
    marginHorizontal: 10,
    paddingHorizontal: 5,
    paddingVertical: 15,
  },

  body: {
    flex: 5,
  },

  /*
   */

  /* header */
  txtOrderDetail: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginStart: 70,
  },
  icBack: {
    width: 16,
    height: 16,
    marginEnd: 50,
  },
  viewHeader: {
    flexDirection: 'row',
    marginStart: 15,
    marginTop: 15,
  },
  header: {
    flex: 1,
  },
  /*
   */
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8'
  },
})

export default styleOrderDetail
