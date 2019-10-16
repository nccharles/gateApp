import React from "react";
import { StyleSheet, Text, View, ScrollView, Hr } from "react-native";

import Header from "../components/Header/BackHeader";
import Icon from "@expo/vector-icons/AntDesign";

export default function NotificationUser() {
  return (
    <View style={styles.container}>
      <Header headerName="Notification" />
      <ScrollView>
        <Text style={styles.Text}>Tuesday, 20:30pm</Text>

        <View style={styles.Form}>
          <View style={styles.Notification}>
            <View>
              <Icon
                name="user"
                size={40}
                color="#707070"
                style={styles.iconback}
              />
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
        <View
          style={{
            marginTop: 35,
            borderBottomColor: "black",
            borderBottomWidth: 0.6,
            borderColor: "#707070"
          }}
        />

        <Text style={styles.Text}>Sunday, 18:30pm</Text>

        <View style={styles.Form}>
          <View style={styles.Notification}>
            <View>
              <Icon
                name="user"
                size={40}
                color="#707070"
                style={styles.iconback}
              />
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
        <View
          style={{
            marginTop: 35,
            borderBottomColor: "black",
            borderBottomWidth: 0.6,
            borderColor: "#707070"
          }}
        />

        <Text style={styles.Text}>Wednesday, 16:30pm</Text>

        <View style={styles.Form}>
          <View style={styles.Notification}>
            <View>
              <Icon
                name="user"
                size={40}
                color="#707070"
                style={styles.iconback}
              />
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
        <View
          style={{
            marginTop: 35,
            borderBottomColor: "black",
            borderBottomWidth: 0.6,
            borderColor: "#707070"
          }}
        />
        <Text style={styles.Text}>Monday, 20:30pm</Text>

        <View style={styles.Form}>
          <View style={styles.Notification}>
            <View>
              <Icon
                name="user"
                size={40}
                color="#707070"
                style={styles.iconback}
              />
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
        <View
          style={{
            marginTop: 35,
            borderBottomColor: "black",
            borderBottomWidth: 0.6,
            borderColor: "#707070"
          }}
        />
      </ScrollView>
    </View>
  );
}
NotificationUser.navigationOptions = {
  header: null,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 40
  },
  Client: {
    fontWeight: "bold",
    color: "#000",
    paddingRight: 10
  },
  message: {
    textAlign: "left",
    color: "#d4d4d4"
  },
  Notification: {
    marginTop: 35,
    paddingLeft: 40,
    flexDirection: "row",
    textAlign: "center"
  },
  Text: {
    fontSize: 16,
    marginLeft: 35,
    paddingTop: 24
  },
  Form: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 280
  }
});
