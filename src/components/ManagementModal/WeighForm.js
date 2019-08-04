import React, { Component } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

class SeparateForm extends Component {
  state = { exam: null };

  render() {
    return (
      <View style={styles.container}>
        <Text tyle={styles.title}> Pesagem </Text>
        <Text style={styles.subtitle}>Selecione o tipo de pesagem abaixo:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Nascimento" value="1" />
          <Picker.Item label="Desmame" value="2" />
          <Picker.Item label="Entrada" value="3" />
          <Picker.Item label="Saida" value="4" />
          <Picker.Item label="Inicio de Safra" value="5" />
          <Picker.Item label="Pesagem Simples" value="6" />
        </Picker>
        <Text style={styles.subtitle}>Selecione a unidade de peso abaixo:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Kg" value="3" />
          <Picker.Item label="Outro" value="4" />
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
