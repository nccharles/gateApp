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

class AssetInfoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            assetType: ""
        };
    }

    AssetType = () => {
        var variable = this.state.assetType;
        if (variable == "Fixed") {
            this.props.navigation.navigate("Fixed");
        } else if (variable == "Current") {
            this.props.navigation.navigate("Current");
        } else {
            alert("Please select account type");
        }
    };

    render() {

        return (

            <View style={styles.container}>

                <ScrollView>

                    <Header headerName="profile" />

                    <Text style={styles.text}>Asset Information</Text>

                    <View style={styles.Form}>

                        <Picker
                            style={styles.picker}
                            selectedValue={this.state.assetType}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({ assetType: itemValue })}>
                            <Picker.Item label="Fixed" value="Fixed" />
                            <Picker.Item label="Current" value="Current" />

                        </Picker>

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
    headerShown: false,
};
export default AssetInfoScreen;
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
        fontFamily: 'font-semi',
        textAlign: "center",
        padding: 15,
        fontSize: 15,
        color: "#232323"
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
    },

});
