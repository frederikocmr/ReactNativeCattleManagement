import React, { Component } from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";

class LinksScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>LinksScreen</Text>
      </View>
    );
  }
}
export default LinksScreen;

LinksScreen.navigationOptions = {
  title: 'Meus Manejos',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});