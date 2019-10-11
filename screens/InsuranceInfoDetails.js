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
    KeyboardAvoidingView
} from 'react-native';
import Inputs from '../components/Input';
import Header from '../components/Header/BackHeader';
import MainButton from "../components/Buttons/mainButton";
import Datepicker from '../components/DatePickers/datePicker';
import MainCheckBox from '../components/CheckBoxs/mainCheckBox';
const { width } = Dimensions.get("window");

class InsuranceInfoDetails extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Header headerName="profile" />
                <ScrollView>
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
                        <MainCheckBox title="main" />
                    </View>

                </ScrollView>
                <KeyboardAvoidingView
                    behavior={"padding"}
                    keyboardVerticalOffset={width / 24}
                />
            </View>
        )
    }
}
export default InsuranceInfoDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Form: {
        fontFamily: 'font-regulary',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontFamily: 'font-regulary',
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
    },
})