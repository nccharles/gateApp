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
  KeyboardAvoidingView
} from "react-native";
import { MonoText } from "../components/StyledText";
import MainButton from "../components/Buttons/mainButton";
import Inputs from "../components/Input";
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
      data: ''

    };
  }
  // _onLogInPressed = () => {
  //   var data = {
  //     phone_number: this.state.phone_number,
  //     password: this.state.password
  //   };
  // componentDidMount() {

  //   var data = {
  //     first_name: this.state.first_name,
  //     last_name: this.state.last_name,
  //     email: this.state.email,
  //     password: this.state.password,
  //     phone: this.state.phone,
  //   }

  //   fetch('https://infour.herokuapp.com/api/signup', {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ data })

  //   }) 
  //   .then(Response => {
  //     console.log(data)
  //   })

  //   .catch((error) => {
  //     console.log(error)
  //   })
  //   if (response.status >= 200 && response.status < 300) {
  //     alert("authenticated successfully!!!");
  //     }

  // }
  SignUp = () => {
    var signup = this.state.userType;
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
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data })

    })
      .then(Response => {
        console.log(data)
      })
      .catch((error) => {
        console.log(error)
      })
    if (response.status >= 200 && response.status < 300) {
      alert("authenticated successfully!!!");
    }
    if (signup == "user") {
      console.log(signup);
      this.props.navigation.navigate("TabUserScreen");
    } else if (signup == "client") {
      console.log(signup);
      this.props.navigation.navigate("TabScreen");
    } else if (signup == "Agent") {
      console.log(signup);
      this.props.navigation.navigate("TabAgentScreen");
    } else {
      alert("Please select account type");
    }
  };

  render() {

    return (

      <ScrollView>

        <View style={styles.container}>

          <View style={styles.logoContainer}>

            <Image source={require("../assets/images/icon.png")} style={styles.logo} />
            <Text style={styles.text}>Sign Up</Text>

          </View>

          <View style={styles.Form}>

            <Inputs title="Firstname" onChangeText={(text) => this.setState({ first_name: text })}
              value={this.state.first_name} />
            <Inputs title="Lastname" onChangeText={(text) => this.setState({ last_name: text })}
              value={this.state.last_name} />
            <Inputs type="email" title="Email(Optional)" onChangeText={(text) => this.setState({ email: text })}
              value={this.state.email} />
            <Inputs type="pwd" title="password" onChangeText={(text) => this.setState({ password: text })}
              value={this.state.password} />
            <Inputs title="Telephone" keyboardtype="numeric" onChangeText={(text) => this.setState({ phone: text })}
              value={this.state.phone} />
            <Picker
              style={styles.picker}
              selectedValue={this.state.userType}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ userType: itemValue })}>
              <Picker.Item label="Select" value="Select" />
              <Picker.Item label="user" value="user" />
              <Picker.Item label="client" value="client" />
              <Picker.Item label="Agent" value="Agent" />
            </Picker>

            <MainButton text="Sign Up" onPress={() => this.SignUp()} />
            {/* <MainButton text="Sign Up" onPress={() => this.props.navigation.navigate("TabScreen")} /> */}

            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>


              <Text style={styles.ptext}>Already an Account? <Text style={styles.span}>Login</Text> </Text>
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
  header: null
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
    paddingBottom: 20
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
    fontFamily: "font-regulary",
    justifyContent: "center",
    alignItems: "center"
  },

  picker: {
    height: 35,
    width: 260,
    color: "#707070",
    paddingTop: 15,
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f8f8f8"
  },

  text: {
    fontFamily: "font-regulary",
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
    fontFamily: "font-regulary",
    padding: 12,
    fontSize: 12,
    color: '#707070',
    textAlign: "center",
  }
});
