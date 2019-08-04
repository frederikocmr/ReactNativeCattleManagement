import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Picker } from "react-native";

class MedicineForm extends Component {
  
    state = { email: "", password: "", errorMessage: null };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Medicamento </Text>
        <Text style={styles.subtitle}>Categoria do Medicamento:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Vacina" value="1" />
          <Picker.Item label="Vermífugo" value="2" />
          <Picker.Item label="Outro" value="3" />
        </Picker>
        <Text style={styles.subtitle} > Nome do Medicamento:</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Nome do Medicamento"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
          <Text style={styles.subtitle}> Aplicado por:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Dose" value="1" />
          <Picker.Item label="Peso" value="2" />
        </Picker>
        <Text style={styles.subtitle}> Dosagem (ml):</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Dosagem"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        
      </View>
    );
  }
}
export default MedicineForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    paddingBottom: 10,
    borderStyle: 'dashed',
    borderBottomColor: 'gray' ,
    borderBottomWidth: 0.5
  },
  textInput: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
    marginBottom: 8
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
