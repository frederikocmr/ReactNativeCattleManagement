import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Animated,
  TouchableOpacity,
  Button
} from "react-native";

import Modal from "react-native-modal";
import Home from "../components/HomeScreen/Home";

import PesagemImage from "../assets/images/pesagem.png";
import ExamesImage from "../assets/images/pesagem.png";
import AparteImage from "../assets/images/pesagem.png";
import MedicamentoImage from "../assets/images/pesagem.png";
import ReproducaoImage from "../assets/images/pesagem.png";
import VendaImage from "../assets/images/pesagem.png";

import Colors from "../constants/Colors";
const { height, width } = Dimensions.get("window");

class HomeScreen extends Component {
  state = {
    selectedItems: [
      {
        pesagemSelected: true,
        examesSelected: false,
        aparteSelected: false,
        medicamentoSelected: false,
        reproducaoSelected: false,
        vendaSelected: false
      }
    ],
    enabledButton: false,
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  itemSelectedHandler = pesagemSelected => {
    this.setState(prevState => {
      return {
        pesagemSelected: pesagemSelected
      };
    });

    alert("item selecionado");
  };

  onAddManagement = () => {
    this.setState(prevState => {
      return {
        enabledButton: this.checkIfValuesAreTrue()
      };
    });
    this.toggleModal();
  };

  modalClosedHandler = () => {
    this.setState({
      enabledButton: false
    });
  };

  checkIfValuesAreTrue() {
    return (
      this.state.selectedItems[0].aparteSelected ||
      this.state.selectedItems[0].reproducaoSelected ||
      this.state.selectedItems[0].medicamentoSelected ||
      this.state.selectedItems[0].examesSelected ||
      this.state.selectedItems[0].pesagemSelected ||
      this.state.selectedItems[0].vendaSelected
    );
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={{ flex: 1 }}>
              <Text>Hello!</Text>
              <Button title="Hide modal" onPress={this.toggleModal} />
            </View>
          </Modal>
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([ 
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
          >
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                Novo Manejo
              </Text>
              <Text
                style={{
                  fontWeight: "300",
                  marginTop: 10,
                  paddingHorizontal: 20
                }}
              >
                Selecione para ativar os tipos de manejos que deseja e criar um
                novo manejo!
              </Text>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                <Home
                  width={width}
                  image={PesagemImage}
                  name="PESAGEM"
                  onItemSelected={this.itemSelectedHandler}
                />
                <Home width={width} image={ExamesImage} name="EXAMES" />
                <Home width={width} image={AparteImage} name="APARTE" />
                <Home
                  width={width}
                  image={MedicamentoImage}
                  name="MEDICAMENTO"
                />
                <Home width={width} image={ReproducaoImage} name="REPRODUÇÃO" />
                <Home width={width} image={VendaImage} name="VENDA" />
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 17
                }}
              >
                <TouchableOpacity onPress={this.onAddManagement}>
                  <View
                    style={{
                      backgroundColor: Colors.tabIconSelected,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 15,
                      height: 60,
                      borderColor: Colors.tabIconSelected,
                      borderWidth: 3
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        color: "white"
                      }}
                    >
                      INICIAR NOVO MANEJO
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
export default HomeScreen;

HomeScreen.navigationOptions = {
  // header: null,
  title: "Seja bem vindo!"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
