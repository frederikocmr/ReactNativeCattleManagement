import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
    <Icon
                  name="cow"
                  size={50}
                  style={{ right: 0 }}
                  color="black"
                />
      <Text style={styles.textItem}>{props.manageName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    marginBottom: 5,
    padding: 10,
    backgroundColor: "#eee",
    flexDirection: "row",
    alignItems: "center"
  },
  manageImage: {
      marginRight: 8,
      height: 30,
      width: 30
  },
  textItem: {
    color: Colors.mainColor,
    fontSize: 20
  }
});

export default listItem;
