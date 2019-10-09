import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Picker,
  Button,
  TouchableHighlight,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import { MonoText } from '../components/StyledText';
import MainButton from '../components/Buttons/mainButton';
const { width } = Dimensions.get("window");

class SignUpScreen extends Component {
  state = {
    user: ''
  }
  updateUser = (user) => {
    this.setState({ user: user })
  }

  render() {


    return (
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/icon.png')} style={styles.logo} />
            <Text style={styles.text}>Sign Up</Text>
          </View>
          <View style={styles.Form}>
            <Inputs title="Firstname" />
            <Inputs title="Middle name(Optional)" />
            <Inputs title="Email(Optional)" />
            <Inputs title="National ID/passport" keyboardtype="numeric" />
            <Inputs title="Telephone" keyboardtype="numeric" />
            <MainButton text="Sign Up" />
          </View>
        </View>
      </ScrollView>
    )
  }
}
export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 75,
    paddingBottom: 20,
  },

  logoContainer: {
    marginVertical: 5,
    padding: 10
  },


  logo: {
    width: 170,
    height: 120
  },
  Form: {
    justifyContent: 'center',
    alignItems: 'center',
  },

})