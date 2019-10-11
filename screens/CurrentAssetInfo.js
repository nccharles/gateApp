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

class CurrentAssetInfo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header headerName="profile" />
                <ScrollView>
                    <Text style={styles.text}>Current Asset Information</Text>
                    <View style={styles.Form}>
                        <Inputs title="Asset Name" />
                        <Inputs title="Registration Number" />
                        <MainButton text="next" />
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
export default CurrentAssetInfo;
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
    textForm: {
        margin: 15,
    }
});
