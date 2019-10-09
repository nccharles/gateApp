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
    Dimensions
} from "react-native";
import Inputs from "../components/Input";
import Header from "../components/Header";
import MainButton from "../components/Buttons/mainButton";
const { width } = Dimensions.get("window");

class CurrentAssetInfo extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header title="profile" />
                <Text style={styles.text}>Current Asset Information</Text>
                <View style={styles.Form}>
                    <Inputs title="Asset Name" />
                    <Inputs title="Registration Number" />
                    <MainButton text="next" />
                </View>
            </ScrollView>
        );
    }
}
export default CurrentAssetInfo;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Form: {
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        textAlign: "center",
        padding: 15,
        fontSize: 20
    },
    textForm: {
        margin: 15,
    }
});
