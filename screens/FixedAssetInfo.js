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
import { token } from "../constants/util";
const { width } = Dimensions.get("window");

class FixedAssetInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            textInput: [],
            inputData: [],
            asset_name: [],
            currChild: '',
        }
    }
    // Backend API

    Asset = () => {
        let newChild = this.state.asset_name
        newChild.push(this.state.currChild)
        this.setState({ asset_name: newChild });
        var data = {
            asset_name: newChild,
        }
        fetch('https://infour.herokuapp.com/api/assets', {
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
                    this.props.navigation.navigate('Social');
                }
                else {
                    console.log('try again')
                }
                // console.log(response);
            }).catch((error) => {
                console.log(error)
            });
    }
    //end Backend

    //function to add TextInput 
    addTextInput = (key) => {
        const newKey = key + 1
        let textInput = this.state.textInput;
        textInput.push(<Inputs title="Asset name" key={key} onChangeText={asset_name => this.handleInput(`asset_name[${newKey}]`, asset_name)}
            value={this.state.asset_name[newKey]} />);
        let newChild = this.state.asset_name
        newChild.push(this.state.currChild)
        this.setState({ textInput, asset_name: newChild });
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

                <Header headerName="profile" onPress={() => this.props.navigation.navigate('Asset')} />

                <ScrollView>

                    <Text style={styles.text}>Fixed Asset Information</Text>

                    <View style={styles.Form}>

                        <Inputs title="Asset Name" onChangeText={asset_name => this.handleInput('asset_name[0]', asset_name)}
                            value={this.state.asset_name[0]} />

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
                        <MainButton text="Next" onPress={this.Asset} />


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
FixedAssetInfo.navigationOptions = {
    headerShown: false,
};
export default FixedAssetInfo;
const styles = StyleSheet.create({
    container: {
        flex: 1
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
