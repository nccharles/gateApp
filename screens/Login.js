import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  KeyboardAvoidingView,
  TouchableHighlight
} from "react-native";
import { black } from "ansi-colors";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import MainButton from "../components/Buttons/mainButton";
import Inputs from "../components/Input";

const { width } = Dimensions.get("window");

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {

      email: '',
      password: '',
    };
  }

  //   if (response.status >= 200 && response.status < 300) {
  //     alert("authenticated successfully!!!");
  //     }

  // }
  Login = () => {

    var data = {

      email: this.state.email,
      password: this.state.password,

    }
    fetch('https://infour.herokuapp.com/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)

    })
      .then(Response => {
        Response.json();
        if (Response.status == 200) {

          this.props.navigation.navigate('TabScreen');
        }
        else {
          console.log('try again')
        }
      })

      .catch((error) => {
        console.log(error)
      })

    // if (data == "first_name") {
    //   alert("authenticated successfully!!!");
    // }

  }

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.logoContainer}>

          <Image source={require("../assets/images/icon.png")} style={styles.logo} />

        </View>

        <Text style={styles.logoText}>Login</Text>

        <View style={styles.inputContainer}>

          <Inputs type="email" title="Email" onChangeText={email => this.setState({ email: email })}
            value={this.state.email} />


        </View>

        <View style={styles.inputContainer}>

          <Inputs type="pwd" title="password" onChangeText={password => this.setState({ password: password })}
            value={this.state.password} />

        </View>

        <MainButton text="login" onPress={this.Login} />

        <TouchableOpacity onPress={() => this.props.navigation.navigate("Signup")}>

          <Text style={styles.ptext}>Don't have an account yet? <Text style={styles.span}> Sign Up</Text> </Text>
        </TouchableOpacity>



        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />

      </View>
    );
  }
}
LoginScreen.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center"
  },

  logoContainer: {
    marginBottom: 10,
    padding: 10
  },

  inputContainer: {
    paddingBottom: 5
  },

  logo: {
    width: 170,
    height: 120
  },

  logoText: {
    color: "#707070",
    fontSize: 20,
    marginTop: 10,
    fontFamily: "font-semi",
  },

  label: {
    paddingLeft: 27,
    fontSize: 16
  },

  input: {
    width: width - 35,
    height: 35,
    borderRadius: 6,
    fontSize: 16,
    paddingLeft: 18,
    backgroundColor: "#d8ebe2",
    color: "black",
    marginHorizontal: 25
  },
  btnLogin: {
    width: width - 205,
    height: 35,
    borderRadius: 12,
    backgroundColor: "#45d17d",
    justifyContent: "center",
    marginLeft: 0,
    marginTop: 17
  },

  text: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 15,
    textAlign: "center"
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
