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
  Alert,
  TextInput
} from "react-native";

import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "../components/HomeScreen/Home";

import { NavigationActions } from 'react-navigation';
import Dialog from "react-native-dialog";

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
    WeighSelected: false,
    ExamsSelected: false,
    SeparateSelected: false,
    MedicineSelected: false,
    ReproductionSelected: false,
    SellSelected: false,
    enabledButton: false,
    isModalVisible: false,
    dialogVisible: false,
    idAnimal: 0
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };
  
  handleID = (id) => {
    this.setState({ idAnimal: id });
  };

  handleBT = () => {
    alert("Bluetooth indisponivel!");
  };

  handleConfirm = () => {
    this.handleCancel();
    this.toggleModal();
    this.sendIdtoManage();
  }

  handleCancel = () => {
    this.setState({ dialogVisible: false });
  };

  itemSelectedHandler = (propSelected, propName) => {
    this.state.enabledButton = true;

    this.setState(prevState => {
      switch (propName) {
        case "PESAGEM":
          return {
            WeighSelected: propSelected
          };
        case "EXAMES":
          return {
            ExamsSelected: propSelected
          };
        case "APARTE":
          return {
            SeparateSelected: propSelected
          };
        case "MEDICAMENTO":
          return {
            MedicineSelected: propSelected
          };
        case "REPRODUÇÃO":
          return {
            ReproductionSelected: propSelected
          };
        case "VENDA":
          return {
            SellSelected: propSelected
          };
        default:
          this.state.enabledButton = propSelected;
          break;
      }
    });
  };

  onAddManagement = () => {
    this.setState(prevState => {
      return {
        enabledButton: this.checkIfValuesAreTrue()
      };
    });

    if (this.state.enabledButton) {
      this.toggleModal();
    } else {
      Alert.alert(
        "ATENÇÃO",
        "É necessário selecionar pelo menos um tipo de manejo antes de prosseguir!"
      );
    }
  };

  modalClosedHandler = () => {
    this.setState({
      enabledButton: false
    });
  };

  navigateToManage = () => {
    
    this.showDialog();
  }

  showDialog = () => {
    this.setState({ dialogVisible: true });
  };

  sendIdtoManage = () => {
    if (this.state.idAnimal) {
      this.props.navigation.dispatch(NavigationActions.navigate({ routeName: 'ManagementScreen', params: { idAnimal: this.state.idAnimal }}));
    } else {
      alert('Animal não encontrado!');
    }
    
  }

  checkIfValuesAreTrue() {
    return (
      this.state.SeparateSelected ||
      this.state.ReproductionSelected ||
      this.state.MedicineSelected ||
      this.state.ExamsSelected ||
      this.state.WeighSelected ||
      this.state.SellSelected
    );
  }

  renderExamsForm = () => {
    if (this.state.ExamsSelected) {
      return <ExamsForm />;
    } else {
      return null;
    }
  };

  renderMedicineForm = () => {
    if (this.state.MedicineSelected) {
      return <MedicineForm />;
    } else {
      return null;
    }
  };

  renderReproductionForm = () => {
    if (this.state.ReproductionSelected) {
      return <ReproductionForm />;
    } else {
      return null;
    }
  };

  renderSellForm = () => {
    if (this.state.SellSelected) {
      return <SellForm />;
    } else {
      return null;
    }
  };

  renderSeparateForm = () => {
    if (this.state.SeparateSelected) {
      return <SeparateForm />;
    } else {
      return null;
    }
  };

  renderWeighForm = () => {
    if (this.state.WeighSelected) {
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
                alignSelf: "flex-end",
                marginRight: 10
              }}
            >
              <View>
                <Icon
                  name="ios-close"
                  size={50}
                  style={{ right: 0 }}
                  color={Colors.mainColor}
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
                <Text
                  style={{
                    marginLeft: 20,
                    marginRight: 20,
                    fontSize: 20,
                    fontWeight: "400",
                    color: "#8da614"
                  }}
                >
                  Nome do Manejo:
                </Text> 
                <TextInput
                  style={styles.textInput} 
                  autoCapitalize="none"
                  placeholder="Nome do Manejo"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
                {this.renderExamsForm()}
                {this.renderMedicineForm()}
                {this.renderReproductionForm()}
                {this.renderSellForm()}
                {this.renderSeparateForm()}
                {this.renderWeighForm()}
                <TouchableOpacity onPress={this.navigateToManage}>
                  <View
                    style={[
                      styles.button,
                      { backgroundColor: Colors.mainColor }
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
                Selecione para ativar os tipos desejados e criar um novo manejo!
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
                <Home
                  width={width}
                  image={ExamesImage}
                  name="EXAMES"
                  onItemSelected={this.itemSelectedHandler}
                />
                <Home
                  width={width}
                  image={AparteImage}
                  name="APARTE"
                  onItemSelected={this.itemSelectedHandler}
                />
                <Home
                  width={width}
                  image={MedicamentoImage}
                  name="MEDICAMENTO"
                  onItemSelected={this.itemSelectedHandler}
                />
                <Home
                  width={width}
                  image={ReproducaoImage}
                  name="REPRODUÇÃO"
                  onItemSelected={this.itemSelectedHandler}
                />
                <Home
                  width={width}
                  image={VendaImage}
                  name="VENDA"
                  onItemSelected={this.itemSelectedHandler}
                />
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
                      backgroundColor: Colors.mainColor,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 15,
                      height: 60,
                      borderColor: Colors.mainColor,
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
          <View>
          <Dialog.Container visible={this.state.dialogVisible}>
            <Dialog.Title>Selecionar animal</Dialog.Title>
            <Dialog.Description>Por favor, digite o ID:</Dialog.Description>
            <Dialog.Input label="ID" onChangeText={id_ => this.handleID(id_)} />
            <Dialog.Button label="Voltar" onPress={this.handleCancel} />
            <Dialog.Button label="Bluetooth" onPress={this.handleBT}  />
            <Dialog.Button label="Confirmar" onPress={this.handleConfirm} />
          </Dialog.Container>
        </View>
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
  },
  textInput: {
    height: 40,
    marginLeft: 20,
    marginRight: 20,
    width: "90%",
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 8,
    borderRadius: 8,
    marginBottom: 8
  }
});
