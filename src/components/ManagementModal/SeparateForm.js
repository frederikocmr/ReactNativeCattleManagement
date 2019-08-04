import React, { Component } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

class SeparateForm extends Component {
  state = { exam: null };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "400",
            color: '#8da614'
          }}
        >
          Aparte
        </Text>
        <Text
        style={{
            fontSize: 15,
            marginTop: 5,
            fontWeight: "400"
          }}
          >Tipo de Aparte:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={{ height: 70, width: "100%", color: "gray" }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Pesagem" value="1" />
          <Picker.Item label="Desmame" value="2" />
          <Picker.Item label="Outra" value="3" />
        </Picker>
      </View>
    );
  }
}
export default SeparateForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    borderStyle: 'dashed',
    borderBottomColor: 'gray' ,
    borderBottomWidth: 0.5
  }
});
