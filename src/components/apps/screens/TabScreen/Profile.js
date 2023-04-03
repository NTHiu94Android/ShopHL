import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../../users/UserContext';

const Profile = (props) => {
  const { navigation } = props;
  const { user } = useContext(UserContext);

  return (

    <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 30 }}>
      <Text style={styles.textProfile}>Profile</Text>

      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Body */}
        <View>

          {/* Profile */}
          <View style={styles.viewProfile}>
            <View style={styles.viewImgProfile0}>
              <Image
                style={[styles.iconTopBar, { borderRadius: 80, width: 80, height: 80 }]}
                resizeMode='cover'
                source={{ uri: user.avatar }} />
              <View style={styles.viewInfo}>
                <Text style={[styles.textName, { color: 'black', }]}>{user.name}</Text>
                <Text style={styles.textStatus}>View my profile</Text>
              </View>
            </View>
          </View>

          {/* My orders */}
          <View style={styles.viewOption}>
            <View style={styles.viewImgProfile}>
              <View style={styles.viewInfo}>
                <Text style={styles.textName}>My orders</Text>
                <Text style={styles.textStatus}>Already have 10 orders</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('OrderStack')}>
                <Image
                  style={styles.iconTopBar}
                  resizeMode='cover'
                  source={require('../../../../assets/images/next2.png')} />
              </TouchableOpacity>
            </View>
          </View>

          {/* My cloud */}
          <View style={styles.viewOption}>
            <View style={styles.viewImgProfile}>
              <View style={styles.viewInfo}>
                <Text style={styles.textName}>Shipping Addresses</Text>
                <Text style={styles.textStatus}>03 Addresses</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Shipping')}>
                <Image
                  style={styles.iconTopBar}
                  resizeMode='cover'
                  source={require('../../../../assets/images/next2.png')} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Data and storage */}
          <View style={styles.viewOption}>
            <View style={styles.viewImgProfile}>
              <View style={styles.viewInfo}>
                <Text style={styles.textName}>Payment Method</Text>
                <Text style={styles.textStatus}>You have 2 cards</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('OrderStack')}>
                <Image
                  style={styles.iconTopBar}
                  resizeMode='cover'
                  source={require('../../../../assets/images/next2.png')} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Account and security */}
          <View style={styles.viewOption}>
            <View style={styles.viewImgProfile}>
              <View style={styles.viewInfo}>
                <Text style={styles.textName}>My reviews</Text>
                <Text style={styles.textStatus}>Reviews for 5 items</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('OrderStack')}>
                <Image
                  style={styles.iconTopBar}
                  resizeMode='cover'
                  source={require('../../../../assets/images/next2.png')} />
              </TouchableOpacity>
            </View>
          </View>

          {/* Setting */}
          <View style={styles.viewOption}>
            <View style={styles.viewImgProfile}>
              <View style={styles.viewInfo}>
                <Text style={styles.textName}>Setting</Text>
                <Text style={styles.textStatus}>Notification, Password, FAQ, Contact</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
                <Image
                  style={styles.iconTopBar}
                  resizeMode='cover'
                  source={require('../../../../assets/images/next2.png')} />
              </TouchableOpacity>

            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: 'white'
  },
  textProfile: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 18,
    marginBottom: 12
  },
  topBarView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#aeea00'
  },
  marginTopBar: {
    padding: 10
  },
  iconTopBar: {
    width: 24, height: 24,
    marginRight: 10
  },
  nameText: {
    fontWeight: '500',
    marginStart: 10,
    fontSize: 16,
    color: '#000000'
  },
  viewProfile: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 12,
  },
  viewOption: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 4,
    marginHorizontal: 16,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: 'grey',
    borderRadius: 4,
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3
  },
  viewImgProfile0: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '100%'
  },
  viewImgProfile: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    width: '100%',
    borderRadius: 16,
  },
  viewInfo: {
    marginStart: 10
  },
  textName: {
    maxHeight: 25,
    fontWeight: '900',
    fontSize: 16,
  },
  textStatus: {
    maxHeight: 25,
    fontWeight: '400',
    fontSize: 13,
  },
})