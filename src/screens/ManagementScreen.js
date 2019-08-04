import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from "react-native";

import Animals from "../constants/Animals";
import Colors from "../constants/Colors";

class ManagementScreen extends Component {
  state = {
    dialogVisible: false
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
    const itemId = navigation.getParam('itemId', '100');
    alert(itemId);

    return (
      <View style={styles.container}>
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
      </View>
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
    alignItems: "center",
    justifyContent: "center"
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
  }
});
