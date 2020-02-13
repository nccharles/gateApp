import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import TabBarIcon from '../components/TabBarIcon';
import NotificationScreen from '../screens/NotificationUser';
import ClientHomeScreen from '../screens/ClientHomeScreen';
import Profile from '../screens/Profile';
import ClientProfileScreen from '../screens/ClientProfileScreen';
import UserHomeScreen from '../screens/UserHomeScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import AgentHomeScreen from '../screens/AgentHomeScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const HomeStack = createStackNavigator(
    {
        Home: UserHomeScreen,
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
                    ? `ios-home${focused ? '' : ''}`
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
        Profile: UserProfileScreen,
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

const tabNavigator = createBottomTabNavigator({
    HomeStack,
    NotificationStack,
    ProfileStack,
    SettingsStack,
});

tabNavigator.path = '';
export default tabNavigator;

