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



export function TextArea(props) {
    const { title, color, keyboardtype, ...otherProps } = props;
    return (
      <View style={styles.container} {...otherProps}>
        <Text style={styles.title}>{title}</Text>
        <TextInput
          style={styles.textarea}
           multiline={true}
           numberOfLines={3}
           selectionColor='red'
           placeholderTextColor='blue'
           underlineColorAndroid={'transparent'}
           autoCapitalize='none'
           autoCorrect={false}
           returnKeyType={"next"}
           editable={true}
           keyboardType={keyboardtype}
        />
        <KeyboardAvoidingView
          behavior={"padding"}
          keyboardVerticalOffset={width / 24}
        />
      </View>
    );
  }

TextArea.propTypes = {
    title: propTypes.string.isRequired,
    keyboardtype: propTypes.string,
    color: propTypes.string,
    ...View.propTypes
};

TextArea.defaultProps = {
    color: "blue",
}


export default TextArea;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8
  },
  textarea: {
    margin: 5,
    width: 260,
    height: 85,
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