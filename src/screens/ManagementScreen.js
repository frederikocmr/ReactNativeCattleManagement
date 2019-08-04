import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
  Picker,
  Animated,
  SafeAreaView,
  TouchableOpacity
} from "react-native";

import Animals from "../constants/Animals";
import Colors from "../constants/Colors";

class ManagementScreen extends Component {
  state = {
    dialogVisible: false,
    email: "",
    password: "",
    errorMessage: null
  };

  createRows = (data, itemId) =>
    (data = data.filter(item => {
      return item.id == itemId;
    }));

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam("idAnimal", "100");

    return (
      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={this.createRows(Animals.animals, itemId)}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              if (item.empty) {
                return <View style={[styles.item, styles.itemEmpty]} />;
              }
              return (
                <View style={styles.item}>
                  <Text style={styles.mainText}>Animal</Text>
                  <Text style={styles.textTitle}>
                    ID do animal: <Text style={styles.textItem}>{item.id}</Text>
                  </Text>
                  <Text style={styles.textTitle}>
                    ID brinco eletronico:{" "}
                    <Text style={styles.textItem}>
                      {item.id_brinco_eletronico}
                    </Text>
                  </Text>
                  <Text style={styles.textTitle}>
                    Lote atual:{" "}
                    <Text style={styles.textItem}>{item.lote_atual.nome}</Text>
                  </Text>
                  <Text style={styles.textTitle}>
                    Nascimento:{" "}
                    <Text style={styles.textItem}>
                      {item.dt_nascimento.substring(0, 10)}
                    </Text>
                  </Text>
                  <Text style={styles.textTitle}>
                    Raça: <Text style={styles.textItem}>{item.raca.label}</Text>
                  </Text>
                  <Text style={styles.textTitle}>
                    Sexo: <Text style={styles.textItem}>{item.sexo.label}</Text>
                  </Text>
                  <Text style={styles.textTitle}>
                    Pelagem:{" "}
                    <Text style={styles.textItem}>{item.pelagem.label} </Text>
                  </Text>
                </View>
              );
            }}
          />
        </View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.scrollY } } }
          ])}
        >
          <View>
            <View style={styles.container}>
              <Text style={styles.title}> Medicamento </Text>
              <Text style={styles.subtitle}> Medicamento 1:</Text>
              <TextInput
                style={styles.textInput}
                autoCapitalize="none"
                placeholder="Quantidade em ML"
                onChangeText={email => this.setState({ email })}
                value={this.state.email}
              />
               <Text style={styles.title}> Pesagem </Text>
            <Text style={styles.subtitle}> Peso:</Text>
            <TextInput
              style={styles.textInput}
              autoCapitalize="none"
              placeholder="Peso em KG"
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <Text style={styles.title}> Aparte </Text>
            <Text style={styles.subtitle}> Lote:</Text>
            <Picker
              selectedValue={this.state.exam}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ exam: itemValue })
              }
            >
              <Picker.Item label="Lote 1" value="1" />
              <Picker.Item label="Lote 2" value="2" />
            </Picker>

            <Text style={styles.title}> Exame </Text>
            <Text style={styles.subtitle}> Selecione:</Text>
            <Picker
              selectedValue={this.state.exam}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ exam: itemValue })
              }
            >
              <Picker.Item label="Exame 1" value="11" />
              <Picker.Item label="Exame 2" value="21" />
            </Picker>

            <Text style={styles.title}> Reprodução </Text>
            <Text style={styles.subtitle}> Selecione o Touro:</Text>
            <Picker
              selectedValue={this.state.exam}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ exam: itemValue })
              }
            >
              <Picker.Item label="Touro 1" value="5" />
              <Picker.Item label="Touro 2" value="4" />
            </Picker>

            <Text style={styles.title}> Venda </Text>
            <Text style={styles.subtitle}> Selecione:</Text>
            <Picker
              selectedValue={this.state.exam}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ exam: itemValue }) 
              }
            >
              <Picker.Item label="Teste 1" value="5" /> 
              <Picker.Item label="Teste 2" value="4" />
            </Picker>
            </View>

           


            <TouchableOpacity onPress={this.navigateToManage}>
              <View
                style={[styles.button, { backgroundColor: Colors.mainColor }]}
              >
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: "700",
                    color: "white"
                  }}
                >
                  PRÓXIMO ANIMAL
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default ManagementScreen;

ManagementScreen.navigationOptions = {
  // header: null,
  title: "Iniciar Manejo"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  item: {
    backgroundColor: "white",
    margin: 4,
    padding: 20,
    borderLeftColor: Colors.mainColor,
    borderLeftWidth: 5,
    elevation: 4,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 20
  },
  textTitle: {
    color: Colors.mainColor,
    fontWeight: "bold"
  },
  textItem: {
    color: "#592304"
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
    color: "#8da614"
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
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    height: 40,
    margin: 6
  }
});
