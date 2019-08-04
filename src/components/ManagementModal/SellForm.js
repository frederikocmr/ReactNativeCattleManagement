import React, { Component } from "react";
import { View, Text, StyleSheet, Picker } from "react-native";

class SellForm extends Component {
  state = { exam: null };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Venda de Animais</Text>
        <Text style={styles.subtitle}>Fazenda Origem*:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Fazenda Principal" value="1" />
        </Picker>
        <Text style={styles.subtitle}>Destinação:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Abate" value="1" />
          <Picker.Item label="Venda Viva" value="2" />
        </Picker>
        <Text style={styles.subtitle}>Contato:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Sem Dados" value="1" />
        </Picker>
        <Text style={styles.subtitle}>Tipo da Venda:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Peso Vivo" value="1" />
          <Picker.Item label="Unidade" value="2" />
        </Picker>
        <Text style={styles.subtitle}>Tipo de Saída:</Text>
        <Picker
          selectedValue={this.state.exam}
          style={styles.picker}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({ exam: itemValue })
          }
        >
          <Picker.Item label="Saída" value="1" />
          <Picker.Item label="Venda" value="2" />
          <Picker.Item label="Doação" value="3" />
        </Picker>
      </View>
    );
  }
}
export default SellForm;

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
