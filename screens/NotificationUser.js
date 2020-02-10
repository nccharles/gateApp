import React from "react";
import { StyleSheet, Text, View, ScrollView, Hr, Dimensions } from "react-native";

import Header from "../components/Header/BackHeader";
import Icon from "@expo/vector-icons/AntDesign";

const { width } = Dimensions.get("window");
export default function NotificationUser() {

  return (

    <View style={styles.container}>

      <Header headerName="Notification" />

      <ScrollView>

        <Text style={styles.Text}>Tuesday, 20:30pm</Text>

        <View style={styles.Form}>

          <View style={styles.Notification}>

            <View>

              <Icon name="user" size={40} color="#707070" style={styles.iconback} />

            </View>

            <View style={{ flexDirection: "column" }}>

              <Text style={styles.Client}>Bk Rwanda</Text>
              <Text style={styles.message}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </Text>

            </View>

          </View>

        </View>

        <View style={styles.line} />

        <Text style={styles.Text}>Sunday, 18:30pm</Text>

        <View style={styles.Form}>

          <View style={styles.Notification}>

            <View>

              <Icon name="user" size={30} color="#707070" style={styles.iconback} />

            </View>

            <View style={{ flexDirection: "column" }}>

              <Text style={styles.Client}>Bk Rwanda</Text>
              <Text style={styles.message}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </Text>

            </View>

          </View>

        </View>

        <View style={styles.line} />

        <Text style={styles.Text}>Wednesday, 16:30pm</Text>
        <View style={styles.Form}>
          <View style={styles.Notification}>
            <View>
              <Icon name="user" size={30} color="#707070" style={styles.iconback} />

            </View>

            <View style={{ flexDirection: "column" }}>

              <Text style={styles.Client}>Bk Rwanda</Text>
              <Text style={styles.message}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </Text>

            </View>

          </View>

        </View>

        <View style={styles.line} />

        <Text style={styles.Text}>Monday, 20:30pm</Text>

        <View style={styles.Form}>

          <View style={styles.Notification}>

            <View>
              <Icon name="user" size={30} color="#707070" style={styles.iconback} />

            </View>

            <View style={{ flexDirection: "column" }}>

              <Text style={styles.Client}>Bk Rwanda</Text>
              <Text style={styles.message}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </Text>

            </View>

          </View>

        </View>

        {/* <View
          style={{
            marginTop: 35, borderBottomColor: "#707070",
            borderBottomWidth: 0.8, borderColor: "#707070"
          }} /> */}

      </ScrollView>

    </View>
  );
}
NotificationUser.navigationOptions = {
  headerShown: false,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },

  Client: {
    fontFamily: 'font-semi',
    color: "#232323",
    paddingRight: 10
  },

  message: {
    textAlign: "left",
    color: "#707070",
    fontFamily: 'font-regular',
    fontSize: 12,
  },

  Notification: {
    marginTop: 35,
    paddingLeft: 40,
    flexDirection: "row",
    textAlign: "center"
  },

  Text: {
    fontSize: 13,
    marginLeft: 35,
    paddingTop: 24,
    fontFamily: 'font-semi',
  },

  Form: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: width / 1.1
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#707070',
    opacity: 0.3,
    marginTop: 35,
  },

});
