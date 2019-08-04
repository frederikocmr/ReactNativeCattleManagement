import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Animated,
  TouchableOpacity
} from "react-native";

import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../components/HomeScreen/Home";

import ExamsForm from "../components/ManagementModal/ExamsForm";
import MedicineForm from "../components/ManagementModal/MedicineForm";
import ReproductionForm from "../components/ManagementModal/ReproductionForm";
import SellForm from "../components/ManagementModal/SellForm";
import SeparateForm from "../components/ManagementModal/SeparateForm";
import WeighForm from "../components/ManagementModal/WeighForm";


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
        WeighSelected: true,
        ExamsSelected: true,
        SeparateSelected: true,
        MedicineSelected: true,
        ReproductionSelected: true,
        SellSelected: true
      }
    ],
    enabledButton: false,
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  itemSelectedHandler = WeighSelected => {
    this.setState(prevState => {
      return {
        WeighSelected: WeighSelected
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
      this.state.selectedItems[0].SeparateSelected ||
      this.state.selectedItems[0].ReproductionSelected ||
      this.state.selectedItems[0].MedicineSelected ||
      this.state.selectedItems[0].ExamsSelected ||
      this.state.selectedItems[0].WeighSelected ||
      this.state.selectedItems[0].SellSelected
    );
  }

  renderExamsForm = () => {
    if (this.state.selectedItems[0].ExamsSelected) {
      return <ExamsForm />;
    } else {
      return null;
    }
  };

  renderMedicineForm = () => {
    if (this.state.selectedItems[0].MedicineSelected) {
      return <MedicineForm />;
    } else {
      return null;
    }
  };

  renderReproductionForm = () => {
    if (this.state.selectedItems[0].ReproductionSelected) {
      return <ReproductionForm />;
    } else {
      return null;
    }
  };

  renderSellForm = () => {
    if (this.state.selectedItems[0].SellSelected) {
      return <SellForm />;
    } else {
      return null;
    }
  };

  renderSeparateForm = () => {
    if (this.state.selectedItems[0].SeparateSelected) {
      return <SeparateForm />;
    } else {
      return null;
    }
  };

  renderWeighForm = () => {
    if (this.state.selectedItems[0].WeighSelected) {
      return <WeighForm />;
    } else {
      return null;
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Modal
            isVisible={this.state.isModalVisible}
            animationInTiming={800}
            animationOutTiming={500}
            style={{ margin: 0, backgroundColor: "white" }}
          >
            <TouchableOpacity
              onPress={this.toggleModal}
              style={{
                width: 30,
                alignSelf: 'flex-end',
                marginRight: 10
              }}
            >
              <View>
                <Icon
                  name="ios-close"
                  size={50}
                  style={{ right: 0 }}
                  color={Colors.tabIconSelected}
                />
              </View>
            </TouchableOpacity>
            <ScrollView
              scrollEventThrottle={16}
              onScroll={Animated.event([
                { nativeEvent: { contentOffset: { y: this.scrollY } } }
              ])}
            >
              <View
                style={{ flex: 1, backgroundColor: "white", paddingBottom: 20 }}
              >
              
                {this.renderExamsForm()}
                {this.renderMedicineForm()}
                {this.renderReproductionForm()}
                {this.renderSellForm()}
                {this.renderSeparateForm()}
                {this.renderWeighForm()}
                <TouchableOpacity onPress={this.toggleModal}>
                  <View
                    style={[
                      styles.button,
                      { backgroundColor: Colors.tabIconSelected }
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        color: "white"
                      }}
                    >
                      SALVAR E CONTINUAR
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toggleModal}>
                  <View
                    style={[
                      styles.button,
                      { backgroundColor: Colors.warningText }
                    ]}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        color: "white"
                      }}
                    >
                      SALVAR E SAIR
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.toggleModal}>
                  <View
                    style={[styles.button, { backgroundColor: Colors.danger }]}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: "700",
                        color: "white"
                      }}
                    >
                      VOLTAR
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ScrollView>
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
                Selecione para ativar os tipos desejados e criar um
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
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    height: 40,
    margin: 6
  }
});
