import React, { Component } from "react";
import {
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Picker,
    TouchableHighlight,
    Dimensions,
    KeyboardAvoidingView
} from "react-native";
import Inputs from "../components/Input";
import Header from "../components/Header/BackHeader";
import MainButton from "../components/Buttons/mainButton";
const { width } = Dimensions.get("window");

class InsuranceInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: ""
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Header headerName="profile" />
                <ScrollView>
                    <Text style={styles.text}>Insurance Information</Text>
                    <View style={styles.Form}>
                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.language}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Select" value="Select" />
                            <Picker.Item label="Mituel" value="Mituel" />
                            <Picker.Item label="RSSB" value="RSSB" />
                            <Picker.Item label="UAP" value="UAP" />
                            {/* <Picker.Item label="Other" value="other" /> */}
                        </Picker>
                        <Inputs title="Other" />
                        <MainButton text="Next" />
                    </View>

                </ScrollView>
                <KeyboardAvoidingView
                    behavior={"padding"}
                    keyboardVerticalOffset={width / 24}
                />
            </View>
        );
    }
}
InsuranceInfoScreen.navigationOptions = {
    headerShown: false,
};
export default InsuranceInfoScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Form: {
        fontFamily: 'font-regular',
        justifyContent: "center",
        alignItems: "center",

    },
    text: {
        fontFamily: 'font-semi',
        textAlign: "center",
        padding: 15,
        fontSize: 15,
        color: '#232323'
    },
    picker: {
        fontSize: 14,
        height: 35,
        width: 260,
        color: '#707070',
        borderColor: "#d4d4d4",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#f8f8f8",
        fontSize: 12,

    }

});
