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
import { token } from "../constants/util";
import Colors from "../constants/Colors";
const { width } = Dimensions.get("window");

class FamilyInfoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textInput: [], input: [],
            inputData: [],
            father_firstName: '',
            father_surname: '',
            mother_firstName: "",
            mother_SurName: "",
            spouse_firsName: "",
            spouse_Surname: "",
            spouseId: '',
            spouseTelephone: "",
            children: [],
            currChild: '',
            Dependency: ""
        };

    }
    //Backend  API

    Family = () => {
        let newChild = this.state.children
        newChild.push(this.state.currChild)
        this.setState({ children: newChild });
        var data = {
            father_firstName: this.state.father_firstName,
            father_surname: this.state.father_surname,
            mother_firstName: this.state.mother_firstName,
            mother_SurName: this.state.mother_SurName,
            spouse_firsName: this.state.spouse_firsName,
            spouse_Surname: this.state.spouse_Surname,
            spouseId: this.state.spouseId,
            spouseTelephone: this.state.spouseTelephone,
            children: newChild,
            Dependency: this.state.Dependency
        }
        fetch('https://infour.herokuapp.com/api/family', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then((response) => response.json())
            .then(async (response) => {

                // console.log(response)
                await AsyncStorage.setItem(token, response.token);
                if (response.token !== null) {
                    this.props.navigation.navigate('Occupation');
                }
                else {
                    console.log('try again')
                }
                // console.log(response);
            }).catch((error) => {
                console.log(error)
            });
    }

    //end of Backend API

    //function to add TextInput dynamically
    addTextInput = (key) => {
        const newKey = key + 1
        let textInput = this.state.textInput;
        textInput.push(<Inputs title="name" key={key} onChangeText={children => this.handleInput(`children[${newKey}]`, children)}
            value={this.state.children[newKey]} />);
        let newChild = this.state.children
        newChild.push(this.state.currChild)
        this.setState({ textInput, children: newChild });
        // console.log(this.state.children)
    }
    addInput = (key) => {
        let input = this.state.input;
        input.push(<Inputs title="name" key={key} />);
        this.setState({ input })
    }

    //function to remove TextInput dynamically
    removeTextInput = () => {
        let textInput = this.state.textInput;
        let input = this.state.input;
        let inputData = this.state.inputData;
        textInput.pop();
        input.pop();
        inputData.pop();
        this.setState({ textInput, input, inputData });
    }
    removeInput = () => {
        let input = this.state.input;
        let inputData = this.state.inputData;
        input.pop();
        inputData.pop();
        this.setState({ input, inputData });
    }
    handleInput = (key, value) => {
        this.setState({
            currChild: value,
        })
    }
    render() {

        return (

            <View style={styles.container}>

                <Header onPress={() => this.props.navigation.navigate('PersonalInfo')} headerName="profile" />

                <ScrollView>

                    <Text style={styles.text}>Family Information</Text>

                    <View style={styles.Form}>

                        <Inputs title="Father's Firstname" onChangeText={father_firstName => this.setState({ father_firstName: father_firstName })}
                            value={this.state.father_firstName} />
                        <Inputs title="Father's Surname" onChangeText={father_surname => this.setState({ father_surname: father_surname })}
                            value={this.state.father_surname} />
                        <Inputs title="Mother's Firstname" onChangeText={mother_firstName => this.setState({ mother_firstName: mother_firstName })}
                            value={this.state.mother_firstName} />
                        <Inputs title="Mother's Surname" onChangeText={mother_SurName => this.setState({ mother_SurName: mother_SurName })}
                            value={this.state.mother_SurName} />
                        <Inputs title="Spouse Firstname" onChangeText={spouse_firsName => this.setState({ spouse_firsName: spouse_firsName })}
                            value={this.state.spouse_firsName} />
                        <Inputs title="Spouse Lastname" onChangeText={spouse_Surname => this.setState({ spouse_Surname: spouse_Surname })}
                            value={this.state.spouse_Surname} />
                        <Inputs title="Spouse ID" keyboardtype="numeric" onChangeText={spouseId => this.setState({ spouseId: spouseId })}
                            value={this.state.spouseId} />
                        <Inputs title="Telephone" keyboardtype="numeric" onChangeText={spouseTelephone => this.setState({ spouseTelephone: spouseTelephone })}
                            value={this.state.spouseTelephone} />
                        <Inputs title="Number of Children(if any)" keyboardtype="numeric" onChangeText={children => this.handleInput('children[0]', children)}
                            value={this.state.children[0]} />

                        <View style={styles.button}>

                            <Text style={styles.name}>Names:</Text>

                            {this.state.textInput.map((value, index) => {
                                return value
                            })}

                            <View style={styles.buttonView}>

                                <TouchableOpacity style={styles.add}>

                                    <Text style={styles.textAdd} onPress={() => this.addTextInput(this.state.textInput.length)}>Add</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={styles.add}>

                                    <Text style={styles.textRemove} onPress={() => this.removeTextInput()}>Remove</Text>

                                </TouchableOpacity>

                            </View>

                        </View>

                        <Inputs title="Dependency (if any)" keyboardtype="numeric" onChangeText={Dependency => this.setState({ Dependency: Dependency })}
                            value={this.state.Dependency} />

                        {/* <View style={styles.button}>

                            <Text style={styles.name}>Names:</Text>

                            {this.state.input.map((value, index) => {
                                return value
                            })}

                            <View style={styles.buttonView}>

                                <TouchableOpacity style={styles.add}>

                                    <Text style={styles.textAdd} onPress={() => this.addInput(this.state.input.length)}>Add</Text>

                                </TouchableOpacity>

                                <TouchableOpacity style={styles.add}>

                                    <Text style={styles.textRemove} onPress={() => this.removeInput()}>Remove</Text>

                                </TouchableOpacity>

                            </View>

                        </View> */}

                        <MainButton text="Next" onPress={this.Family} />

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
FamilyInfoScreen.navigationOptions = {
    headerShown: false,
};
export default FamilyInfoScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Form: {
        fontFamily: 'font-regular',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontFamily: 'font-semi',
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
    },
    name: {
        fontFamily: 'font-regular',
        textAlign: 'center',
        fontSize: 13,
    },

    add: {
        padding: 16,
        margin: 10,
    },

    textAdd: {
        color: Colors.primary,
        fontFamily: 'font-regular',
        fontSize: 13,
    },

    textRemove: {
        color: Colors.errorBackground,
        fontFamily: 'font-regular',
        fontSize: 13,
    },

    buttonView: {
        flexDirection: 'row'
    },

    button: {
        justifyContent: "center",
        alignItems: "center",

    }
})