import { Image, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext } from 'react';
import { UserContext } from '../../../users/UserContext';

import styleSetting from '../../../style/styleSetting';
import back from '../../../backEvent/back';

const Setting = (props) => {
  const { navigation } = props;
  const { setUser, user } = useContext(UserContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleEditPassword = () => {
    navigation.navigate('EditPassword');
  };

  back(navigation);
  return (

    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <View style={styleSetting.container}>
        <View style={styleSetting.header}>
          {/* Header */}
          <View style={styleSetting.viewHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styleSetting.icBack}
                source={require('../../../../assets/images/back.png')}
                resizeMode="cover"></Image>
            </TouchableOpacity>
            <Text style={styleSetting.txtOrderDetail}>Setting</Text>
            <Text style={styleSetting.txtOrderDetail2}></Text>
          </View>

          {/* body */}


        </View>

        {/* body */}
        <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: 'white', flex: 1 }}>
          {/* Personal Information */}
          <View style={styleSetting.viewPersonalInformation}>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
              <Text style={styleSetting.txtPersonalInformation}>Personal Information</Text>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('UpdateProfile')}>
                  <Image
                    style={styleSetting.icEdit1}
                    source={require('../../../../assets/images/edit.png')}
                    resizeMode="cover">
                  </Image>
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <Text style={[styleSetting.txtName, { marginTop: 15 }]}>Name:</Text>
              <Text style={styleSetting.txtNameUser}>{user.name}</Text>

              <Text style={[styleSetting.txtName, { marginTop: 15 }]}>Email</Text>
              <Text style={styleSetting.txtNameUser}>{user.email}</Text>
            </View>

          </View>

          {/* Password */}
          <View style={styleSetting.viewPersonalInformation}>
            <View style={styleSetting.viewPassword}>
              <Text style={styleSetting.txtPersonalInformation}>Password</Text>
              <View>
                <TouchableOpacity onPress={() => handleEditPassword()}>
                  <Image
                    style={styleSetting.icEdit1}
                    source={require('../../../../assets/images/edit.png')}
                    resizeMode="cover">
                  </Image>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styleSetting.txtName}>Name:</Text>
            <Text style={styleSetting.txtNameUser}>*******</Text>
          </View>

          {/* Notification */}
          <View style={styleSetting.viewPersonalInformation}>
            <Text style={styleSetting.txtPersonalInformation}>Notifications</Text>
            <View style={styleSetting.viewSales}>
              <Text style={styleSetting.txtSales}>Sales</Text>
              <View>
                <Switch
                  trackColor={{ false: '#767577', true: '#228B22' }}
                  thumbColor={isEnabled ? '#ffffff' : '#ffffff'}
                  onValueChange={toggleSwitch}
                  value={isEnabled}></Switch>
              </View>
            </View>
          </View>

          {/* Help Center */}
          <View style={styleSetting.viewPersonalInformation}>
            <Text style={[styleSetting.txtPersonalInformation, { marginBottom: 10 }]}>Help Center</Text>

            <TouchableOpacity style={styleSetting.btnFAQ}>
              <Text style={styleSetting.txtFAQ}>FAQ</Text>
              <Image
                style={styleSetting.icEdit1}
                source={require('../../../../assets/images/next.png')}
                resizeMode="cover"></Image>
            </TouchableOpacity>

            <TouchableOpacity style={styleSetting.btnFAQ}>
              <Text style={styleSetting.txtFAQ}>Contact Us</Text>
              <Image
                style={styleSetting.icEdit1}
                source={require('../../../../assets/images/next.png')}
                resizeMode="cover"></Image>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setUser(null)} style={styleSetting.btnFAQ}>
              <Text style={styleSetting.txtFAQ}>Log out</Text>
              <Image
                style={styleSetting.icEdit1}
                source={require('../../../../assets/images/next.png')}
                resizeMode="cover"></Image>
            </TouchableOpacity>

          </View>
        </ScrollView>


      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})