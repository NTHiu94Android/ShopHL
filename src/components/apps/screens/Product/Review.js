import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import back from '../../../backEvent/back';
import { AppContext } from '../../AppContext';

import ProgressDialog from 'react-native-progress-dialog';
import { UserContext } from '../../../users/UserContext';

const DataDemo = [
  {
    _id: "1",
    name: "Asia",
    rate: 5,
    body: "Ukraine's President Zelensky to BBC: Blood money being paid...",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYj-VEHGHpvHJR-JpCekWN5JzmbaHwtfn1w&usqp=CAU",
    time: "15/10/2022",
  },
  {
    _id: "2",
    name: "Brazil",
    rate: 2,
    body: "Ukraine's President Zelensky to BBC: Blood money being paid...",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYj-VEHGHpvHJR-JpCekWN5JzmbaHwtfn1w&usqp=CAU",
    time: "10/09/2022",
  },
  {
    _id: "3",
    name: "Euro",
    rate: 4,
    body: "Ukraine's President Zelensky to BBC: Blood money being paid...",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFYj-VEHGHpvHJR-JpCekWN5JzmbaHwtfn1w&usqp=CAU",
    time: "01/01/2023",
  },
];

const Item = ({ item, onPress }) => (
  <View style={styles.itemContainer}>

    <View style={styles.itemRow}>
      <Text style={{ fontSize: 14, fontWeight: '600' }}>{item.name}</Text>
      <Text style={{ fontSize: 14, fontWeight: '400' }}>{item.time}</Text>
    </View>

    <View style={{ marginVertical: 8 }}>
      {item.rate === 1 ?
        <View>
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
        </View> : <View />
      }
      {item.rate === 2 ?
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
        </View> : <View />
      }
      {item.rate === 3 ?
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
        </View> : <View />
      }
      {item.rate === 4 ?
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
        </View> : <View />
      }
      {item.rate === 5 ?
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
          <Image
            style={styles.star}
            resizeMode='cover'
            source={require('../../../../assets/images/star.png')} />
        </View> : <View />
      }
    </View>

    <Text numberOfLines={4} style={{ fontWeight: '400', fontSize: 14 }}>{item.content}</Text>

    <View style={styles.viewAvatar}>
      <Image
        style={styles.imgAvatarItem}
        resizeMode='cover'
        source={{uri: item.avatar}} />
    </View>

  </View>
);

const Review = (props) => {
  const { item } = props.route.params;
  //console.log("Item: ", item);
  const { navigation } = props;
  const {onGetCommentsByIdProduct , listCmt, setListCmt} = useContext(AppContext);
  const { onGetUserById } = useContext(UserContext);
  
  const [isLoading, setIsLoading] = useState(false);
  back(navigation);

  useEffect(() => {
    getListCmt();
  }, []);

  //Lay danh sach cmt
  const getListCmt = async () => {
    try{
      setIsLoading(true);
      const cmts = await onGetCommentsByIdProduct(item._id);
      console.log("Get list cmt: ", cmts);

      let rate = 0;
      for (let i = 0; i < cmts.length; i++) {
        const user = await onGetUserById(cmts[i].idUser);
        cmts[i].avatar = user.avatar;
        cmts[i].name = user.name;
        rate += cmts[i].rate/cmts.length;
        cmts.rate = rate.toFixed(1);
      }
      if(cmts.length === 0){
        cmts.rate = 0;
      }
      setListCmt(cmts);
      setIsLoading(false);
    }catch(error){
      console.log("Get list cmt error: ", error);
    }
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{ flex: 1, paddingTop: 50, backgroundColor: 'white', paddingHorizontal: 12 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={styles.iconTopBar}
              resizeMode='cover'
              source={require('../../../../assets/images/back2.png')} />
          </TouchableOpacity>

          <Text style={styles.textProfile}>Rating & Review</Text>
          <View style={styles.iconTopBar}></View>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}>
          <Image
            style={styles.imgProduct}
            resizeMode='cover'
            source={{uri: item.listImage[0]}} />
          <View style={{ marginLeft: 12, justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>{item.name}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={styles.star}
                resizeMode='cover'
                source={require('../../../../assets/images/star.png')} />
              <Text style={{ fontSize: 24, fontWeight: '700' }}>{listCmt.rate}</Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: '400' }}>{listCmt.length} Reviews  </Text>
          </View>
        </View>

        {
          listCmt.map((item) =>
            <Item key={item._id} item={item} />
          )
        }


      </View>
      <ProgressDialog
        visible={isLoading}
        title="Đang tải dữ liệu"
        message="Vui lòng đợi trong giây lát..." />
    </ScrollView>


  )
}

export default Review

const styles = StyleSheet.create({
  iconTopBar: {
    width: 24, height: 24,
  },
  textProfile: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
    fontWeight: '800',
  },
  star: {
    width: 24, height: 24,
    marginRight: 4,
  },
  imgProduct: {
    width: 100, height: 100,
    borderRadius: 10,
  },
  itemContainer: {
    flexDirection: 'column',
    marginTop: 30,
    padding: 20,
    backgroundColor: 'white',
    shadowColor: 'grey',
    borderRadius: 4,
    shadowOffset: {
      width: 1,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.3
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgAvatarItem: {
    width: 50, height: 50,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  viewAvatar: {
    width: 50, height: 50,
    borderRadius: 25,
    position: 'absolute',
    top: -25,
    left: Dimensions.get('window').width / 2 - 40,
    flexDirection: 'row',
    justifyContent: 'center',
  }
})