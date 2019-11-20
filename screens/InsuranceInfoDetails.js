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
import TransInput from '../components/TextInputs/EditInput'
const { width } = Dimensions.get("window");

class InsuranceInfoDetails extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Header onPress={
                    () => this.props.navigation.navigate('InsuranceInfo')} headerName="profile" />
                <ScrollView>
                    <Text style={styles.text}>Insurance</Text>
                    <View style={styles.Form}>
                        <Inputs title="Holder" />

                        <Inputs title="Card Number" keyboardtype="numeric" />
                        <Inputs title="Telephone" keyboardtype="numeric" />
                        <Inputs title="Date of Issue" />
                        <Inputs title="Expiration Date" />
                        <Inputs title="Insurance Coverage" />
                        <MainCheckBox title="Liability Coverage" />
                        <MainCheckBox title="Comprehensive Insurance" />
                        <MainCheckBox title="Uninsured Motorist Insurance" />
                        <MainCheckBox title="Medical payments Coverage" />
                        <MainCheckBox title="Personal Injury" />
                        <MainCheckBox title="Gap Insurance" />
                        <MainCheckBox title="Towing and Labor Insurance" />
                        <MainCheckBox title="Rental reimbursement Insurance" />
                        <MainCheckBox title="Classic Car Insurance" />
                        <TransInput title="Other:" />
                        <MainButton text="Next" onPress={
                            () => this.props.navigation.navigate('BankInfo')} />
                        <MainButton text="Add" />

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
InsuranceInfoDetails.navigationOptions = {
    header: null,
};
export default InsuranceInfoDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Form: {
        fontFamily: 'font-regulary',
        padding: 15,
    },
    text: {
        fontFamily: 'font-regulary',
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
    },
})