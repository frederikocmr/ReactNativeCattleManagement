import React, { Component } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

class ExamsForm extends Component {
  state = { exam: null };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Exame</Text>
        <Text style={styles.subtitle}>Selecione o exame abaixo:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Diagnóstico de Gestação" value="1" />
          <Picker.Item label="Avaliação Andrológica" value="2" />
          <Picker.Item label="Avaliação Ovariana" value="3" />
          <Picker.Item label="Ultrassom de Carcaça" value="4" />
        </Picker>
      </View>
    );
  }
}
export default ExamsForm;

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
