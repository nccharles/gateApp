import React, { Component } from "react";
import { View, StyleSheet, Button, Text, Image, Alert } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.Profile}>
          <View>
            <Image
              source={require("../assets/images/russelprofile.jpg")}
              style={styles.img}
            />
          </View>
          <View style={styles.NameEmail}>
            <Text style={styles.UserName}>Russel WestBrook</Text>
            <Text style={styles.EmailAddress}>russel89@gmail.com</Text>
          </View>
        </View>
        <View style={styles.SettingsButtons}>
          <View style={styles.Button}>
            <Icon
              name="account-edit"
              size={36}
              color="#707070"
              style={styles.iconback}
            />

            <Text style={styles.Label}>Edit Profile</Text>
          </View>
        </View>

        <View style={styles.SettingsButtons}>
          <View style={styles.Button}>
            <Icon
              name="help"
              size={36}
              color="#707070"
              style={styles.iconback}
            />

            <Text style={styles.Label}>Help</Text>
          </View>
        </View>

        <View style={styles.SettingsButtons}>
          <View style={styles.Button}>
            <Icon
              name="logout"
              size={36}
              color="#707070"
              style={styles.iconback}
            />

            <Text style={styles.Label}>Logout</Text>
          </View>
        </View>
      </View>
    );
  }
}
Profile.navigationOptions = {
  header: null,
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
    color: '#232323'
  },
  UserName: {
    color: "#232323",
    marginTop: 30,
    fontSize: 20,
    fontWeight: "bold",
    paddingLeft: 10
  },
  EmailAddress: {
    paddingLeft: 10,
    color: "#707070"
  },
  SettingsButtons: {
    marginTop: 20,
    marginLeft: 30,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderRadius: 6,
    height: 37,
    width: 260,
    flexDirection: "column"
  }
});

export default Profile;
