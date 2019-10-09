import React, { Component } from 'react';
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
} from 'react-native';
import Inputs from '../components/Input';
import Header from '../components/Header';
import MainButton from "../components/Buttons/mainButton";
const { width } = Dimensions.get("window");

class InsuranceInfoDetails extends Component {
    render() {

        return (
            <ScrollView style={styles.container}>
                <Header title="profile" />
                <Text style={styles.text}>Insurance</Text>
                <View style={styles.Form}>
                    <Inputs title="Holder" />

                    <Inputs title="Card Number" keyboardtype="numeric" />
                    <Inputs title="Telephone" keyboardtype="numeric" />
                    <Inputs title="Date of Issue" />
                    <Inputs title="Expiration Date" />
                    <Inputs title="Insurance Coverage" />
                    <MainButton text="Next" />
                    <MainButton text="Add" />
                </View>
            </ScrollView>
        )
    }
}
export default InsuranceInfoDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Form: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
    },
})