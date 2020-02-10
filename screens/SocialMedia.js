import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import Header from "../components/Header/BackHeader";
import Button from '../components/Buttons/mainButton';
import Inputs from "../components/Input";

class SocialMedia extends Component {
  constructor(props) {
    super(props);
    this.state = {

      twitter: '',
      facebook: '',
      instagram: '',
      linkedin: '',
      whatsup_Number: '',


    };
  }

  Social = () => {
    var data = {
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      instagram: this.state.instagram,
      linkedin: this.state.linkedin,
      whatsup_Number: this.state.whatsup_Number,
    }
    fetch('https://infour.herokuapp.com/api/social_media', {
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
  render() {
    return (

      <ScrollView style={styles.container}>

        <Header headerName="Social Media" />

        <View style={styles.Form}>

          <Inputs title="Twitter" onChangeText={twitter => this.setState({ twitter: twitter })}
            value={this.state.twitter} />
          <Inputs title="Facebook" onChangeText={facebook => this.setState({ facebook: facebook })}
            value={this.state.facebook} />
          <Inputs title="Instagram" onChangeText={instagram => this.setState({ instagram: instagram })}
            value={this.state.instagram} />
          <Inputs title="LinkedIn" onChangeText={linkedin => this.setState({ linkedin: linkedin })}
            value={this.state.linkedin} />
          <Inputs title="WhatsApp" keyboardtype="numeric" onChangeText={whatsup_Number => this.setState({ whatsup_Number: whatsup_Number })}
            value={this.state.whatsup_Number} />
        </View>
        <View style={styles.FormButton}>
          <Button text="Next" onPress={this.Social} />
        </View>
      </ScrollView>
    );
  }
}
SocialMedia.navigationOptions = {
  headerShown: false,
};
export default SocialMedia;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },

  Text: {
    fontSize: 15,
    textAlign: 'center',
    paddingTop: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },

  Form: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },

  FormButton: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  iconalign: {
    flexDirection: 'row',
    paddingLeft: 80,
  },

  iconlabel: {
    margin: 20,
    fontFamily: 'font-regular',
    color: "#707070"
  },

  add: {
    backgroundColor: '#707070',
    height: 40,
    borderRadius: 20,
    color: 'white',
    paddingEnd: 6
  }

});