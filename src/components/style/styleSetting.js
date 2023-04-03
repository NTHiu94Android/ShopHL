import { StyleSheet } from 'react-native'


const styleSetting = StyleSheet.create({
  //footer
  txtFAQ: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  btnFAQ: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    marginVertical: 8
  },
  footer: {
    flex: 1,
    // backgroundColor: 'red',
  },
  //

  //body
  txtSales: {
    fontSize: 15,
    marginTop: 15,
    color: 'black',
  },
  viewSales: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  viewNotifications: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  txtNameUser: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  txtName: {
    fontSize: 14,
    marginBottom: 5,
  },
  viewName: {
    height: 65,
    borderRadius: 5,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  icEdit1: {
    width: 16,
    height: 16,
    alignItems: 'center',

  },
  viewPassword: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  body: {
    // backgroundColor: 'blue',
  },
  //

  /* //** */
  //** */
  //header
  txtNameUser: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  txtName: {
    fontSize: 14,
    marginBottom: 5,
  },
  viewName: {
    height: 65,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    marginHorizontal: 20,
    paddingHorizontal: 15,
    marginVertical: 10,
    elevation: 5,
  },
  icEdit1: {
    width: 16,
    height: 16,
    alignItems: 'center',

  },
  txtPersonalInformation: {
    fontSize: 16,
    fontWeight: '800'
  },
  viewPersonalInformation: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: 12,
    padding: 12,
    marginTop: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    marginBottom: 6,
  },
  txtOrderDetail: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  txtOrderDetail2: {
    width: 16
  },
  icBack: {
    width: 16,
    height: 16,
  },
  viewHeader: {
    flexDirection: 'row',
    marginHorizontal: 15,
    justifyContent: 'space-between',
  },
  header: {
    // backgroundColor: 'green', 
    marginBottom: 10,
  },
  //

  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
})
export default styleSetting
