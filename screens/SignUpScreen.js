import * as WebBrowser from "expo-web-browser";
import React, { Component } from "react";
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
  KeyboardAvoidingView,
  AsyncStorage,
} from "react-native";
import { MonoText } from "../components/StyledText";
import MainButton from "../components/Buttons/mainButton";
import Inputs from "../components/Input";
import { token } from "../constants/util";
// import FormPicker from '../components/select/selectPicker';
const { width } = Dimensions.get("window");

class SignUpScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userType: "",
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone: '',


    };
  }

  //   if (response.status >= 200 && response.status < 300) {
  //     alert("authenticated successfully!!!");
  //     }

  // }
  SignUp = () => {

    var data = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      password: this.state.password,
      phone: this.state.phone,
    }
    fetch('https://infour.herokuapp.com/api/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)

    })
      .then((response) => response.json())
      .then(async (response) => {

        console.log(response)
        await AsyncStorage.setItem(token, response.token);
        if (response.email !== null) {
          var signup = this.state.userType;
          if (signup == "user") {
            console.log(signup);
            this.props.navigation.navigate("PersonalInfo");
          } else if (signup == "client") {
            console.log(signup);
            this.props.navigation.navigate("TabScreen");
          } else if (signup == "Agent") {
            console.log(signup);
            this.props.navigation.navigate("TabAgentScreen");
          } else {
            alert("Please fill all the field");
          }
        }
        // else {
        //   console.log('try again')
        // }
        // console.log(response);
      }).catch((error) => {
        console.log(error)
      });

    // if (data == "first_name") {
    //   alert("authenticated successfully!!!");
    // }


  };

  render() {

    return (

      <ScrollView>

        <View style={styles.container}>

          <View style={styles.logoContainer}>

            <Image source={require("../assets/images/Logo_Divine_Tag-02.png")} style={styles.logo} />
            {/* <Text style={styles.text}>Sign Up</Text> */}

          </View>

          <View style={styles.Form}>

            <Inputs title="Firstname" onChangeText={first_name => this.setState({ first_name: first_name })}
              value={this.state.first_name} />
            <Inputs title="Lastname" onChangeText={last_name => this.setState({ last_name: last_name })}
              value={this.state.last_name} />
            <Inputs type="email" title="Email(Optional)" onChangeText={email => this.setState({ email: email })}
              value={this.state.email} />
            <Inputs type="password" title="password" secureTextEntry onChangeText={password => this.setState({ password: password })}
              value={this.state.password} />
            <Inputs title="Telephone" keyboardtype="numeric" onChangeText={phone => this.setState({ phone: phone })}
              value={this.state.phone} />
          </View>
          <View style={styles.select}>
            <Text style={styles.title}>Select User</Text>
            <Picker
              style={styles.picker}
              selectedValue={this.state.userType}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ userType: itemValue })}>
              <Picker.Item label="Select" value="Select" />
              <Picker.Item label="User" value="user" />
              <Picker.Item label="Client" value="client" />
              <Picker.Item label="Agent" value="Agent" />
            </Picker>
          </View>
          <View style={styles.Form}>
            <MainButton text="Sign Up" onPress={this.SignUp} />

            {/* <MainButton text="Sign Up" onPress={() => this.props.navigation.navigate("Social")} /> */}

            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>


              <Text style={styles.ptext}>Already an Account?<Text style={styles.span}> Login</Text> </Text>
            </TouchableOpacity>

          </View>

        </View>

        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />

      </ScrollView>
    );
  }
}
SignUpScreen.navigationOptions = {
  headerShown: false,
};
export default SignUpScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 75,
    // paddingBottom: 20
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
    fontFamily: "font-regular",
    justifyContent: "center",
    alignItems: "center"
  },

  picker: {
    fontSize: 14,
    height: 35,
    width: 260,
    color: '#707070',
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f8f8f8",
    fontSize: 12,

  },
  title: {
    fontSize: 13,
    color: "#707070",
    fontFamily: 'font-regular',
    paddingBottom: 5,
  },
  select: {
    fontFamily: "font-regular",
    paddingTop: 10,
  },
  text: {
    fontFamily: "font-semi",
    padding: 15,
    fontSize: 20,
    color: "#707070",
    textAlign: "center",
    fontWeight: "500"
  },
  span: {
    color: '#73cdfe'
  },

  ptext: {
    fontFamily: "font-regular",
    padding: 12,
    fontSize: 12,
    color: '#707070',
    textAlign: "center",
  }
});
