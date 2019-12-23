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
  TouchableHighlight,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import Inputs from "../components/Input";
import Header from "../components/Header/BackHeader";
import MainButton from "../components/Buttons/mainButton";
import Colors from "../constants/Colors";
import { UploadIcon } from "../components/UploadButton";
const { width } = Dimensions.get("window");

class DocumentsScreen extends Component {

  render() {

    return (
      <View style={styles.container}>

        <Header headerName="profile" />

        <ScrollView>

          <View style={styles.imageContainer}>
            <Image style={styles.profile} source={require("../assets/images/icon.png")} />

          </View>

          <View style={styles.Form}>

            <UploadIcon title="National ID/Passport" />
            <UploadIcon title="Land Certificate" />
            <UploadIcon title="Marriage Certificate" />
            <UploadIcon title="Birth Certificate" />
            <UploadIcon title="Other relevant Document" />
            <MainButton text="Done" />

          </View>

        </ScrollView>

        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />

      </View>
    );
  }
}
DocumentsScreen.navigationOptions = {
  header: null
};
export default DocumentsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  Form: {
    fontFamily: "font-regulary",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontFamily: "font-regulary",
    textAlign: "center",
    padding: 15,
    fontSize: 20
  },

  profile: {
    width: 180,
    height: 180,
    borderRadius: 90
    // backgroundColor: Colors.form_gradient,
  },

  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.primary_black,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3
  },
});
