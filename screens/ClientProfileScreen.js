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
import { TransInput } from '../components/TextInputs/nonEditInput';
import NobackHeader from '../components/Header/NoBackHeader';
import Label from '../components/TextInputs/labels';
const { width } = Dimensions.get("window");

class ClientProfileScreen extends Component {

    render() {

        return (

            <View style={styles.container}>

                <Header onPress={() => this.props.navigation.navigate('Profile')} headerName="profile" />

                <ScrollView>

                    <View style={styles.imageContainer}>

                        <Image style={styles.profile} source={require('../assets/images/icon.png')} />
                        <Text style={styles.text}>Change Profile Photo</Text>

                    </View>

                    <Text style={styles.title}>Current Resident</Text>

                    <View style={styles.line}>
                    </View>

                    <TouchableOpacity style={styles.Form} onPress={
                        () => this.props.navigation.navigate('ClientEdit')}>
                        <Label title="Name" text="Divine" />
                        <Label title="Country" />
                        <Label title="Province" />
                        <Label title="District" />
                        <Label title="Sector" />
                    </TouchableOpacity>

                    <Text style={styles.title}>Address Information</Text>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.Form} onPress={
                        () => this.props.navigation.navigate('ClientEdit')}>
                        <Label title="Email Address" />
                        <Label title="Primary number" />
                        <Label title="Secondary number" />

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
ClientProfileScreen.navigationOptions = {
    headerShown: false,
};
export default ClientProfileScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Form: {
        fontFamily: 'font-regular',
        color: '#707070',
        // paddingBottom: 20,
        padding: 10,
        lineHeight: 40,
    },

    text: {
        fontFamily: 'font-regular',
        textAlign: 'center',
        padding: 15,
        fontSize: 13,
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
        fontFamily: 'font-semi',
        fontSize: 15,
        padding: 10,
        color: "#232323"
    },

})