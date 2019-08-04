import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Colors from "../../constants/Colors";

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
    <Icon
                  name="shape-polygon-plus"
                  size={20}
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
    alignItems: "center",
    borderLeftColor: Colors.mainColor,
    borderLeftWidth: 4
  },
  manageImage: {
      marginRight: 8,
      height: 30,
      width: 30
  },
  textItem: {
    color: Colors.mainColor,
    fontSize: 18,
    paddingLeft: 5
  }
});

export default listItem;
