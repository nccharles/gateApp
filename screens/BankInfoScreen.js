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
// import styles from '../components/select/style'
const { width } = Dimensions.get("window");

class BankInfoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bank: ""
        };
    }

    Bank = () => {
        var variable = this.state.bank;
        if (variable == "Yes") {
            this.props.navigation.navigate("BankDetails");
        } else if (variable == "No") {
            this.props.navigation.navigate("Asset");
        } else {
            alert("Please select Yes Or No");
        }
    };

    render() {

        return (

            <View style={styles.container}>

                <ScrollView>

                    <Header onPress={() => this.props.navigation.navigate('InsuranceDetails')} headerName="profile" />

                    <Text style={styles.text}>Bank Information</Text>
                    <Text style={styles.small}>Do you have a bank Account?</Text>

                    <View style={styles.Form}>

                        <Picker
                            selectedValue={this.state.bank}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) => this.setState({ bank: itemValue })}>
                            <Picker.Item label="Select" value="Select" />
                            <Picker.Item label="Yes" value="Yes" />
                            <Picker.Item label="No" value="No" />
                        </Picker>

                        <MainButton text="Next" onPress={() => this.Bank()} />

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
BankInfoScreen.navigationOptions = {
    headerShown: false,
};
export default BankInfoScreen;
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
    },

    small: {
        fontFamily: 'font-regular',
        textAlign: 'center',
        padding: 15,
        fontSize: 12,
        color: '#707070'
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
