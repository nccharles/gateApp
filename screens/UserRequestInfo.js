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
    Picker,
    TouchableHighlight,
    Dimensions,
    KeyboardAvoidingView
} from "react-native";
import Inputs from "../components/Input";
import Header from "../components/Header/BackHeader";
import MainButton from "../components/Buttons/mainButton";
const { width } = Dimensions.get("window");

class UserRequestInfo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header onPress={
                    () => this.props.navigation.navigate('TabScreen')} headerName="Info Request" />
                <ScrollView>
                    <View style={styles.Form}>
                        <Inputs title="Enter User Code" keyboardtype="numeric" />
                        <MainButton text="Next" onPress={
                            () => this.props.navigation.navigate('FormOne')} />
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
UserRequestInfo.navigationOptions = {
    header: null,
};
export default UserRequestInfo;
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
    }
});
