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

class UserProfileScreen extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Header headerName="profile" />
                <View style={styles.imageContainer}>
                    <Image style={styles.profile} source={require('../assets/images/icon.png')} />
                </View>
                <ScrollView>

                    <Text style={styles.title}>Personal Information</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <TransInput title="Date of Birth" />
                        <TransInput title="Place Of Birth" />
                        <TransInput title="Sex" />
                        <TransInput title="Nationality" />
                        <TransInput title="National ID/Passport" />
                        <TransInput title="Marital Status" />
                    </View>
                    <Text style={styles.title}>Current Resident</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <TransInput title="Country" />
                        <TransInput title="Province" />
                        <TransInput title="District" />
                        <TransInput title="Sector" />
                        <TransInput title="Cell" />
                        <TransInput title="Village" />
                    </View>
                    <Text style={styles.title}>Current Information</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <TransInput title="Email Address(Personal)" />
                        <TransInput title="Email Address (Work)" />
                        <TransInput title="Primary Number" />
                        <TransInput title="Second Number" />
                    </View>
                    <Text style={styles.title}>Family Information</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <TransInput title="Father's Firstname" />
                        <TransInput title="Father's Lastname" />
                        <TransInput title="Mother's Firstname" />
                        <TransInput title="Mother's Lastname" />
                        <TransInput title="Spouse Firstname" />
                        <TransInput title="Spouse Middlename" />
                        <TransInput title="Spouse lastname" />
                        <TransInput title="Spouse ID" />
                        <TransInput title="Spouse Telephone" />
                        <TransInput title="Number of Children" />
                        <TransInput title="Dependency" />
                    </View>
                    <Text style={styles.title}>Occupation</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <TransInput title="Student" />
                        <TransInput title="University" />
                    </View>
                    <Text style={styles.title}>Address</Text>

                    <View style={styles.Form}>
                        <TransInput title="Country" />
                        <TransInput title="Province" />
                        <TransInput title="Sector" />
                    </View>
                    <Text style={styles.title}>Insurance Information</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <TransInput title="Insurance type" />
                        <TransInput title="Holder" />
                        <TransInput title="Card Number" />
                        <TransInput title="Date of Issue" />
                        <TransInput title="Insurance expiry Date" />
                        <TransInput title="Insurance Coverage" />
                        <TransInput title="Spouse Lastname" />
                        <TransInput title="Insurance Coverage" />

                    </View>
                    <Text style={styles.title}>Bank Information</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <TransInput title="Bank name" />
                    </View>
                    <Text style={styles.title}>Bank Information</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <TransInput title="Bank Name" />

                    </View>
                    <Text style={styles.title}>Social Media Information</Text>
                    <View style={styles.line}>

                    </View>
                    <View style={styles.Form}>
                        <TransInput title="Twitter" />
                        <TransInput title="Facebook" />
                        <TransInput title="Instagram" />
                        <TransInput title="Pinterest" />
                        <TransInput title="Tik-Tok" />

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
export default UserProfileScreen;
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