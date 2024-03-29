import React, { Component } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

class ReproductionForm extends Component {
  state = { exam: null };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Reprodução  </Text>
        <Text style={styles.subtitle}>Tipo de Reprodução:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Inseminação Artificial" value="1" />
          <Picker.Item label="Monta Natural" value="2" />
        </Picker>
      </View>
    );
  }
}
export default ReproductionForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    borderStyle: 'dashed',
    borderBottomColor: 'gray' ,
    borderBottomWidth: 0.5
  },
  title: {
    fontSize: 20,
    fontWeight: "400",
    color: '#8da614'
  },
  subtitle: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: "400"
  },
  picker: {
    height: 70, 
    width: "100%", 
    color: "gray"
  }
});
