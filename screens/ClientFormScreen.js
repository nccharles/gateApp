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


class ClientFormScreen extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Header onPress={
                    () => this.props.navigation.navigate('TabScreen')} headerName="Info Request" />
                <ScrollView>
                    <Text style={styles.small}>Please Check every option that you need</Text>
                    <Text style={styles.text}>Personal Information</Text>
                    <View style={styles.Form}>
                        <MainCheckBox title="First Name" />
                        <MainCheckBox title="Second Name" />
                        <MainCheckBox title="Date" />
                        <MainCheckBox title="Place of Birth" />
                        <MainCheckBox title="Sex" />
                        <MainCheckBox title="Nationality" />
                        <MainCheckBox title="National ID/Passport" />
                        <MainCheckBox title="Marital Status" />
                    </View>
                    <Text style={styles.text}>Current Resident</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <MainCheckBox title="Country" />
                        <MainCheckBox title="Province" />
                        <MainCheckBox title="District" />
                        <MainCheckBox title="Cell" />
                        <MainCheckBox title="Village" />
                    </View>
                    <Text style={styles.text}>Address Information</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <MainCheckBox title="Email Address(Personal)" />
                        <MainCheckBox title="Email Address(Work)" />
                        <MainCheckBox title="Primary Number" />
                        <MainCheckBox title="Second Number" />
                        <MainButton text="Next" onPress={() => this.props.navigation.navigate('FormTwo')} />
                    </View>

                </ScrollView>

            </View>

        )
    }
}
ClientFormScreen.navigationOptions = {
    header: null,
};
export default ClientFormScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Form: {
        fontFamily: 'font-regulary',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 15,
    },
    text: {
        fontFamily: 'font-regulary',
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
    },
    line: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#707070',
        opacity: 0.3,

    },
    small: {
        fontFamily: 'font-regulary',
        textAlign: 'center',
        padding: 15,
        fontSize: 12,
        color: '#707070'
    }
})