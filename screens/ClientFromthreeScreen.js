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
import MainCheckBox from '../components/CheckBoxs/mainCheckBox';
import Datepicker from '../components/DatePickers/datePicker';
const { width } = Dimensions.get("window");

class ClientFormthreeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            check: false
        }
    }
    checkBox_Test = (id) => {
        this.setState((prevState) => ({ check: !prevState.check }));
    }
    render() {

        return (

            <View style={styles.container}>

                <Header onPress={() => this.props.navigation.goBack()} headerName="Info Request" />

                <ScrollView>

                    <Text style={styles.small}>Please Check every option that you need</Text>
                    <Text style={styles.text}>Other</Text>

                    <View style={styles.Form}>

                        <MainCheckBox title="Occupation" />
                        <MainCheckBox title="Bank Information" />
                        <MainCheckBox title="Insurance" />
                        <MainCheckBox title="Assets Information" />
                        <MainCheckBox title="Social Media Profiles" />
                        <MainCheckBox title="Spouse Middle Name" />

                        {/* <Datepicker title="place" /> */}

                    </View>
                    <View style={styles.FormButton}>
                        <MainButton text="Send" />
                    </View>

                </ScrollView>

            </View>
        )
    }
}
ClientFormthreeScreen.navigationOptions = {
    headerShown: false,
};
export default ClientFormthreeScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Form: {
        fontFamily: 'font-regular',
        // justifyContent: 'center',
        // alignItems: 'center',
        padding: 15,
    },

    text: {
        fontFamily: 'font-semi',
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
        color: "#232323"
    },

    small: {
        fontFamily: 'font-regular',
        textAlign: 'center',
        padding: 15,
        fontSize: 12,
        color: '#707070'
    },
    FormButton: {
        justifyContent: 'center',
        alignItems: 'center'
    },
})