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
        <Header headerName="Occupation" />
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
          <Button text="Next" onPress={
            () => this.props.navigation.navigate('InsuranceInfo')} />
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
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },
  Text: {
    fontSize: 16,
    marginLeft: 120,
    paddingTop: 24
  },
  Form: {
    justifyContent: "center",
    alignItems: "center"
  },
  UnderText: {
    textAlign: "left",
    fontSize: 16,
    textDecorationLine: "underline",
    color: "#707070",
    paddingLeft: 27
  }
});