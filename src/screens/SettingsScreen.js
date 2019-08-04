import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import firebase from "react-native-firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../constants/Colors";

class SettingsScreen extends Component {
  handleLogout = () => {
    firebase.auth().signOut();
  };

  handleBluetooth = () => {
    alert("Nenhum dispositivo bluetooth encontrado!")
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.listRow}>
          <View style={styles.listItem}>
            <Icon
              name="user"
              size={20}
              style={{ right: 2 }}
              color={Colors.mainColor}
            />
            <Text style={styles.textItem}>Usuário Logado: </Text>
            <Text style={styles.textItem2}>
              {firebase.auth().currentUser.email}
            </Text>
          </View>
          <View style={styles.btnItem}>
            <Button
              style={styles.buttonss}
              title="Sair"
              onPress={this.handleLogout}
              color={Colors.danger}
            />
          </View>
        </View>
        <View style={styles.listRow}>
          <View style={styles.listItem}>
            <Icon
              name="bluetooth"
              size={20}
              style={{ right: 2 }}
              color={Colors.mainColor}
            />
            <Text style={styles.textItem}>Bluetooth: </Text>
            <Text style={styles.textItem2}>Nenhum Dispositivo Conectado</Text>
          </View>
          <View style={styles.btnItem}>
            <Button
              title="Conectar a Dispositivo"
              onPress={this.handleBluetooth}
              color={Colors.warningText}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default SettingsScreen;

SettingsScreen.navigationOptions = {
  title: "Configurações"
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listRow: {
    marginTop: 10
  },
  btnItem: {
    marginRight: 10,
    marginLeft: 10
  },
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  manageImage: {
    marginRight: 8,
    height: 30,
    width: 30
  },
  textItem: {
    color: Colors.mainColor,
    fontSize: 14
  },
  textItem2: {
    fontSize: 14
  }
});
