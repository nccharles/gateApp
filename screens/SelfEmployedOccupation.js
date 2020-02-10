import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Dimensions } from "react-native";

import Header from "../components/Header/BackHeader";
import Inputs from "../components/Input";
import Button from "../components/Buttons/mainButton";
const { width } = Dimensions.get("window");

export default class SelfEmployedOccupation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      business_type: '',
      business_name: "",
      tin_number: '',
      country: "",
      province: "",
      district: "",
      street: '',
    };

  }
  //Backend  API

  SelfEmployee = () => {
    var data = {
      business_type: this.state.business_type,
      business_name: this.state.business_name,
      tin_number: this.state.tin_number,
      country: this.state.country,
      province: this.state.province,
      district: this.state.district,
      street: this.state.street,
    }
    fetch('https://infour.herokuapp.com/api/self_employed_occupation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    })
      .then(Response => {
        Response.json();
        console.log(Response)
      })

      .catch((error) => {
        console.log(error)
      })

  }

  //end Backend

  render() {

    return (

      <ScrollView style={styles.container}>

        <Header headerName="Self Employed" />

        <Text style={styles.Text}>Self Employed</Text>

        <View style={styles.Form}>
          <Inputs title="Type of Business" onChangeText={business_type => this.setState({ business_type: business_type })}
            value={this.state.business_type} />
          <Inputs title="Business Name" onChangeText={business_name => this.setState({ business_name: business_name })}
            value={this.state.business_name} />
          <Inputs title="TIN Number" onChangeText={tin_number => this.setState({ tin_number: tin_number })}
            value={this.state.tin_number} />

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
          <Button text="Next" onPress={this.SelfEmployee} />

        </View>

        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />

      </ScrollView>

    );
  }
}
SelfEmployedOccupation.navigationOptions = {
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