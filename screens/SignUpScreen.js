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
      userType: ""
    };
  }

  SignUp=()=>{
    var signup = this.state.userType;
    if(signup=="user"){
      console.log(signup);
      this.props.navigation.navigate('UserHome');
    }
    else if(signup=="client"){
      console.log(signup);
      this.props.navigation.navigate('ClientHome');
    }
    else if(signup=="Agent"){
      console.log(signup);
      this.props.navigation.navigate('AgentHome');
    }
    else{
      alert("Please select account type");
    }
    
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
            <Inputs title="Lastname" />
            <Inputs title="Email(Optional)" />
            <Inputs title="National ID/passport" keyboardtype="numeric" />
            <Inputs title="Telephone" keyboardtype="numeric" />
            <Picker
              style={styles.picker}
              selectedValue={this.state.userType}
              onValueChange={(itemValue, itemIndex) => this.setState({ userType: itemValue })}>
              <Picker.Item label="Select" value="Select" />
              <Picker.Item label="user" value="user" />
              <Picker.Item label="client" value="client" />
              <Picker.Item label="Agent" value="Agent" />
            </Picker>
            <MainButton text="Sign Up" onPress={()=>this.SignUp()}/>
            <TouchableOpacity onPress={
              () => this.props.navigation.navigate('Login')}>

              <Text>Already an Account ? Login
        </Text>

            </TouchableOpacity>

          </View>

        </View>
          <KeyboardAvoidingView
            behavior={"padding"}
            keyboardVerticalOffset={width / 24}
          />
        </View>
      </ScrollView>
    )
  }
}
SignUpScreen.navigationOptions = {
  header: null,
};
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
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: 'font-regulary',
    padding: 15,
    fontSize: 20,
    color: '#707070',
    textAlign: 'center',
    fontWeight: '500'
  },

})