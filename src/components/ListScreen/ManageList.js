import React from "react";
import { StyleSheet, FlatList } from "react-native";

import ListItem from "./ListItem";

const ManageList = props => {
  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (
        <ListItem
          manageName={info.item.name}
          manageImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default ManageList;
