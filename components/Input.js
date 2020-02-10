import React from "react";
import propTypes from 'prop-types';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Dimensions
} from "react-native";
import Colors from "../constants/Colors";

export function Inputs(props) {
  const { title, color, keyboardtype, value, onChangeText, ...otherProps } = props;
  return (
    <View style={styles.container} {...otherProps}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        selectionColor={Colors.primary}
        placeholderTextColor={Colors.primary}
        underlineColorAndroid={'transparent'}
        autoCapitalize='none'
        autoCorrect={false}
        returnKeyType={"next"}
        onChangeText={onChangeText}
        value={value}
        editable={true}
      />
    </View>
  );
}

Inputs.propTypes = {
  title: propTypes.string.isRequired,
  keyboardtype: propTypes.string,
  color: propTypes.string,
  onChangeText: propTypes.func,
  value: propTypes.any,
  ...View.propTypes
};

Inputs.defaultProps = {
  color: "blue",
}


export default Inputs;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8
  },
  input: {
    margin: 5,
    width: 260,
    height: 35,
    padding: 10,
    borderColor: "#d4d4d4",
    borderWidth: 1,
    borderRadius: 5,
    color: "#707070",
    backgroundColor: "#f8f8f8"
  },
  title: {
    fontSize: 13,
    color: "#707070",
    fontFamily: 'font-regular',
  }

});