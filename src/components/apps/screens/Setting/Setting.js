import { Image, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react';

import styleSetting from '../../../style/styleSetting';
import back from '../../../backEvent/back';

const Setting = (props) => {
  const { navigation } = props;
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  back(navigation);
  return (
    <View style={{ flex: 1, backgroundColor: '#000000' }}>
      <View style={styleSetting.container}>
        <View style={styleSetting.header}>
          <View style={styleSetting.viewHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                style={styleSetting.icBack}
                source={require('../../../../assets/images/back.png')}
                resizeMode="cover"></Image>
            </TouchableOpacity>
            <Text style={styleSetting.txtOrderDetail}>Setting</Text>
          </View>
          <View style={styleSetting.viewPersonalInformation}>
            <Text style={styleSetting.txtPersonalInformation}>Personal Information</Text>
            <View>
              <Image
                style={styleSetting.icEdit1}
                source={require('../../../../assets/images/edit.png')}
                resizeMode="cover"></Image>
            </View>
          </View>
          <View style={styleSetting.viewName}>
            <Text style={styleSetting.txtName}>Name:</Text>
            <Text style={styleSetting.txtNameUser}>Phạm Quốc Tín</Text>
          </View>
          <View style={styleSetting.viewName}>
            <Text style={styleSetting.txtName}>Email</Text>
            <Text style={styleSetting.txtNameUser}>tinphan99@gmail.com</Text>
          </View>
        </View>

        {/* body */}

        <View style={styleSetting.body}>
          <View style={styleSetting.viewPassword}>
            <Text style={styleSetting.txtPersonalInformation}>Password</Text>
            <View>
              <Image
                style={styleSetting.icEdit1}
                source={require('../../../../assets/images/edit.png')}
                resizeMode="cover"></Image>
            </View>
          </View>
          <View style={styleSetting.viewName}>
            <Text style={styleSetting.txtName}>Name:</Text>
            <Text style={styleSetting.txtNameUser}>*******</Text>
          </View>
          <View style={styleSetting.viewNotifications}>
            <Text style={styleSetting.txtPersonalInformation}>Notifications</Text>
          </View>
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
        <View style={styleSetting.footer}>
          <View style={styleSetting.viewNotifications}>
            <Text style={styleSetting.txtPersonalInformation}>Help Center</Text>
          </View>
          <View>
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

            <TouchableOpacity style={styleSetting.btnFAQ}>
              <Text style={styleSetting.txtFAQ}>Log out</Text>
              <Image
                style={styleSetting.icEdit1}
                source={require('../../../../assets/images/next.png')}
                resizeMode="cover"></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})