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
// import Inputs from '../components/Input';
import Header from '../components/Header/BackHeader';
import MainButton from "../components/Buttons/mainButton";
import MainCheckBox from '../components/CheckBoxs/mainCheckBox';
const { width } = Dimensions.get("window");

class ClientFormtwoScreen extends Component {
    render() {

        return (

            <View style={styles.container}>

                <Header onPress={() => this.props.navigation.goBack()} headerName="Info Request" />

                <ScrollView>

                    <Text style={styles.small}>Please Check every option that you need</Text>
                    <Text style={styles.text}>Family Information</Text>

                    <View style={styles.Form}>

                        <MainCheckBox title="Father's Firstname" />
                        <MainCheckBox title="Father's Surname" />
                        <MainCheckBox title="Mother's Firstname" />
                        <MainCheckBox title="Mother's Surname" />
                        <MainCheckBox title="Spouse Firstname" />
                        <MainCheckBox title="Spouse Middle Name" />
                        <MainCheckBox title="Spouse Lastname" />
                        <MainCheckBox title="Spouse ID" />
                        <MainCheckBox title="Telephone" />
                        <MainCheckBox title="Number of Children" />
                        <MainCheckBox title="Dependency" />

                        <MainButton text="Next" onPress={() => this.props.navigation.navigate('FormThree')} />

                    </View>

                </ScrollView>

            </View>
        )
    }
}
ClientFormtwoScreen.navigationOptions = {
    header: null,
};
export default ClientFormtwoScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Form: {
        fontFamily: 'font-regulary',
        padding: 15,

    },

    text: {
        fontFamily: 'font-regulary',
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
    },

    small: {
        fontFamily: 'font-regulary',
        textAlign: 'center',
        padding: 15,
        fontSize: 12,
        color: '#707070'
    }
})