import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Dimensions } from "react-native";

import Header from "../components/Header/BackHeader";
import Inputs from "../components/Input";
import Button from "../components/Buttons/mainButton";
const { width } = Dimensions.get("window");

class EmployeeOccupation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: '',
      position: "",
      country: "",
      province: "",
      district: "",
      street: '',
    };

  }
  //Backend  API

  Employee = () => {
    var data = {
      company_name: this.state.company_name,
      position: this.state.position,
      country: this.state.country,
      province: this.state.province,
      district: this.state.district,
      street: this.state.street,
    }
    fetch('https://infour.herokuapp.com/api/employed_occupation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    })
      .then(Response => {
        Response.json();
        if (Response.status == 200) {

          this.props.navigation.navigate('Occupation');
        }
        else {
          console.log('try again')
        }
      })

      .catch((error) => {
        console.log(error)
      })

  }

  //end Backend
  render() {
    return (

      <ScrollView style={styles.container}>

        <Header headerName="Employee Job" />

        <Text style={styles.Text}>Employee</Text>

        <View style={styles.Form}>

          <Inputs title="Company" onChangeText={company_name => this.setState({ company_name: company_name })}
            value={this.state.company_name} />
          <Inputs title="Position" onChangeText={position => this.setState({ position: position })}
            value={this.state.position} />

        </View>

        <Text style={styles.UnderText}>Address</Text>

        <View style={styles.Form}>

          <Inputs title="Country" onChangeText={country => this.setState({ country: country })}
            value={this.state.country} />
          <Inputs title="Province" onChangeText={province => this.setState({ province: province })}
            value={this.state.province} />
          <Inputs title="District" onChangeText={district => this.setState({ district: district })}
            value={this.state.district} />
          <Inputs title="Street" onChangeText={street => this.setState({ street: street })}
            value={this.state.street} />

          <Button text="Next" onPress={this.Employee} />

        </View>

        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />

      </ScrollView>
    );
  }
}
EmployeeOccupation.navigationOptions = {
  headerShown: false,
};
export default EmployeeOccupation;
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