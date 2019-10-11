import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import Header from "../components/Header/BackHeader";
import Inputs from "../components/Input";

export default function Occupation() {
  return (
    <ScrollView style={styles.container}>
      <Header headerName="Occupation" />
      <Text style={styles.Text}>Occupation</Text>
      <View style={styles.Form}>
        <Inputs title="Select" />
      </View> 
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
    marginLeft: 120,
    paddingTop: 24
  },
  Form: {
    justifyContent: "center",
    alignItems: "center"
  }
});