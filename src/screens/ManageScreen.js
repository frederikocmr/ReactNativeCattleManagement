import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet,
  Alert
} from "react-native";

import ManageInput from "../components/ListScreen/ManageInput";
import ManageList from "../components/ListScreen/ManageList";
import ManageDetail from "../components/ListScreen/ManageDetail";

class ManageScreen extends Component {
  state = {
    places: [],
    selectedManage: null,
  };

  placeAddedHandler = manageName => {  
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: manageName,
          image: {
            uri:
              "https://c1.staticflickr.com/5/4096/4744241983_34023bf303_b.jpg"
          }
        })
      };
    });
  };

  placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedManage.key;
        }),
        selectedManage: null
      };
    });
  };

  modalClosedHandler = () => {
    this.setState({
      selectedManage: null
    });
  };

  placeSelectedHandler = key => {
    Alert.alert(
      'MANEJO',
      'Selecione uma opção',
      [
        {
          text: 'Excluir',
          onPress: () => console.log('Excluir'),
          style: 'cancel',
        },
        {text: 'Voltar', onPress: () => console.log('Ask me later pressed')},
        
        {text: 'Continuar', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );

    this.setState(prevState => {
      return {
        selectedManage: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });

  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId');

    return (
      <View style={styles.container}>
        <ManageDetail
          selectedManage={null}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <ManageInput onPlaceAdded={this.placeAddedHandler} />
        <ManageList
          places={this.state.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}
export default ManageScreen;

ManageScreen.navigationOptions = {
  title: 'Meus Manejos',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});