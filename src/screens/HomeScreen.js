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

import Home from "../components/HomeScreen/Home";
import ManagementDetail from "../components/HomeScreen/ManagementDetail"

import PesagemImage from "../assets/images/pesagem.png";
import ExamesImage from "../assets/images/pesagem.png";
import AparteImage from "../assets/images/pesagem.png";
import MedicamentoImage from "../assets/images/pesagem.png";
import ReproducaoImage from "../assets/images/pesagem.png";
import VendaImage from "../assets/images/pesagem.png";

import Colors from '../constants/Colors';
const { height, width } = Dimensions.get("window");

class HomeScreen extends Component {
  state = {
    pesagemSelected: false,
    examesSelected: false,
    aparteSelected: false,
    medicamentoSelected: false,
    reproducaoSelected: false,
    vendaSelected: false
  };

  itemSelectedHandler = () => {
    this.setState(prevState => {
      return {
        itemSelected: true
      };
    });

    alert("item selecionado");
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
        <ManagementDetail/>
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
                Selecione os tipos de manejos que deseja para criar um novo
                manejo!
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
              <View style={{
                  paddingHorizontal: 20,
                  marginTop: 17
                }}>
                <TouchableOpacity >
                    <View style = {{backgroundColor: Colors.tabIconSelected, alignItems: 'center', 
                                    justifyContent: 'center', borderRadius: 15, height: 60, borderColor: Colors.tabIconSelected, borderWidth: 3}}>
                        <Text style = {{fontSize: 16 ,fontWeight: "700", color: 'white' }}>INICIAR NOVO MANEJO</Text>
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
