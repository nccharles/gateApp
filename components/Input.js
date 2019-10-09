import React from "react";
import propTypes from 'prop-types';
import {
  View,
  TextInput,
  StyleSheet,
  Text, 
  KeyboardAvoidingView, 
  Dimensions
} from "react-native";

const { width } = Dimensions.get("window");



export function Inputs(props) {
    const { title, color, keyboardtype, ...otherProps } = props;
    return (
      <View style={styles.container} {...otherProps}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.input}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          keyboardType={keyboardtype}
        />
        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />
      </View>
    );
  }

Inputs.propTypes = {
    title: propTypes.string.isRequired,
    keyboardtype: propTypes.string,
    color: propTypes.string,
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