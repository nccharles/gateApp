import React from "react";
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from "react-native";

import Header from "../components/Header/BackHeader";
import Inputs from "../components/Input";
import Button from "../components/Buttons/mainButton";

export default function EmployeeOccupation() {
  return (
    <ScrollView style={styles.container}>
      <Header headerName="Employee Job" />
      <Text style={styles.Text}>Employee</Text>
      <View style={styles.Form}>
        <Inputs title="Occupation" />
        <Inputs title="Company" />
        <Inputs title="Position" />
      </View>
      <Text style={styles.UnderText}>Address</Text>
      <View style={styles.Form}>
        <Inputs title="Country" />
        <Inputs title="Province" />
        <Inputs title="District" />
        <Inputs title="Street" />
        <Button text="Next" onPress={
          () => this.props.navigation.navigate('InsuranceDetails')} />
      </View>
      <KeyboardAvoidingView
        behavior={"padding"}
        keyboardVerticalOffset={width / 24}
      />
    </ScrollView>
  );
}
EmployeeOccupation.navigationOptions = {
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
    textAlign: 'left',
    fontSize: 16,
    textDecorationLine: "underline",
    color: '#707070',
    paddingLeft: 27
  }
});