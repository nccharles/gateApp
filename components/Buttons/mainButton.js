/**
 * Button component
 * Renders a button and calls a function passed via onPress prop once tapped
 */

import React, { Component } from 'react';
import {
  StyleSheet,       // CSS-like styles
  Text,             // Renders text
  TouchableOpacity, // Pressable container
  View, Dimensions              // Container component
} from 'react-native';
const { width } = Dimensions.get('window')
export default class MainButton extends Component {
  render({ onPress } = this.props) {
    return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{this.props.text.toUpperCase()}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // Button container
  button: {
    borderRadius: 5,
    margin: 15,
    // width: width-35,
    backgroundColor: '#26d07c',   // White colored border
    paddingHorizontal: 40,    // Horizontal padding
    paddingVertical: 8,      // Vertical padding
    width: 150,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  // Button text
  text: {
    color: "white",
    textAlign: 'center'
  },
});