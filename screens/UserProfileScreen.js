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
    KeyboardAvoidingView,
    ActivityIndicator
} from 'react-native';
import Inputs from '../components/Input';
import Header from '../components/Header/BackHeader';
import MainButton from "../components/Buttons/mainButton";
import Colors from '../constants/Colors';
import Datepicker from '../components/DatePickers/datePicker';
import Label from '../components/TextInputs/labels';
import { token } from "../constants/util";
const { width } = Dimensions.get("window");

class UserProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            dataSource: [],
            asset: [],

        }
    }
    componentDidMount() {
        fetch('https://infour.herokuapp.com/api/social_media')
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: true,
                    dataSource: responseJson[0],

                })
                console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
        fetch('https://infour.herokuapp.com/api/assets')
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: true,
                    asset: responseJson[0],

                })
                console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        var { isLoading, dataSource, asset } = this.state;

        if (!isLoading) {
            return (
                <View style={styles.Form}>
                    <ActivityIndicator />

                </View>
            )
        }
        else {
            //     let movies = this.state.dataSource.map((val, key) => {


            return (
                <View style={styles.container} >


                    <Header onPress={() => this.props.navigation.navigate('UserHome')} headerName="profile" />

                    <ScrollView>

                        <View style={styles.imageContainer}>

                            <Image style={styles.profile} source={require('../assets/images/Logo_Divine_Tag-02.png')} />

                        </View>

                        <Text style={styles.title}>Personal Information</Text>

                        <View style={styles.line}>
                        </View>


                        <View key={dataSource.id} style={styles.Form} >

                            <Label title="Date of Birth" text={asset.asset_name} />
                            <Label title="Place Of Birth " />
                            <Label title="Sex" />
                            <Label title="Nationality" />
                            <Label title="National ID/Passport" />
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

                            <Label title="Twitter" text={dataSource.twitter} />
                            <Label title="Facebook" text={dataSource.facebook} />
                            <Label title="Instagram" text={dataSource.instagram} />
                            <Label title="Pinterest" text={dataSource.linkedin} />
                            <Label title="Tik-Tok" text={dataSource.whatsup_Number} />

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
}




UserProfileScreen.navigationOptions = {
    headerShown: false,
};
export default UserProfileScreen;
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
        fontSize: 15,
        color: Colors.tintColor,
    },

    profile: {
        width: 180,
        height: 180,
        borderRadius: 90,
        ...Platform.select({
            ios: {
                shadowColor: 'rgba(0,0,0,0.4)',
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.8,
                shadowRadius: 90,
            },
            android: {
                elevation: 10,
            },
        }),

    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',

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