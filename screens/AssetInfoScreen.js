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
import MainButton from "../components/MainButton";
const { width } = Dimensions.get("window");

class AssetInfoScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: ""
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header headerName="profile" />
                    <Text style={styles.text}>Asset Information</Text>
                    <View style={styles.Form}>
                        <Picker

                            selectedValue={this.state.language}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}>
                            <Picker.Item label="Select" value="Select" />
                            <Picker.Item label="Fixed" value="Fixed" />
                            <Picker.Item label="Current" value="Current" />

                        </Picker>
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
AssetInfoScreen.navigationOptions = {
    header: null,
};
export default AssetInfoScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Form: {
        fontFamily: 'font-regulary',
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: 'font-regulary',
        textAlign: "center",
        padding: 15,
        fontSize: 20
    },
    picker: {
        height: 35,
        width: 260,
        color: '#707070',
        paddingTop: 15,
        borderColor: "#d4d4d4",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#f8f8f8"
    }
});
