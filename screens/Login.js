import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import { black } from "ansi-colors";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import MainButton from "../components/Buttons/mainButton";

const { width } = Dimensions.get("window");

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/icon.png")}
            style={styles.logo}
          />
        </View>

        <Text style={styles.logoText}>Login</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>User Name</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Verification Code</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={"rgba(255, 255, 255, 0.7)"}
            underlineColorAndroid="transparent"
          />
        </View>

        {/* <TouchableOpacity style={styles.btnLogin}>
          <Text style={styles.text}>Login</Text>
        </TouchableOpacity> */}
        <MainButton text="login" />
        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />
      </View>
    );
  }
}

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
    marginTop: 10
  },

  logo: {
    width: 170,
    height: 120
  },

  logoText: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    opacity: 0.5
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
  }
});
