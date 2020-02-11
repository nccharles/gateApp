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
            <MainButton text="Done" onPress={() => this.props.navigation.navigate('Welcome')} />

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
  headerShown: false,
};
export default DocumentsScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  Form: {
    fontFamily: "font-regular",
    justifyContent: "center",
    alignItems: "center"
  },

  text: {
    fontFamily: "font-regular",
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
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 3.24,
      },
      android: {
        elevation: 5,
      },
    }),
  },
});
