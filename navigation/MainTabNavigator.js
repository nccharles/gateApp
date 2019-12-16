import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import NotificationScreen from '../screens/NotificationUser';
import ClientHomeScreen from '../screens/ClientHomeScreen';
import Profile from '../screens/Profile';
import ClientProfileScreen from '../screens/ClientProfileScreen';
import UserHomeScreen from '../screens/UserHomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: ClientHomeScreen,
  },

  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

HomeStack.path = '';

const NotificationStack = createStackNavigator(
  {
    Notification: NotificationScreen,
  },
  config
);

NotificationStack.navigationOptions = {
  tabBarLabel: 'Notification',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-notifications${focused ? '' : '-outline'}` : 'md-notifications'} />
  ),
};

NotificationStack.path = '';

const ProfileStack = createStackNavigator(
  {
    Profile: ClientProfileScreen,
  },
  config
);

ProfileStack.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
  ),
};

ProfileStack.path = '';
const SettingsStack = createStackNavigator(
  {
    Settings: Profile,
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-cog' : 'md-cog'} />
  ),
};

SettingsStack.path = '';
// const HomeUser = createStackNavigator(
//   {
//     Home: UserHomeScreen,
//   },

//   config
// );

// HomeUser.navigationOptions = {
//   tabBarLabel: 'Home',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={
//         Platform.OS === 'ios'
//           ? `ios-home${focused ? '' : '-outline'}`
//           : 'md-home'
//       }
//     />
//   ),
// };

// HomeUser.path = '';

// const NotificationUser = createStackNavigator(
//   {
//     Notification: NotificationScreen,
//   },
//   config
// );

// NotificationUser.navigationOptions = {
//   tabBarLabel: 'Notification',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? `ios-notifications${focused ? '' : '-outline'}` : 'md-notifications'} />
//   ),
// };

// NotificationUser.path = '';

// const ProfileUser = createStackNavigator(
//   {
//     Profile: UserProfileScreen,
//   },
//   config
// );

// ProfileUser.navigationOptions = {
//   tabBarLabel: 'Profile',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-contact' : 'md-contact'} />
//   ),
// };

// ProfileUser.path = '';
// const SettingsUser = createStackNavigator(
//   {
//     Settings: Profile,
//   },
//   config
// );

// SettingsUser.navigationOptions = {
//   tabBarLabel: 'Settings',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-cog' : 'md-cog'} />
//   ),
// };

// SettingsUser.path = '';

// const userNavigator = createBottomTabNavigator({
//   HomeUser,
//   NotificationUser,
//   ProfileUser,
//   SettingsUser,
// });

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  NotificationStack,
  ProfileStack,
  SettingsStack,
  // HomeUser,
  // NotificationUser,
  // ProfileUser,
  // SettingsUser
});

tabNavigator.path = '';
export default tabNavigator;

