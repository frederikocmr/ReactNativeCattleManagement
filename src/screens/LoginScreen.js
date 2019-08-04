import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import firebase from "react-native-firebase";

import Colors from "../constants/Colors";
export default class Login extends Component {
  state = { email: "", password: "" };

  handleLogin = () => {
    const { email, password } = this.state;

    if (email.trim() != "" && password.trim()){
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate("Main"))
      .catch(error => this.setState({ errorMessage: error.message }));
    } else {
      alert("Por favor, digite o email e a senha!");
    }
   
  };

  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 50, height: 50 }}
          source={{
            uri:
              "https://www.irancho.com.br/wp-content/themes/rancho2/images/logo.png"
          }}
        />
        <Text
          style={{
            fontSize: 20,
            marginTop: 5,
            fontWeight: "700"
          }}
        >
          Fazer Login:
        </Text>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Senha"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />

        <TouchableOpacity onPress={this.handleLogin}>
          <View style={[styles.button, { backgroundColor: Colors.mainColor }]}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "700",
                color: "white"
              }}
            >
              Entrar
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    height: 40,
    margin: 6,
    width: 200
  },
  textInput: {
    height: 40,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
    marginBottom: 8
  }
});
