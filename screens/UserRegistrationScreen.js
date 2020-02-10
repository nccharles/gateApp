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

class UserRegistrationScreen extends Component {

    render() {

        return (

            <View style={styles.container}>

                <Header headerName="profile" onPress={() => this.props.navigation.navigate('TabScreen')} />

                <ScrollView>

                    <Text style={styles.text}>Enter Your Code</Text>

                    <View style={styles.Form}>

                        <Inputs title="Code" />
                        <MainButton text="Verify" />
                        <MainButton text="Resend Code" />

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
UserRegistrationScreen.navigationOptions = {
    headerShown: false,
};
export default UserRegistrationScreen;

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
