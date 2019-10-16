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
import Inputs from '../components/Input';
// import FormPicker from '../components/select/selectPicker';
const { width } = Dimensions.get("window");

class SignUpScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: ""
    };
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
            <Picker
              style={styles.picker}
              selectedValue={this.state.language}
              onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
              <Picker.Item label="Select" value="Select" />
              <Picker.Item label="user" value="user" />
              <Picker.Item label="client" value="client" />
              <Picker.Item label="Agent" value="Agent" />
            </Picker>
            <MainButton text="Sign Up" />

          </View>

        </View>

        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />

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
    fontFamily: 'font-regulary',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picker: {
    height: 35,
    width: 260,
    color: '#707070',
    paddingTop: 15,
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f8f8f8"
  }

})