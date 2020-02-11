import React, { Component } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from "react-native";

import Header from "../components/Header/BackHeader";
import Inputs from "../components/Input";
import Button from "../components/Buttons/mainButton";
import { token } from "../constants/util";
const { width } = Dimensions.get("window");

export default class StudentOccupation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      school: '',
      country: "",
      province: "",
      district: "",
      street: '',
    };

  }
  //Backend  API

  Student = () => {
    var data = {
      school: this.state.school,
      country: this.state.country,
      province: this.state.province,
      district: this.state.district,
      street: this.state.street,
    }
    fetch('https://infour.herokuapp.com/api/student_occupation', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    })
      .then((response) => response.json())
      .then(async (response) => {

        // console.log(response)
        await AsyncStorage.setItem(token, response.token);
        if (response.token !== null) {
          this.props.navigation.navigate('InsuranceDetails');
        }
        else {
          console.log('try again')
        }
        // console.log(response);
      }).catch((error) => {
        console.log(error)
      });
  }
  //end Backend

  render() {
    return (

      <ScrollView style={styles.container}>

        <Header headerName="Student Occupation" onPress={() => this.props.navigation.navigate('Occupation')} />

        <Text style={styles.Text}>Student</Text>

        <View style={styles.Form}>

          <Inputs title="School/University/Institute" onChangeText={school => this.setState({ school: school })}
            value={this.state.school} />

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
          <Button text="Next" onPress={this.Student} />

        </View>

        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />

      </ScrollView>
    );
  }
}
StudentOccupation.navigationOptions = {
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
  }
});