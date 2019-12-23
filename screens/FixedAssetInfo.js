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

class FixedAssetInfo extends Component {

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
        textInput.push(<Inputs title="Asset Name" key={key} />);
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
    render() {

        return (

            <View style={styles.container}>

                <Header headerName="profile" onPress={() => this.props.navigation.navigate('Asset')} />

                <ScrollView>

                    <Text style={styles.text}>Fixed Asset Information</Text>

                    <View style={styles.Form}>

                        <Inputs title="Select" />
                        <Inputs title="Land Number" />

                    </View>

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

                    <MainButton text="Next" onPress={() => this.props.navigation.navigate('Social')} />

                </ScrollView>

                <KeyboardAvoidingView
                    behavior={"padding"}
                    keyboardVerticalOffset={width / 24}
                />

            </View>
        );
    }
}
FixedAssetInfo.navigationOptions = {
    header: null,
};
export default FixedAssetInfo;
const styles = StyleSheet.create({
    container: {
        flex: 1
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

    textForm: {
        margin: 15,
    },

    button: {
        justifyContent: "center",
        alignItems: "center"

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
});  
