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
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Header headerName="profile" />
                    <Text style={styles.text}>Asset Information</Text>
                    <View style={styles.Form}>
                        <Inputs title="Asset Type" />
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
    }
});
