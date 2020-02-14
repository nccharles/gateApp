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
    ActivityIndicator,
    AsyncStorage
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
            family: [],
            employee: [],
            self_: [],
            student: [],
            bank: [],
            insurance: [],
            personal: [],


        }
    }
    Personal = async () => {
        const getToken = await AsyncStorage.getItem(token);
        console.log(getToken)

        fetch('https://infour.herokuapp.com/api/account', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: true,
                    personal: responseJson,

                })
                console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    };
    Family = async () => {
        const getToken = await AsyncStorage.getItem(token);
        console.log(getToken)

        fetch('https://infour.herokuapp.com/api/family', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: true,
                    family: responseJson,

                })
                // console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    };
    Social = async () => {
        const getToken = await AsyncStorage.getItem(token);
        console.log(getToken)

        fetch('https://infour.herokuapp.com/api/social_media', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: true,
                    dataSource: responseJson,

                })
                // console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    };
    Asset = async () => {
        const getToken = await AsyncStorage.getItem(token);
        console.log(getToken)

        fetch('https://infour.herokuapp.com/api/assets', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: true,
                    asset: responseJson,

                })
                // console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    Bank = async () => {
        const getToken = await AsyncStorage.getItem(token);
        console.log(getToken)

        fetch('https://infour.herokuapp.com/api/bank_name', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: true,
                    bank: responseJson,

                })
                // console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    Insurance = async () => {
        const getToken = await AsyncStorage.getItem(token);
        console.log(getToken)

        fetch('https://infour.herokuapp.com/api/insurance', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: true,
                    insurance: responseJson,

                })
                // console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    Student = async () => {
        const getToken = await AsyncStorage.getItem(token);
        console.log(getToken)

        fetch('https://infour.herokuapp.com/api/student_occupation', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: true,
                    student: responseJson,

                })
                // console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    Self_ = async () => {
        const getToken = await AsyncStorage.getItem(token);
        console.log(getToken)

        fetch('https://infour.herokuapp.com/api/self_employed_occupation', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: true,
                    self_: responseJson,

                })
                // console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    Employee = async () => {
        const getToken = await AsyncStorage.getItem(token);
        console.log(getToken)

        fetch('https://infour.herokuapp.com/api/employed_occupation', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken}`
            },
        })
            .then((Response) => Response.json())
            .then((responseJson) => {
                this.setState({

                    isLoading: true,
                    employee: responseJson,

                })
                // console.log(responseJson)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    componentDidMount() {
        this.Asset();
        this.Personal();
        this.Bank();
        this.Employee();
        this.Family();
        this.Insurance();
        this.Self_();
        this.Social();
        this.Student();
    }
    render() {
        var { isLoading, dataSource,
            asset,
            personal,
            family,
            employee,
            self_,
            student,
            bank,
            insurance,
        } = this.state;

        if (!isLoading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator />

                </View>
            )
        }
        else {

            return (
                <View style={styles.container} >


                    <Header onPress={() => this.props.navigation.navigate('TabUserScreen')} headerName="profile" />

                    <ScrollView>

                        <View style={styles.imageContainer}>

                            <Image style={styles.profile} source={require('../assets/images/Logo_Divine_Tag-02.png')} />

                        </View>

                        <Text style={styles.title}>Personal Information</Text>

                        <View style={styles.line}>
                        </View>

                        {personal != null &&
                            <View>
                                <View style={styles.Form} >

                                    <Label title="FirstName" text={personal.first_name} />
                                    <Label title="LastName" text={personal.surname} />
                                    <Label title="Date of Birth" text={personal.date_of_birth} />
                                    <Label title="Place Of Birth " text={personal.place_of_birth} />
                                    <Label title="Gender" text={personal.sex} />
                                    <Label title="Nationality" text={personal.nationality} />
                                    <Label title="National ID/Passport" text={personal.id_number} />
                                    <Label title="Marital Status" text={personal.martial_status} />

                                </View>

                                <Text style={styles.title}>Current Resident</Text>

                                <View style={styles.line}>
                                </View>

                                <View style={styles.Form}>

                                    <Label title="Country" text={personal.country} />
                                    <Label title="Province" text={personal.province} />
                                    <Label title="District" text={personal.district} />
                                    {/* <Label title="Sector" text={personal.sector} /> */}
                                    <Label title="Cell" text={personal.cell} />
                                    <Label title="Village" text={personal.village} />

                                </View>

                                <Text style={styles.title}>Current Information</Text>

                                <View style={styles.line}>
                                </View>

                                <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                                    <Label title="Email Address(Work)" text={personal.email_work} />
                                    {/* <Label title="Email Address (Work)" /> */}
                                    <Label title="Primary Number" text={personal.primary_number} />
                                    <Label title="Second Number" text={personal.secondary_number} />

                                </View>
                            </View>
                        }
                        <Text style={styles.title}>Family Information</Text>

                        <View style={styles.line}>
                        </View>
                        {family != null &&
                            <View>
                                <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                                    <Label title="Father's Firstname" text={family.father_firstName} />
                                    <Label title="Father's Lastname" text={family.father_surname} />
                                    <Label title="Mother's Firstname" text={family.mother_firstName} />
                                    <Label title="Mother's Lastname" text={family.mother_SurName} />
                                    <Label title="Spouse Firstname" text={family.spouse_Surname} />
                                    {/* <Label title="Spouse Middlename" />
                            <Label title="Spouse lastname" /> */}
                                    <Label title="Spouse ID" text={family.spouseId} />
                                    <Label title="Spouse Telephone" text={family.spouseTelephone} />
                                    <Label title="name of Children" text={family.children} />
                                    <Label title="Dependency" text={family.Dependency} />

                                </View>
                            </View>
                        }
                        <Text style={styles.title}>Occupation</Text>

                        <View style={styles.line}>
                        </View>
                        {employee != null &&
                            <View>

                                <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                                    <Label title="Employment" text={employee.position} />

                                </View>

                                <Text style={styles.title}>Address</Text>

                                <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>


                                    <Label title="Country" text={employee.country} />
                                    <Label title="Province" text={employee.province} />
                                    <Label title="Street" text={employee.street} />

                                </View>
                            </View>
                        }
                        <Text style={styles.title}>Occupation</Text>

                        <View style={styles.line}>
                        </View>
                        {self_ != null &&
                            <View>

                                <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                                    <Label title="Business" text={self_.business_type} />

                                </View>

                                <Text style={styles.title}>Address</Text>

                                <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                                    <Label title="Country" text={self_.country} />
                                    <Label title="Province" text={self_.province} />
                                    <Label title="Sector" text={self_.sector} />


                                </View>
                            </View>
                        }
                        <Text style={styles.title}>Occupation</Text>

                        <View style={styles.line}>
                        </View>
                        {student != null &&
                            <View>

                                <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>


                                    <Label title="University" text={student.university} />

                                </View>

                                <Text style={styles.title}>Address</Text>

                                <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                                    <Label title="Country" text={student.country} />
                                    <Label title="Province" text={student.province} />
                                    <Label title="Sector" text={student.sector} />

                                </View>
                            </View>
                        }

                        <Text style={styles.title}>Insurance Information</Text>

                        <View style={styles.line}>
                        </View>
                        {insurance != null &&
                            <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                                <Label title="Insurance name" text={insurance.insurance_name} />
                                <Label title="Card Number" text={insurance.telephone} />
                                <Label title="Date of Issue" text={insurance.date_of_birth} />
                                <Label title="Insurance expiry Date" text={insurance.expiration} />
                                {/* <Label title="Insurance Coverage" />
                            <Label title="Spouse Lastname" />
                            <Label title="Insurance Coverage" /> */}

                            </View>
                        }
                        <Text style={styles.title}>Bank Information</Text>

                        <View style={styles.line}>
                        </View>
                        {bank != null &&
                            <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                                <Label title="Bank name" text={bank.bank_name} />

                            </View>
                        }
                        <Text style={styles.title}>Asset Information</Text>

                        <View style={styles.line}>
                        </View>
                        {asset != null &&
                            <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                                <Label title="Asset name" text={asset.asset_name} />

                            </View>
                        }
                        <View style={styles.line}>
                        </View>

                        <Text style={styles.title}>Social Media Information</Text>

                        <View style={styles.line}>
                        </View>
                        {dataSource != null &&
                            <View style={styles.Form} onPress={() => this.props.navigation.navigate('Edit')}>

                                <Label title="Twitter" text={dataSource.twitter} />
                                <Label title="Facebook" text={dataSource.facebook} />
                                <Label title="Instagram" text={dataSource.instagram} />
                                <Label title="LinkedIn" text={dataSource.linkedin} />
                                {/* <Label title="WhatsApp" text={dataSource.whatsup_Number} /> */}

                            </View>
                        }




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
    },
    loading: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 200,
    }
})