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

export function TransInput(props) {
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
                editable={false}
            />
        </View>
    );
}

TransInput.propTypes = {
    title: propTypes.string.isRequired,
    keyboardtype: propTypes.string,
    color: propTypes.string,
    onChangeText: propTypes.func,
    value: propTypes.any,
    ...View.propTypes
};

TransInput.defaultProps = {
    color: "blue",
}


export default TransInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        lineHeight: 40,
        flex: 1,

    },
    input: {
        margin: 5,
        width: 200,
        height: 35,
        padding: 10,
        borderColor: "#d4d4d4",
        borderBottomWidth: 0.5,
        backgroundColor: "#ffff"

    },
    title: {
        fontSize: 14,
        color: "#707070"
    }

});