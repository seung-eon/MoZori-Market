/**
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-community/google-signin';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text, Button,
  View, Image, TouchableWithoutFeedback,
} from 'react-native';
import Providers from './navigation';

const App = () => {
  return <Providers />
}


export default App;
