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
import Colors from "../constants/Colors";
const { width } = Dimensions.get("window");

class FixedAssetInfo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header headerName="profile" />
                <ScrollView>
                    <Text style={styles.text}>Fixed Asset Information</Text>
                    <View style={styles.Form}>
                        <Inputs title="Select" />
                        <Inputs title="Land Number" />
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
                <KeyboardAvoidingView
                    behavior={"padding"}
                    keyboardVerticalOffset={width / 24}
                />
            </View>
        );
    }
}
FixedAssetInfo.navigationOptions = {
    header: null,
  };
export default FixedAssetInfo;
const styles = StyleSheet.create({
    container: {
        flex: 1
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
