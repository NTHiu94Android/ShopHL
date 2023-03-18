import { useEffect } from 'react';
import { BackHandler, ToastAndroid } from 'react-native';

const back = (navigation) => {
    useEffect(() => {
        const backAction = () => {
            //Bat su kien khi click tro ve tren he thong android
            //ToastAndroid.show('Go back', ToastAndroid.SHORT);
            navigation.goBack();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction,
        );

        return () => backHandler.remove();
    }, []);
}

export default back