import React, { Component } from "react";
import propTypes from 'prop-types';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Dimensions,
    CheckBox
} from "react-native";
import Colors from '../../constants/Colors';

export default class MainCheckBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            check: false
        }
    }
    checkBox_Test = (id) => {
        this.setState((prevState) => ({ check: !prevState.check }));
    }
    render({ title } = this.props) {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <View style={styles.check}>
                    <CheckBox
                        style={styles.input}
                        selectionColor={Colors.primary}
                        value={this.state.check}
                        onChange={this.checkBox_Test}
                    />
                </View>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        flexDirection: 'row',

    },
    check: {
        flexDirection: 'row',
        marginLeft: 'auto'

    },
    input: {
        borderBottomWidth: 1,

    },
    title: {
        fontSize: 14,
        color: "#707070",
        paddingTop: 10,

    }

});