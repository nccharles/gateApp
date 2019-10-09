import React from "react";
import { StyleSheet, Text, View,KeyboardAvoidingView,Dimensions, ScrollView } from "react-native";
import Inputs from "../components/Input";
import MainButton from "../components/Buttons/mainButton";
import BackHeader from "../components/Header/BackHeader";
import Colors from "../constants/Colors";
const { width } = Dimensions.get("window");
export default function Caller() {
  return (
    <View style={styles.container}>
      <BackHeader headerName="Profile" onPress={() => alert('it should go back')}/>
      <ScrollView>
        <Text style={styles.Text}>Personal Information</Text>

        <View style={styles.Form}>
          <Inputs title="First Name" />
          <Inputs title="Second Name" />
          <Inputs title="Date" />
          <Inputs title="Place of Birth" />
          <Inputs title="Sex" />
          <Inputs title="Nationality" />
          <Inputs title="National ID/Passport" keyboardtype="numeric" />
          <Inputs title="Marital Status" />
        </View>
        <Text style={styles.UnderText}>Current Resident</Text>
        <View style={styles.Form}>
          <Inputs title="Country" />
          <Inputs title="Province" />
          <Inputs title="District" />
          <Inputs title="Cell" />
          <Inputs title="Village" />
        </View>
        <Text style={styles.UnderText}>Address Information</Text>
        <View style={styles.Form}>
          <Inputs title="Email Address(Personal)" />
          <Inputs title="Email Address(Work)" />
          <Inputs title="Primary Number" keyboardtype="numeric" />
          <Inputs title="Second Number" keyboardtype="numeric" />
          <MainButton text="Next" />
        </View>
      </ScrollView>
      <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary_white
  },
  Text: {
    fontSize: 16,
    marginLeft: 90,
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
    color: Colors.primary_gray,
    paddingLeft: 45,
    paddingBottom: 5,
    padding: 15
  }
});