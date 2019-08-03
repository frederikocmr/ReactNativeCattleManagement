import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";
import firebase from 'react-native-firebase';

class SettingsScreen extends Component {

  handleLogout = () => {
    firebase
      .auth()
      .signOut();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SettingsScreen</Text>
        <Button title="Sair" onPress={this.handleLogout} />
      </View>
    );
  }
}
export default SettingsScreen;

SettingsScreen.navigationOptions = {
  title: 'Configurações',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});