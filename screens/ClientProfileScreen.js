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
import Colors from '../constants/Colors';
import Datepicker from '../components/DatePickers/datePicker';
import { TransInput } from '../components/TextInputs/EditInput';
const { width } = Dimensions.get("window");

class ClientProfileScreen extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Header headerName="profile" />
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image style={styles.profile} source={require('../assets/images/icon.png')} />
                        <Text style={styles.text}>Change Profile Photo</Text>
                    </View>
                    <Text style={styles.title}>Current Resident</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <TransInput title="Name" />
                        <TransInput title="Country" />
                        <TransInput title="Province" />
                        <TransInput title="District" />
                        <TransInput title="Sector" />
                    </View>
                    <Text style={styles.title}>Address Information</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <TransInput title="Email Address" />
                        <TransInput title="Primary number" />
                        <TransInput title="Secondary number" />
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
export default ClientProfileScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Form: {
        fontFamily: 'font-regulary',
        color: '#707070',
        // paddingBottom: 20,
        padding: 10,
        lineHeight: 40,
    },
    text: {
        fontFamily: 'font-regulary',
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
        color: Colors.tintColor,

    },
    profile: {
        width: 180,
        height: 180,
        borderRadius: 90,

    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: Colors.primary_black,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    line: {
        borderBottomWidth: 0.2,
        borderBottomColor: '#707070',
        opacity: 0.4,

    },

    title: {
        fontFamily: 'font-bold',
        fontSize: 15,
        padding: 10,
    },

})