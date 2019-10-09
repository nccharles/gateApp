import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import propTypes from "prop-types";
import Icon from "@expo/vector-icons/Ionicons";

//create Component

export function Header(props) {
  const { title, color, ...otherProps } = props;
  return (
    <View style={styles.header} {...otherProps}>
      <Icon name="md-arrow-back" size={24} style={styles.iconback} />
      <Text style={styles.text}>{title}</Text>
      <StatusBar barStyle="light-content" />
    </View>
  );
}

Header.propTypes = {
  title: propTypes.string.isRequired,
  color: propTypes.string,
  ...View.propTypes
};

Header.defaultProps = {
  color: "blue"
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#2B5ADC",
    height: 65,
    width: 360,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -25,
    marginLeft: 200,
    color: "#ffff"
  },
  iconback: {
    fontWeight: "bold",
    marginTop: 30,
    marginRight: 320,
    color: "#ffff"
  }
});

//Export the component so that it can be reusable
export default Header;
