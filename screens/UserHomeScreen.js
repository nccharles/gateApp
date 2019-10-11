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
import * as Icon from '@expo/vector-icons'
import Inputs from "../components/Input";
import Header from "../components/Header/NoBackHeader";
import MainButton from "../components/Buttons/mainButton";
const { width } = Dimensions.get("window");

class UserHomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header headerName="Client" />
                <ScrollView>
                    <Text style={styles.text}>Services</Text>
                    <Text style={styles.title}> Get User Information</Text>
                    <View style={styles.description}>

                        <Icon.Feather name={Platform.os === 'ios' ? 'user-check' : 'user-check'}
                            size={30} style={styles.icon} />

                        <Text style={styles.Form}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                lorem ipsum</Text>
                    </View>
                    <View style={styles.line}>

                    </View>
                    <Text style={styles.title}>profile Modification</Text>
                    <View style={styles.description}>
                        <Icon.Entypo name={Platform.os === 'ios' ? 'popup' : 'popup'}
                            size={30} style={styles.icon} />
                        <Text style={styles.Form}>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                lorem ipsum</Text>
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
export default UserHomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    Form: {
        fontFamily: 'font-regulary',
        color: '#707070',
        // paddingBottom: 20,
        margin: 10,
    },
    text: {
        fontFamily: 'font-regulary',
        padding: 15,
        fontSize: 15,

    },
    line: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#707070',
        opacity: 0.3,

    },
    title: {
        fontFamily: 'font-bold',
        fontSize: 15,
        paddingLeft: 35,
        paddingTop: 10,
    },
    description: {
        padding: 10,
        color: '#707070',
        flexDirection: 'row',
    },

    icon: {
        paddingTop: 8,
    }
});
