import React from "react";
import { Modal, View, Image, Text, Button, StyleSheet } from "react-native";

const ManageDetail = props => {
  let modalContent = null;

  if (props.selectedManage) {
    modalContent = (
      <View>
        <Text style={styles.manageName}>{props.selectedManage.name}</Text>
      </View>
    );
  }
  return (
    <Modal
      onRequestClose={props.onModalClosed}
      visible={props.selectedManage !== null}
      animationType="slide"
    >
      <View style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button
            title="Excluir Manejo"
            color="red"
            onPress={props.onItemDeleted}
          />
          <Button title="Continuar" onPress={props.onModalClosed} />
          <Button title="Voltar" onPress={props.onModalClosed} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  manageImage: {
    width: "100%",
    height: 200
  },
  manageName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  }
});

export default ManageDetail;
