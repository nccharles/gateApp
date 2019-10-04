import * as WebBrowser from 'expo-web-browser';
import React, {Component}from 'react';
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
    Button,
    TouchableHighlight,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native'; 
import {  MonoText} from '../components/StyledText';
const { width } = Dimensions.get("window");

class SignUpScreen extends Component{
    state= {
        user: ''    
    }
    updateUser = (user)=>{
        this.setState({user:user})
    }
    
    render(){

    
    return ( 
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={require ('../assets/images/icon.png')} style={styles.logo}/>
                </View>
                <Text style={styles.logoText}>Sign Up</Text>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Firstname</Text>
                    <TextInput underlineColorAndroid='transparent' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Surname</Text>
                    <TextInput underlineColorAndroid='transparent' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Telephone</Text>
                    <TextInput  
                    keyboardType="numeric"
                    underlineColorAndroid='transparent' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput underlineColorAndroid='transparent' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>National ID/Passport</Text>
                    <TextInput underlineColorAndroid='transparent' style={styles.input}/>
                </View>
                <View style={styles.inputContainer}>
                    <Picker 
                    selectedValue={this.state.user}
                    onValueChange={this.updateUser}
                    >
                    <Picker.Item label="-select" value="select" />
                    <Picker.Item label="Client" value="cl" />
                    <Picker.Item label="Agent" value="ag" />
                    <Picker.Item label="User" value="us" />
                    </Picker>
                </View>
            </View>
        
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.btnSignup}>
                <Text style={styles.text}>Submit</Text>
                </TouchableOpacity>
                <KeyboardAvoidingView
                behavior={"padding"}
                keyboardVerticalOffset={width / 24}
                />
         <Text>Already an account? Login</Text>
            </View>
       
        
       
        </ScrollView>
    )
    }
}
export default SignUpScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        justifyContent: "center",
        alignItems: "center"
      },
    
      logoContainer: {
        marginVertical: 5,
        padding: 10
      },
    
      inputContainer: {
        marginTop: 10
      },
    
      logo: {
        width: 170,
        height: 120
      },
    
      logoText: {
        color: "black",
        fontSize: 20,
        fontWeight: "500",
        marginTop: 10,
        opacity: 0.5
      },
    
      label: {
        paddingLeft: 27,
        fontSize: 16
      },
    
      input: {
        width: width - 35,
        height: 35,
        borderRadius: 6,
        fontSize: 16,
        paddingLeft: 18,
        backgroundColor: "#d8ebe2",
        color: "black",
        marginHorizontal:  25
      },
      btnLogin: {
        width: width - 205,
        height: 35,
        borderRadius: 12,
        backgroundColor: "#45d17d",
        justifyContent: "center",
        marginLeft: 0,
        marginTop: 17
      },
    
      text: {
        color: "rgba(255, 255, 255, 0.7)",
        fontSize: 15,
        textAlign: "center"
      }
})