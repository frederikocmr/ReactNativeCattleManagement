import React, { Component } from "react";
import { 
    Modal,
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";

class ManagementDetail extends Component {
   modalContent = null;

    
    render() {
        return (
            <Modal>
                <View>
                    <Text>  
                        {this.props.modalName}
                    </Text>
                    <View>
                        <Button title="Cadastrar e Continuar"/>
                        <Button title="Cadastrar e Sair"/>
                    </View>
                </View>
            </Modal>
        );
    }
}
export default ManagementDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});