import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/Login';
import Welcome from '../screens/Welcome';

 const createAccount= createStackNavigator({
   Login: LoginScreen,
   Signup: SignUpScreen,
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
SwitchNavigator.path = '';

export default createBrowserApp(SwitchNavigator, { history: 'hash' });
