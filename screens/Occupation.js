import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView, Picker } from "react-native";
import Header from "../components/Header/BackHeader";
import MainButton from "../components/Buttons/mainButton";

class Occupation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      occupation: ""
    };
  }

  Occupation = () => {
    var signup = this.state.occupation;
    if (signup == "Student") {
      this.props.navigation.navigate("Student");
    } else if (signup == "Employee") {
      this.props.navigation.navigate("Employee");
    } else if (signup == "Self-Employed") {
      this.props.navigation.navigate("Self");
    } else if (signup == "Retired") {
      this.props.navigation.navigate("UserProfile")
    } else if (signup == "Other/Contractor") {
      this.props.navigation.navigate("Other")
    } else {
      alert("Please select your occupation");
    }
  };



  render() {

    return (

      <ScrollView style={styles.container}>

        <Header headerName="Occupation" />

        <Text style={styles.Text}>Occupation</Text>

        <View style={styles.Form}>

          <Picker
            style={styles.picker}
            selectedValue={this.state.occupation}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({ occupation: itemValue })} >
            <Picker.Item label="Select" value="Select" />
            <Picker.Item label="Student" value="Student" />
            <Picker.Item label="Employee" value="Employee" />
            <Picker.Item label="Self-Employed" value="Self-Employed" />
            <Picker.Item label="Retired" value="Retired" />
            <Picker.Item label="Other/Contractor" value="Other/Contractor" />
          </Picker>

          <MainButton text="Next" onPress={() => this.Occupation()} />

        </View>

      </ScrollView>

    );
  }
}
Occupation.navigationOptions = {
  header: null
};

export default Occupation;

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

  picker: {
    height: 35,
    width: 260,
    color: "#707070",
    paddingTop: 15,
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f8f8f8"
  }
});
