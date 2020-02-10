import React, { Component } from "react";
import { View, StyleSheet, Button, Text, Image, Alert } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { TouchableOpacity } from "react-native-gesture-handler";

class Profile extends Component {

  render() {

    return (

      <View style={styles.container}>

        <View style={styles.Profile}>
          <View>

            <Image source={require("../assets/images/russelprofile.jpg")} style={styles.img} />

          </View>

          <View style={styles.NameEmail}>

            <Text style={styles.UserName}>Russel WestBrook</Text>
            <Text style={styles.EmailAddress}>russel89@gmail.com</Text>

          </View>

        </View>

        <View style={styles.SettingsButtons}>

          <TouchableOpacity style={styles.Button} onPress={() => this.props.navigation.navigate('ClientEdit')}>

            <Icon name="account-edit" size={30} color="#707070" style={styles.iconback} />
            <Text style={styles.Label}>Edit Profile</Text>

          </TouchableOpacity>

        </View>

        <View style={styles.SettingsButtons}>

          <View style={styles.Button}>

            <Icon name="help" size={30} color="#707070" style={styles.iconback} />

            <Text style={styles.Label}>Help</Text>

          </View>

        </View>

        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={styles.SettingsButtons}>

          <View style={styles.Button}>

            <Icon name="logout" size={30} color="#707070" style={styles.iconback} />
            <Text style={styles.Label}>Logout</Text>

          </View>

        </TouchableOpacity>

      </View>
    );
  }
}
Profile.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  Profile: {
    flexDirection: "row",
    marginLeft: 30,
    marginTop: 120
  },

  Button: {
    flexDirection: "row"
  },

  NameEmail: {
    flexDirection: "column"
  },

  img: {
    borderRadius: 40,
    height: 80,
    width: 80
  },

  Label: {
    fontSize: 12,
    paddingTop: 10,
    paddingLeft: 10,
    color: '#232323',
    fontFamily: 'font-regular',
  },

  UserName: {
    color: "#232323",
    marginTop: 30,
    fontSize: 16,
    fontFamily: 'font-semi',
    paddingLeft: 10
  },

  EmailAddress: {
    paddingLeft: 12,
    color: "#707070",
    fontFamily: 'font-regular',
    fontSize: 10,
  },

  SettingsButtons: {
    marginTop: 20,
    marginLeft: 30,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderRadius: 6,
    height: 37,
    width: 260,
    flexDirection: "column",

  }
});

export default Profile;
