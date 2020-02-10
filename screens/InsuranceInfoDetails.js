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
        super(props);
        this.state = {
            insurance_name: '',
            telephone: '',
            date_of_birth: '',
            expiration_date: '',

        };
    }
    Insurance = () => {
        var data = {
            insurance_name: this.state.insurance_name,
            telephone: this.state.telephone,
            date_of_birth: this.state.date_of_birth,
            expiration_date: this.state.expiration_date,
        }
        fetch('https://infour.herokuapp.com/api/insurance', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        }).then(function (response) {
            return response.json();
        })
            .then(function (result) {
                console.log(result);
            })
            .catch(function (error) {
                console.log('Request failed', error);
            });
    }
    //end Backend


    render() {

        return (

            <View style={styles.container}>

                <Header onPress={() => this.props.navigation.navigate('Asset')} headerName="profile" />

                <ScrollView>

                    <Text style={styles.text}>Insurance</Text>

                    <View style={styles.Form}>

                        <Inputs title="Insurance Name" onChangeText={insurance_name => this.setState({ insurance_name: insurance_name })}
                            value={this.state.insurance_name} />
                        <Inputs title="Insurance Number" keyboardtype="numeric" onChangeText={telephone => this.setState({ telephone: telephone })}
                            value={this.state.telephone} />
                        {/* <Inputs title="Telephone" keyboardtype="numeric" /> */}
                        <Datepicker title="Date of Issue" date_of_birth={this.state.date_of_birth}
                            onDateChange={(date_of_birth) => { this.setState({ date_of_birth: date_of_birth }) }} />

                        <Datepicker title="Date of Expiration" expiration_date={this.state.expiration_date}
                            onDateChange={(expiration_date) => { this.setState({ expiration_date: expiration_date }) }} />

                        {/* <Inputs title="Insurance Coverage" /> */}
                        <MainButton text="Next" onPress={this.Insurance} />

                    </View>

                    {/* <MainCheckBox title="Liability Coverage" />
                    <MainCheckBox title="Comprehensive Insurance" />
                    <MainCheckBox title="Uninsured Motorist Insurance" />
                    <MainCheckBox title="Medical payments Coverage" />
                    <MainCheckBox title="Personal Injury" />
                    <MainCheckBox title="Gap Insurance" />
                    <MainCheckBox title="Towing and Labor Insurance" />
                    <MainCheckBox title="Rental reimbursement Insurance" />
                    <MainCheckBox title="Classic Car Insurance" />
                    <TransInput title="Other:" /> */}


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
    headerShown: false,
};
export default InsuranceInfoDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Form: {
        fontFamily: 'font-regular',
        padding: 15,
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontFamily: 'font-semi',
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
        color: "#232323"
    },
})