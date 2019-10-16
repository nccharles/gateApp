import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';
import React, { useState } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import AppNavigator from './navigation/AppNavigator';
import Colors from './constants/Colors';
import GeneralStatusBarColor from './components/StatusBar/GeneralStatusBarColor';
import DocumentsScreen from './screens/DocumentsScreen';
import ClientHomeScreen from './screens/ClientHomeScreen';
import ClientProfileScreen from './screens/ClientProfileScreen';
import InsuranceInfoDetails from './screens/InsuranceInfoDetails';
import ClientFormScreen from './screens/ClientFormScreen';
import ClientFormtwoScreen from './screens/ClientFormtwoScreen';
import ClientFormthreeScreen from './screens/ClientFromthreeScreen';
import UserProfileScreen from './screens/UserProfileScreen';

import SignUpScreen from './screens/SignUpScreen';
import Login from './screens/Login';
import Occupation from './screens/Occupation';
import StudentOccupation from './screens/StudentOccupation';
import EmployeeOccupation from './screens/EmployeeOccupation';
import SelfEmployedOccupation from './screens/SelfEmployedOccupation';
import OtherOccupation from './screens/OtherOccupation';
import SocialMedia from './screens/SocialMedia';
import NotificationUser from './screens/NotificationUser';
import ModalTester from './screens/Welcome';
import InsuranceInfoScreen from './screens/InsuranceInfoScreen';
import BankInfoScreen from './screens/BankInfoScreen';
import Personalinfo from './screens/PersonalInfo';
export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <GeneralStatusBarColor backgroundColor={Colors.primary} barStyle="light-content" />
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require('./assets/images/icon.png'),
      require('./assets/images/splash.png'),
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      ...Ionicons.font,
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'font-bold': require('./assets/fonts/Segoe-Bold.ttf'),
      'font-regulary': require('./assets/fonts/Segoe.ttf'),
      'font-italic': require('./assets/fonts/Segoe-Italic.ttf'),
      'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary_white,
  },
});
