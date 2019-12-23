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
    Button,
    TouchableHighlight,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import Inputs from '../components/Input';
import Header from '../components/Header/BackHeader';
import MainButton from "../components/Buttons/mainButton";
import Colors from '../constants/Colors';
import Datepicker from '../components/DatePickers/datePicker';
import Label from '../components/TextInputs/labels'
const { width } = Dimensions.get("window");

class UserProfileScreen extends Component {

    render() {

        return (

            <View style={styles.container}>

                <Header onPress={() => this.props.navigation.navigate('UserHome')} headerName="profile" />

                <ScrollView>

                    <View style={styles.imageContainer}>

                        <Image style={styles.profile} source={require('../assets/images/icon.png')} />

                    </View>

                    <Text style={styles.title}>Personal Information</Text>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.Form} >

                        <Label title="Date of Birth" text="12/09/2323" />
                        <Label title="Place Of Birth " text="12/09/2323" />
                        <Label title="Sex" />
                        <Label title="Nationality" />
                        <Label title="National ID/Passport" text="Rwandese" />
                        <Label title="Marital Status" />

                    </View>

                    <Text style={styles.title}>Current Resident</Text>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.Form}>

                        <Label title="Country" />
                        <Label title="Province" />
                        <Label title="District" />
                        <Label title="Sector" />
                        <Label title="Cell" />
                        <Label title="Village" />

                    </View>
                    <Text style={styles.title}>Current Information</Text>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                        <Label title="Email Address(Personal)" />
                        <Label title="Email Address (Work)" />
                        <Label title="Primary Number" />
                        <Label title="Second Number" />

                    </View>

                    <Text style={styles.title}>Family Information</Text>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                        <Label title="Father's Firstname" />
                        <Label title="Father's Lastname" />
                        <Label title="Mother's Firstname" />
                        <Label title="Mother's Lastname" />
                        <Label title="Spouse Firstname" />
                        <Label title="Spouse Middlename" />
                        <Label title="Spouse lastname" />
                        <Label title="Spouse ID" />
                        <Label title="Spouse Telephone" />
                        <Label title="Number of Children" />
                        <Label title="Dependency" />

                    </View>

                    <Text style={styles.title}>Occupation</Text>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                        <Label title="Student" />
                        <Label title="University" />

                    </View>

                    <Text style={styles.title}>Address</Text>

                    <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                        <Label title="Country" />
                        <Label title="Province" />
                        <Label title="Sector" />

                    </View>

                    <Text style={styles.title}>Insurance Information</Text>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                        <Label title="Insurance type" />
                        <Label title="Holder" />
                        <Label title="Card Number" />
                        <Label title="Date of Issue" />
                        <Label title="Insurance expiry Date" />
                        <Label title="Insurance Coverage" />
                        <Label title="Spouse Lastname" />
                        <Label title="Insurance Coverage" />

                    </View>

                    <Text style={styles.title}>Bank Information</Text>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                        <Label title="Bank name" />

                    </View>

                    <View style={styles.line}>
                    </View>

                    <Text style={styles.title}>Social Media Information</Text>

                    <View style={styles.line}>
                    </View>

                    <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                        <Label title="Twitter" />
                        <Label title="Facebook" />
                        <Label title="Instagram" />
                        <Label title="Pinterest" />
                        <Label title="Tik-Tok" />

                    </View>

                    <View style={styles.inline}>

                        <TouchableOpacity >

                            <Text style={styles.down}>Download</Text>

                        </TouchableOpacity>

                        <TouchableOpacity>

                            <Text style={styles.downEdit}>Edit</Text>

                        </TouchableOpacity>

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
UserProfileScreen.navigationOptions = {
    header: null,
};
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

    down: {
        fontFamily: 'font-bold',
        fontSize: 18,
        padding: 10,
        textAlign: 'center',
        color: Colors.primary,
        // marginLeft: 'auto',
    },

    downEdit: {
        fontFamily: 'font-bold',
        fontSize: 18,
        padding: 10,
        textAlign: 'center',
        color: Colors.primary,

    },

    inline: {
        flexDirection: 'row',
        marginLeft: 'auto',
    }
})