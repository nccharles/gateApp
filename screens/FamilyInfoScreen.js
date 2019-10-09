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
} from 'react-native';
import Inputs from '../components/Input';
import Header from '../components/Header';
import MainButton from "../components/Buttons/mainButton";
const { width } = Dimensions.get("window");

class FamilyInfoScreen extends Component {
    render() {

        return (
            <ScrollView style={styles.container}>
                <Header title="profile" />
                <Text style={styles.text}>Family Information</Text>
                <View style={styles.Form}>
                    <Inputs title="Father's Firstname" />
                    <Inputs title="Father's Surname" />
                    <Inputs title="Mother's Firstname" />
                    <Inputs title="Mother's Surname" />
                    <Inputs title="Spouse Firstname" />
                    <Inputs title="Spouse Middle Name" />
                    <Inputs title="Spouse Lastname" />
                    <Inputs title="Spouse ID" keyboardtype="numeric" />
                    <Inputs title="Telephone" keyboardtype="numeric" />
                    <Inputs title="Number of Children(if any)" keyboardtype="numeric" />
                    <Inputs title="Dependency (if any)" keyboardtype="numeric" />
                    <MainButton text="Next" />
                </View>
            </ScrollView>
        )
    }
}
export default FamilyInfoScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Form: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
    },
})