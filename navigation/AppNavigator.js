import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignUpScreen from '../screens/SignUpScreen';
import LoginScreen from '../screens/Login';
import Welcome from '../screens/Welcome';
import ClientHomeScreen from '../screens/ClientHomeScreen';
import AgentHomeScreen from '../screens/AgentHomeScreen';
import UserHomeScreen from '../screens/UserHomeScreen';
import ClientFormtwoScreen from '../screens/ClientFormtwoScreen';
import ClientFormthreeScreen from '../screens/ClientFromthreeScreen';
import Personalinfo from '../screens/PersonalInfo';
import FamilyInfoScreen from '../screens/FamilyInfoScreen';
import Occupation from '../screens/Occupation';
import EmployeeOccupation from '../screens/EmployeeOccupation';
import SelfEmployedOccupation from '../screens/SelfEmployedOccupation';
import StudentOccupation from '../screens/StudentOccupation';
import OtherOccupation from '../screens/OtherOccupation';
import InsuranceInfoScreen from '../screens/InsuranceInfoScreen';
import InsuranceInfoDetails from '../screens/InsuranceInfoDetails';
import BankInfoScreen from '../screens/BankInfoScreen';
import BankInfoDetails from '../screens/BankInfoDetails';
import AssetInfoScreen from '../screens/AssetInfoScreen';
import FixedAssetInfo from '../screens/FixedAssetInfo';
import CurrentAssetInfo from '../screens/CurrentAssetInfo';
import SocialMedia from '../screens/SocialMedia';
import DocumentsScreen from '../screens/DocumentsScreen';
import UserRegistrationScreen from '../screens/UserRegistrationScreen';
import UserRequestInfo from '../screens/UserRequestInfo';
import UserModificationScreen from '../screens/UserModifictionRequest';
import ClientProfileScreen from '../screens/ClientProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import ClientFormScreen from '../screens/ClientFormScreen';
import Profile from '../screens/Profile';
import UserProfileScreen from '../screens/UserProfileScreen';

const createAccount = createStackNavigator({
  Signup: SignUpScreen,
  Login: LoginScreen,
  Welcome: Welcome,
  ClientHome: ClientHomeScreen,
  AgentHome: AgentHomeScreen,
  UserHome: UserHomeScreen,
})
const MainScreen = createSwitchNavigator({
  Main: MainTabNavigator,
})

const clientScreen = createStackNavigator({
  FormOne: ClientFormScreen,
  FormTwo: ClientFormtwoScreen,
  FormThree: ClientFormthreeScreen,
  Cprofile: ClientProfileScreen,
  ClientEdit: ClientEditScreen,
  Profile: Profile
})
const usersScreen = createStackNavigator({
  PersonalInfo: Personalinfo,
  FamilyInfo: FamilyInfoScreen,
  Occupation: Occupation,
  Employee: EmployeeOccupation,
  Self: SelfEmployedOccupation,
  Student: StudentOccupation,
  Other: OtherOccupation,
  InsuranceInfo: InsuranceInfoScreen,
  InsuranceDetails: InsuranceInfoDetails,
  BankInfo: BankInfoScreen,
  BankDetails: BankInfoDetails,
  Asset: AssetInfoScreen,
  Fixed: FixedAssetInfo,
  Current: CurrentAssetInfo,
  Social: SocialMedia,
  Document: DocumentsScreen,
  Agent: AgentHomeScreen,
  Registration: UserRegistrationScreen,
  Modification: UserModificationScreen,
  Request: UserRequestInfo,
  Edit: EditProfileScreen,
  UserProfile: UserProfileScreen,
})
const SwitchNavigator = createSwitchNavigator(
  {
    IntroScreen: {
      screen: createAccount
    },
    TabScreen: {
      screen: MainScreen,
    },
    Client: {
      screen: clientScreen,
    },
    Users: {
      screen: usersScreen,
    }
  }
);
const AppContainer = createAppContainer(SwitchNavigator);
export default AppContainer;
