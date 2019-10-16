import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/Login';
import Welcome from '../screens/Welcome';

 const createAccount= createStackNavigator({
  Signup: SignUpScreen,
   Login: LoginScreen,
   Welcome:Welcome,
  })
 const MainScreen= createSwitchNavigator({
    Main: MainTabNavigator,
  })

const SwitchNavigator = createSwitchNavigator(
  {
    IntroScreen: {
      screen: createAccount
    },
    TabScreen: {
      screen: MainScreen,
    }
  }
);
const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
