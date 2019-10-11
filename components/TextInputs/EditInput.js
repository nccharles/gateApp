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
            <View style={styles.check}>
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

    },
    input: {
        lineHeight: 40,
        width: 180,
        height: 50,
        // padding: 10,
        borderColor: "#d4d4d4",
        borderBottomWidth: 1,
        backgroundColor: "#ffff",


    },
    check: {
        flexDirection: 'row',
        marginLeft: 'auto'

    },
    title: {
        fontSize: 14,
        color: "#707070",
    }

});