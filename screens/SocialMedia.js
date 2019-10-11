import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import Header from "../components/Header/BackHeader";
import Button from '../components/Buttons/mainButton';


export default function SocialMedia() {
  return (
    <ScrollView style={styles.container}>
      <Header headerName="Profile" />
      <Text style={styles.Text}>Social Media</Text>
      <View style={styles.Form}>
        <View style={styles.iconalign}>
            <Icon name="logo-twitter" size={40} color='#707070' style={styles.iconback} />
            <Text style={styles.iconlabel}>Twitter</Text>
            <Icon name="ios-add-circle" color="green" size={40} color='#707070' style={styles.add} />

        </View>
        <View style={styles.iconalign}>
            <Icon name="logo-whatsapp" size={40} color='#707070' style={styles.iconback} />
            <Text style={styles.iconlabel}>Whatsapp</Text>
            <Icon name="ios-add-circle" color="green" size={40} color='#707070' style={styles.add} />
        </View>
        <View style={styles.iconalign}>
            <Icon name="logo-instagram" size={40} color='#707070' style={styles.iconback} />
            <Text style={styles.iconlabel}>Instagram</Text>
            <Icon name="ios-add-circle" color="green" size={40} color='#707070' style={styles.add} />
        </View>
        <View style={styles.iconalign}>
            <Icon name="logo-linkedin" size={40} color='#707070' style={styles.iconback} />
            <Text style={styles.iconlabel}>Linkedin</Text>
            <Icon name="ios-add-circle" color="green" size={40} color='#707070' style={styles.add} />
        </View>
        <View style={styles.iconalign}>
            <Icon name="logo-facebook" size={40} color='#707070' style={styles.iconback} />
            <Text style={styles.iconlabel}>Facebook</Text>
            <Icon name="ios-add-circle" color="green" size={40} color='#707070' style={styles.add} />
        </View>
      </View>
      <Button text="Next" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },
  Text: {
    fontSize: 16,
    textAlign:'center',
    paddingTop: 44,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Form: {
    marginTop: 40
  },
  iconalign: {
      flexDirection: 'row',
      paddingLeft: 80,
  },
  iconlabel:{
      margin: 20
  },
  add: {
      backgroundColor: 'green',
      height: 40,
      borderRadius: 20,
      color: 'white',
      paddingEnd: 6
  }
});