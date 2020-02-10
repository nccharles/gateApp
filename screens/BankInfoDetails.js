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
    Button,
    TouchableHighlight,
    Dimensions,
    KeyboardAvoidingView
} from "react-native";
import Inputs from "../components/Input";
import Header from "../components/Header/BackHeader";
import MainButton from "../components/Buttons/mainButton";
import Colors from "../constants/Colors";
const { width } = Dimensions.get("window");

class BankInfoDetails extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         textInput: []
    //     }
    // }


    // addTextInput = (key) => {
    //     let textInput = this.state.textInput;
    //     textInput.push(<Inputs title="" key={key} style={{ alignItems: "center", justifyContent: "center" }} />);
    //     this.setState({ textInput })
    // }
    constructor(props) {
        super(props);
        this.state = {
            textInput: [],
            inputData: [],
            bank_name: [],
            currChild: '',
        }

    }
    // Backend API

    Bank = () => {
        let newChild = this.state.bank_name
        newChild.push(this.state.currChild)
        this.setState({ bank_name: newChild });
        var data = {
            bank_name: newChild,
        }
        fetch('https://infour.herokuapp.com/api/bank_name', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),

        })
            .then(Response => {
                Response.json();
                if (Response.status == 200) {

                    this.props.navigation.navigate('Occupation');
                }
                else {
                    console.log('try again')
                }
            })

            .catch((error) => {
                console.log(error)
            })
        console.log(data)
    }
    //end Backend
    //function to add TextInput

    addTextInput = (key) => {
        const newKey = key + 1
        let textInput = this.state.textInput;
        textInput.push(<Inputs title="bank name" key={key} onChangeText={bank_name => this.handleInput(`bank_name[${newKey}]`, bank_name)}
            value={this.state.bank_name[newKey]} />);
        let newChild = this.state.bank_name
        newChild.push(this.state.currChild)
        this.setState({ textInput, bank_name: newChild });
    }

    //function to remove TextInput
    removeTextInput = () => {
        let textInput = this.state.textInput;
        let inputData = this.state.inputData;
        textInput.pop();
        inputData.pop();
        this.setState({ textInput, inputData });
    }
    handleInput = (key, value) => {
        this.setState({
            currChild: value,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Header onPress={() => this.props.navigation.navigate('Other')} headerName="profile" />

                <ScrollView>

                    <Text style={styles.text}>Bank Information</Text>

                    <View style={styles.Form}>

                        <Inputs title="Bank Name" onChangeText={bank_name => this.handleInput('bank_name[0]', bank_name)}
                            value={this.state.bank_name[0]} />

                        <View style={styles.button}>

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

                        <MainButton text="Next" onPress={this.Bank} />

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
BankInfoDetails.navigationOptions = {
    headerShown: false,
};
export default BankInfoDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Form: {
        fontFamily: 'font-regular',
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontFamily: 'font-semi',
        textAlign: "center",
        padding: 15,
        fontSize: 15,
        color: "#232323"
    },

    add: {
        padding: 16,
        margin: 10,
    },

    textAdd: {
        color: Colors.primary,
        fontSize: 13,
        fontFamily: 'font-regular',
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
});
