/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import styles from './src/styles/style'
import ImagePicker from './src/components/ImagePickerButton'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>레시피 작성</Text>
      <Text style={styles.content}>레시피 작성을 위해 과정 사진을 업로드해주세요.</Text>

      <ImagePickerButton />

      <Text style={styles.info}>최대 8장까지 가능합니다!</Text>

    </SafeAreaView>
  );
};

export default App;
