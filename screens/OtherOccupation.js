import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";

import Header from "../components/Header/BackHeader";
import Inputs from "../components/Input";
import Button from "../components/Buttons/mainButton";
import { TextArea } from "../components/TextArea";



const { width } = Dimensions.get("window");

export default function OtherOccupation() {

  return (

    <View style={styles.container}>

      <ScrollView>

        <Header headerName="Occupation" onPress={() => this.props.navigation.navigate('Occupation')} />

        <Text style={styles.Text}>Employee</Text>

        <View style={styles.Form}>

          <Inputs title="Occupation" />
          <Inputs title="Type of Business" />
          <Inputs title="Business Name" />
          <TextArea title="Description" />

        </View>

        <Text style={styles.UnderText}>Address</Text>

        <View style={styles.Form}>

          <Inputs title="Country" />
          <Inputs title="Province" />
          <Inputs title="District" />
          <Inputs title="Street" />
          <Button text="Next" onPress={() => this.props.navigation.navigate('InsuranceDetails')} />

        </View>

      </ScrollView>

      <KeyboardAvoidingView
        behavior={"padding"}
        keyboardVerticalOffset={width / 24}
      />

    </View>
  );
}
OtherOccupation.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },

  Text: {
    fontSize: 15,
    paddingTop: width / 24,
    fontSize: 15,
    color: '#232323',
    paddingLeft: width / 20,
    fontFamily: 'font-semi',
    textAlign: 'center'
  },

  Form: {
    justifyContent: "center",
    alignItems: "center"
  },

  UnderText: {
    textAlign: 'left',
    fontSize: 15,
    color: '#232323',
    paddingLeft: width / 20,
    fontFamily: 'font-semi',
  },
});