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
            inputData: []
        }
    }

    //function to add TextInput

    addTextInput = (key) => {
        let textInput = this.state.textInput;
        textInput.push(<Inputs title="Bank" key={key} />);
        this.setState({ textInput });
    }

    //function to remove TextInput
    removeTextInput = () => {
        let textInput = this.state.textInput;
        let inputData = this.state.inputData;
        textInput.pop();
        inputData.pop();
        this.setState({ textInput, inputData });
    }

    //function to add text from TextInputs into single array
    // addValues = (text, index) => {
    //     let dataArray = this.state.inputData;
    //     let checkBool = false;
    //     if (dataArray.length !== 0) {
    //         dataArray.forEach(element => {
    //             if (element.index === index) {
    //                 element.text = text;
    //                 checkBool = true;
    //             }
    //         });
    //     }
    //     if (checkBool) {
    //         this.setState({
    //             inputData: dataArray
    //         });
    //     }
    //     else {
    //         dataArray.push({ 'text': text, 'index': index });
    //         this.setState({
    //             inputData: dataArray
    //         });
    //     }
    // }

    // //function to console the output
    // getValues = () => {
    //     console.log('Data', this.state.inputData);
    // }


    render() {
        return (
            <View style={styles.container}>
                <Header onPress={() => this.props.navigation.navigate('Other')} headerName="profile" />

                <ScrollView>

                    <Text style={styles.text}>Bank Information</Text>

                    <View style={styles.Form}>

                        <Inputs title="Bank" />

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

                        <MainButton text="Next" onPress={() => this.props.navigation.navigate('Asset')} />

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
    header: null,
};
export default BankInfoDetails;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Form: {
        fontFamily: 'font-regulary',
        justifyContent: "center",
        alignItems: "center"
    },

    text: {
        fontFamily: 'font-regulary',
        textAlign: "center",
        padding: 15,
        fontSize: 20
    },

    add: {
        padding: 16,
        margin: 10,
    },

    textAdd: {
        color: Colors.primary,
    },

    textRemove: {
        color: Colors.errorBackground,
    },
    buttonView: {
        flexDirection: 'row'
    },

    button: {
        justifyContent: "center",
        alignItems: "center",

    }
});
