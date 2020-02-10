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

class ClientHomeScreen extends Component {

    render() {

        return (

            <View style={styles.container}>

                <Header onPress={() => this.props.navigation.navigate('Cprofile')} headerName="Client" />

                <ScrollView>

                    <Text style={styles.text}>Services</Text>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Request')}>

                        <Text style={styles.title}>Get user Information </Text>

                        <View style={styles.description}>

                            <Icon.Feather name={Platform.os === 'ios' ? 'user-check' : 'user-check'} size={30} style={styles.icon} />

                            <Text style={styles.Form}>
                                Lorem ipsum Lorem ipsum
                                Lorem ipsum Lorem ipsum Lorem ipsum
                                lorem ipsum
                            </Text>

                        </View>

                    </TouchableOpacity>

                    <View style={styles.line}>
                    </View>

                    <Text style={styles.title}>Request Push Notification</Text>

                    <View style={styles.description}>

                        <Icon.Entypo name={Platform.os === 'ios' ? 'popup' : 'popup'} size={30} style={styles.icon} />

                        <Text style={styles.Form}>
                            Lorem ipsum Lorem
                            ipsum Lorem ipsum Lorem ipsum
                            Lorem ipsum Lorem ipsum lorem ipsum
                        </Text>

                    </View>

                </ScrollView>

            </View>
        );
    }
}
ClientHomeScreen.navigationOptions = {
    headerShown: false,
};
export default ClientHomeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Form: {
        fontFamily: 'font-regular',
        color: '#707070',
        // paddingBottom: 20,
        margin: width / 23,
        fontSize: 13,
    },

    text: {
        fontFamily: 'font-semi',
        padding: 15,
        fontSize: 13,
        color: "#232323"
    },

    line: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#707070',
        opacity: 0.3,
    },

    title: {
        fontFamily: 'font-bold',
        fontSize: 12,
        paddingLeft: 35,
        paddingTop: 10,
        color: "#232323"
    },

    description: {
        padding: 10,
        color: '#707070',
        flexDirection: 'row',
        fontSize: 12,
    },

    icon: {
        paddingTop: width / 20,
    },
});
