/**
 * Button component
 * Renders a button and calls a function passed via onPress prop once tapped
 */

import React, { Component } from 'react';
import {
  StyleSheet,       // CSS-like styles
  Text,             // Renders text
  TouchableOpacity, // Pressable container
  View,Dimensions              // Container component
} from 'react-native';
import Colors from '../../constants/Colors';
const {width}=Dimensions.get('window')
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
    borderRadius: 6,
    marginVertical: 10, 
    // width: width-35,
    backgroundColor: Colors.secondary,   // White colored border
    paddingHorizontal: 50,    // Horizontal padding
    paddingVertical: 8,      // Vertical padding
  },
  // Button text
  text: {
    color: Colors.primary_white,
    textAlign: 'center',
    fontFamily: 'space-mono',
  },
});