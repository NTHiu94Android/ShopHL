import { StyleSheet } from 'react-native'

const styleOrderDetail = StyleSheet.create({
  /* footer */

  footer: {
    marginHorizontal: 10,
    paddingHorizontal: 5,
    borderRadius: 4,
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    marginBottom: 6,
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
  },

  txtCustomer:{
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    alignItems: 'flex-start',
  },
  viewCustomer:{
    padding: 18,
    flexDirection: 'row',
    color: 'black',
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor: 'white',

  },

  viewTxtCustom:{
    marginHorizontal: 10,
    paddingHorizontal: 5,
    marginTop: 20,
    borderRadius: 4,
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    marginBottom: 6,
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
    paddingTop: 15,
    flexDirection: 'row',
    color: 'black',
    justifyContent:'space-around',
    paddingVertical: 15,
    flexDirection: 'row',
    color: 'black',
    justifyContent:'space-around',
    backgroundColor: 'white',

  },
  viewDetail:{
    marginTop: 1,
  },

  txtOrder:{
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
    alignItems: 'flex-start',
    marginRight: 30,
    maxWidth: 200,
  },
  viewOrder:{
    flexDirection: 'row',
    color: 'black',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 18
  },

  viewTxtOrder:{
    marginHorizontal: 10,
    paddingHorizontal: 5,
    borderRadius: 4,
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    marginBottom: 6,
  },

  body: {
    marginTop: 30
  },

  /*
   */

  /* header */
  txtOrderDetail: {
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
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
  },
  /*
   */
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 30,
  },
})

export default styleOrderDetail
