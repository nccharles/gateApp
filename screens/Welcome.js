import React, { Component } from "react";
import Icon from "@expo/vector-icons/Entypo";
import {
  Text,
  StyleSheet,
  View,
  Modal,
  TouchableHighlight,
  Image
} from "react-native";
import MainButton from "../components/Buttons/mainButton";

export default class Welcome extends Component {
  state = {
    modalVisible: true
  };

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
    this.props.navigation.navigate('TabScreen');
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.modal}>
            <Image
              source={require("../assets/images/checked.png")}
              style={styles.iconback}
            />
            <View>
              <Text style={styles.text}>
                You have successfully created your account.Welcome!
              </Text>
            </View>
            <MainButton
              text="Continue"
              style={styles.touchableButton}
              onPress={() => {
                this.toggleModal(!this.state.modalVisible);
              }}
            >
              <Text style={styles.text}>Close Modal</Text>
            </MainButton>
          </View>
        </Modal>
      </View>
    );
  }
}
Welcome.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  text: {
    color: "#7A7A7A",
    fontSize: 10,
    textAlign: "center",
    marginLeft: 60,
    marginRight: 60
  },
  touchableButton: {
    width: "40%",
    padding: 10,
    backgroundColor: "#f06292",
    marginBottom: 10,
    marginTop: 30
  },
  iconback: {
    width: 90,
    height: 90,
    marginBottom: 10
  }
});
