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
import Colors from "../constants/Colors";
const { width } = Dimensions.get("window");

class FixedAssetInfo extends Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Header title="profile" />
                <Text style={styles.text}>Fixed Asset Information</Text>
                <View style={styles.Form}>
                    <Inputs title="Select" />
                    <Inputs title="Land Number" />
                    <Inputs title="TIN Number" />
                </View>
                <View>

                    <Text style={styles.textForm}>Address</Text>
                </View>
                <View style={styles.Form}>
                    <Inputs title="Country" />
                    <Inputs title="Province" />
                    <Inputs title="District" />
                    <Inputs title="Sector" />
                    <MainButton text="Next" />
                </View>
            </ScrollView>
        );
    }
}
export default FixedAssetInfo;
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
