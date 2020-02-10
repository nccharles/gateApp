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

class UserModificationScreen extends Component {

    render() {

        return (

            <View style={styles.container}>

                <Header headerName="Request" />

                <ScrollView>

                    <Text style={styles.text}></Text>

                    <View style={styles.Form}>

                        <Inputs title="Enter Code" />
                        <Inputs title="User's National ID/Passport" />
                        <MainButton text="Continue" />

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
UserModificationScreen.navigationOptions = {
    headerShown: false,
};
export default UserModificationScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Form: {
        fontFamily: 'font-regular',
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontFamily: 'font-regular',
        textAlign: "center",
        padding: 15,
        fontSize: 20
    }
});
