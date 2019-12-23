import React, { Component } from 'react';
import {
    Image,
    Button,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    Picker,
    TouchableHighlight,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
} from 'react-native';
import Inputs from '../components/Input';
import Header from '../components/Header/BackHeader';
import MainButton from "../components/Buttons/mainButton";
import Datepicker from '../components/DatePickers/datePicker';
import MainCheckBox from '../components/CheckBoxs/mainCheckBox';
import TransInput from '../components/TextInputs/EditInput';

const { width } = Dimensions.get("window");

class InsuranceInfoDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (

            <View style={styles.container}>

                <Header onPress={() => this.props.navigation.navigate('Asset')} headerName="profile" />

                <ScrollView>

                    <Text style={styles.text}>Insurance</Text>

                    <View style={styles.Form}>

                        <Inputs title="Insurance Name" />
                        <Inputs title="Insurance Number" keyboardtype="numeric" />
                        <Inputs title="Telephone" keyboardtype="numeric" />
                        <Datepicker title="Date of Issue" date={this.state.date}
                            onDateChange={(date) => { this.setState({ date: date }) }} />

                        <Datepicker title="Date of Expiration" date={this.state.date}
                            onDateChange={(date) => { this.setState({ date: date }) }} />

                        <Inputs title="Insurance Coverage" />

                    </View>

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

                    <MainButton text="Next" onPress={() => this.props.navigation.navigate('BankInfo')} />

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
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontFamily: 'font-regulary',
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
    },
})