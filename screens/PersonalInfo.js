import React, { Component } from "react";
import { Picker, StyleSheet, Text, View, KeyboardAvoidingView, Dimensions, ScrollView } from "react-native";
import Inputs from "../components/Input";
import MainButton from "../components/Buttons/mainButton";
import BackHeader from "../components/Header/BackHeader";
import Colors from "../constants/Colors";
import { UploadIcon } from "../components/UploadButton";
import Datepicker from '../components/DatePickers/datePicker';
const { width } = Dimensions.get("window");

export default class Personalinfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "", date: ''
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <BackHeader headerName="Profile" onPress={() => alert('it should go back')} />
        <ScrollView>
          <Text style={styles.Text}>Personal Information</Text>

          <View style={styles.Form}>
            <Inputs title="First Name" />
            <Inputs title="Second Name" />
            <Datepicker title="Date of Issue" date={this.state.date}
              onDateChange={(date) => { this.setState({ date: date }) }} />
            <Inputs title="Place of Birth" />
            <View style={styles.gendertext}>
              <Text style={styles.gender}>Sex</Text>
            </View>
            <View style={styles.border}>
              <Picker
                style={styles.picker}
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                <Picker.Item label="Select" value="Select" />
                <Picker.Item label="Female" value="Female" />
                <Picker.Item label="Male" value="Male" />
              </Picker>
            </View>

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
            <MainButton text="Next" onPress={
              () => this.props.navigation.navigate('FamilyInfo')} />
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
Personalinfo.navigationOptions = {
  header: null,
};
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
  },
  picker: {
    fontSize: 14,
    height: 35,
    width: 260,
    color: '#707070',
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f8f8f8"
  },
  gendertext: {
    margin: 8,
    // textAlign: 'left',
    marginRight: 250,
  },
  gender: {
    fontSize: 14,
    color: "#707070",
  },
  border: {
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 5,
  }
});