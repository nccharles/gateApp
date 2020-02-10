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
      first_name: '',
      middle_name: '',
      surname: '',
      date_of_birth: '',
      place_of_birth: '',
      sex: '',
      nationality: '',
      id_number: '',
      marital_status: '',
      country: '',
      province: '',
      district: '',
      village: '',
      cell: '',
      email_work: '',
      primary_number: '',
      secondary_number: '',

    };
  }
  Personal = () => {
    var data = {
      first_name: this.state.first_name,
      middle_name: this.state.middle_name,
      surname: this.state.surname,
      date_of_birth: this.state.date_of_birth,
      place_of_birth: this.state.place_of_birth,
      sex: this.state.sex,
      nationality: this.state.nationality,
      id_number: this.state.id_number,
      marital_status: this.state.marital_status,
      country: this.state.country,
      province: this.state.province,
      district: this.state.district,
      village: this.state.village,
      cell: this.state.cell,
      email_work: this.state.email_work,
      primary_number: this.state.primary_number,
      secondary_number: this.state.secondary_number,
    }
    fetch('https://infour.herokuapp.com/api/account', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    }).then(function (response) {
      return response.json();
    })
      .then(function (result) {
        console.log(result);
      })
      .catch(function (error) {
        console.log('Request failed', error);
      });
  }
  //end Backend

  render() {

    return (

      <View style={styles.container}>

        <BackHeader headerName="Profile" onPress={() => alert('it should go back')} />

        <ScrollView>

          <Text style={styles.Text}>Personal Information</Text>

          <View style={styles.Form}>

            <Inputs title="First Name" onChangeText={first_name => this.setState({ first_name: first_name })}
              value={this.state.first_name} />
            <Inputs title="Middle Name" onChangeText={middle_name => this.setState({ middle_name: middle_name })}
              value={this.state.middle_name} />
            <Inputs title="Last Name" onChangeText={surname => this.setState({ surname: surname })}
              value={this.state.surname} />
            <Datepicker title="Date of Birth" date_of_birth={this.state.date_of_birth}
              onDateChange={(date_of_birth) => { this.setState({ date_of_birth: date_of_birth }) }} />
            <Inputs title="Place of Birth" onChangeText={place_of_birth => this.setState({ place_of_birth: place_of_birth })}
              value={this.state.place_of_birth} />

            <View style={styles.gendertext}>

              <Text style={styles.gender}>Sex</Text>

            </View>
            <View style={styles.border}>

              <Picker
                style={styles.picker}
                selectedValue={this.state.sex}
                onValueChange={(itemValue, itemIndex) => this.setState({ sex: itemValue })}>
                <Picker.Item label="Select" value="Select" />
                <Picker.Item label="female" value="female" />
                <Picker.Item label="male" value="male" />
              </Picker>

            </View>
            <Inputs title="Nationality" onChangeText={nationality => this.setState({ nationality: nationality })}
              value={this.state.nationality} />
            <Inputs title="National ID/Passport" keyboardtype="numeric" onChangeText={id_number => this.setState({ id_number: id_number })}
              value={this.state.id_number} />

            <View style={styles.gendertext}>

              <Text style={styles.gender}> Status</Text>

            </View>
            <View style={styles.border}>

              <Picker
                style={styles.picker}
                selectedValue={this.state.marital_status}
                onValueChange={(itemValue, itemIndex) => this.setState({ marital_status: itemValue })}>
                <Picker.Item label="Select" value="Select" />
                <Picker.Item label="Single" value="Single" />
                <Picker.Item label="Married" value="Married" />
                <Picker.Item label="Divorced" value="Divorced" />
              </Picker>

            </View>
          </View>
          <Text style={styles.UnderText}>Current Resident</Text>

          <View style={styles.Form}>

            <Inputs title="Country" onChangeText={country => this.setState({ country: country })}
              value={this.state.country} />
            <Inputs title="Province" onChangeText={province => this.setState({ province: province })}
              value={this.state.province} />
            <Inputs title="District" onChangeText={district => this.setState({ district: district })}
              value={this.state.district} />
            <Inputs title="Village" onChangeText={village => this.setState({ village: village })}
              value={this.state.village} />
            <Inputs title="Cell" onChangeText={cell => this.setState({ cell: cell })}
              value={this.state.cell} />

          </View>

          <Text style={styles.UnderText}>Address Information</Text>

          <View style={styles.Form}>

            <Inputs title="Email Address(Work)" onChangeText={email_work => this.setState({ email_work: email_work })}
              value={this.state.email_work} />
            <Inputs title="Primary Number" keyboardtype="numeric" onChangeText={primary_number => this.setState({ primary_number: primary_number })}
              value={this.state.primary_number} />
            <Inputs title="Second Number" keyboardtype="numeric" onChangeText={secondary_number => this.setState({ secondary_number: secondary_number })}
              value={this.state.secondary_number} />
            <MainButton text="Next" onPress={this.Personal} />

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
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary_white
  },

  Text: {
    fontSize: 15,
    padding: width / 24,
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
    fontSize: 13,
    color: "#707070",
    fontFamily: 'font-regular',
  },

  border: {
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 5,
  }
});