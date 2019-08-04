import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class ManageInput extends Component {
  state = {
    manageName: ""
  };

  componentDidMount() {
    
  }

  manageNameChangedHandler = val => {
    this.setState({
      manageName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.manageName.trim() === "") {
      return;
    }

    this.props.onPlaceAdded(this.state.manageName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="An awesome place"
          value={this.state.manageName}
          onChangeText={this.manageNameChangedHandler}
          style={styles.ManageInput}
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  ManageInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default ManageInput;
