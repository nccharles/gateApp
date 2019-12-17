import React from "react";
import propTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Entypo";

export function UploadIcon(props) {
  const {
    title,
    color,
    keyboardtype,
    value,
    onChangeText,
    ...otherProps
  } = props;
  return (
    <View style={styles.container} {...otherProps}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.upload}>
        <Icon name="upload" size={30} color="#707070" style={styles.icon} />
      </View>
    </View>
  );
}

UploadIcon.propTypes = {
  title: propTypes.string.isRequired,
  color: propTypes.string,
  onChangeText: propTypes.func,
  value: propTypes.any,
  ...View.propTypes
};

UploadIcon.defaultProps = {
  color: "blue"
};

const styles = StyleSheet.create({
  container: {},
  icon: {
    marginLeft: 208,
    paddingTop: 1,
    position: "absolute",
    opacity: 0.6
  },
  upload: {
    margin: 5,
    width: 260,
    height: 35,
    padding: 10,
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#f8f8f8"
  },
  title: {
    fontSize: 14,
    color: "#707070"
  }
});
