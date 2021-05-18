import React from 'react';
import {View, Image} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import styles from '../styles/style'


const ImagePickerButton = () => {
    return (
        <>
        <View style={styles.button}>
            <View style={styles.box}>
            <Image style={styles.icon} source={require('../images/plus-icon.png')}/>
            </View>
        </View>
       
        </>
    );
};



export default ImagePickerButton