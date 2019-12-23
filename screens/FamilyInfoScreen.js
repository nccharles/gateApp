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
import Colors from "../constants/Colors";
const { width } = Dimensions.get("window");

class FamilyInfoScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textInput: [], input: [],
            inputData: []
        }
    }

    //function to add TextInput dynamically
    addTextInput = (key) => {
        let textInput = this.state.textInput;
        textInput.push(<Inputs title="name" key={key} />);
        this.setState({ textInput });
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
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         textInput: [], input: []
    //     } 
    // }

    // addTextInput = (key) => {
    //     let textInput = this.state.textInput;
    //     textInput.push(<Inputs title="" key={key} style={{ alignItems: "center", justifyContent: "center" }} />);
    //     this.setState({ textInput })

    // }
    // addInput = (key) => {
    //     let input = this.state.input;
    //     input.push(<Inputs title="" key={key} style={{ alignItems: "center", justifyContent: "center" }} />);
    //     this.setState({ input })
    // }

    render() {

        return (

            <View style={styles.container}>

                <Header onPress={() => this.props.navigation.navigate('PersonalInfo')} headerName="profile" />

                <ScrollView>

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

                        <View style={styles.button}>

                            <Text>Names:</Text>

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

                        <Inputs title="Dependency (if any)" keyboardtype="numeric" />

                        <View style={styles.button}>

                            <Text>Names:</Text>

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

                        </View>

                        <MainButton text="Next" onPress={() => this.props.navigation.navigate('Occupation')} />

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
    header: null,
};
export default FamilyInfoScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    Form: {
        fontFamily: 'font-regulary',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontFamily: 'font-regulary',
        textAlign: 'center',
        padding: 15,
        fontSize: 20,
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
})