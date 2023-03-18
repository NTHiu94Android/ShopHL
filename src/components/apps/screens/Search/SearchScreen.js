import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import back from '../../../backEvent/back';

const SearchScreen = (props) => {
  const { navigation } = props;
  back(navigation);
  return (
    <View>
      <Text>SearchScreen</Text>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})