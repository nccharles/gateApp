import React from "react";
import propTypes from 'prop-types';
import {
    View,
    TextInput,
    StyleSheet,
    Text,
    Dimensions
} from "react-native";
import Colors from "../../constants/Colors";

export function Label(props) {
    const { title, color, keyboardtype, value, onChangeText, text, ...otherProps } = props;
    return (
        <View style={styles.container} {...otherProps}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.input}>{text}</Text>
        </View>
    );
}

Label.propTypes = {
    title: propTypes.string.isRequired,
    text: propTypes.string,
    keyboardtype: propTypes.string,
    color: propTypes.string,
    onChangeText: propTypes.func,
    value: propTypes.any,
    ...View.propTypes
};

Label.defaultProps = {
    color: "blue",
}


export default Label;

const styles = StyleSheet.create({
    container: {
        paddingTop: 8,
        flexDirection: 'row',
        padding: 10,


    },
    input: {
        marginLeft: 'auto',
        color: "#707070"
    },
    title: {
        fontSize: 14,
        color: "#707070"
    }

});