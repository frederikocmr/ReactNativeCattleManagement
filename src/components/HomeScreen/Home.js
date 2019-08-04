import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";

import Colors from '../../constants/Colors';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: false, colorSelected: "white"  };
    this.onPress = this.onPress.bind(this);
  }

  onPress = () => {
    this.setState({
      selected: !this.state.selected,
      colorSelected: (this.state.selected ? "white" : Colors.mainColor )
    });
    this.props.onItemSelected(!this.state.selected, this.props.name);
  };
  
  render() {
    return (
      <View
        style={[{
          width: this.props.width / 2 - 30,
          height: this.props.width / 2 - 50,
          borderWidth: 0.5,
          borderColor: "#dddddd",
          marginBottom: 20
        }]}
      > 
        <View style={{ flex: 2.5 }}>
          <Image
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
            source={this.props.image}
          />
        </View>
        <TouchableHighlight
          style={[{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10,
            borderLeftColor: Colors.mainColor,
            borderLeftWidth: 4
          }, {backgroundColor: this.state.colorSelected}]}
          onPress={this.onPress }
          underlayColor={Colors.mainColor}
        >
          <View style={{ flex: 1, padding: 5 }}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              {this.props.name}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
