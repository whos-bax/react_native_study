/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';

import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
  ActivityIndicator,
  Modal,
} from 'react-native';

class ModalComponent extends Component {
  state = {
    modal: false,
  };

  handlerModal = () => {
    this.setState({
      modal: this.state.modal ? false : true,
    });
  };
  render() {
    return (
      <View style={{width: '100%'}}>
        <Button title="Open Modal" onPress={this.handlerModal} />
        <Modal
        visible={this.state.modal}
        animationType={'slide'}
        onShow={() => alert("Warning")}
        >
          <View
            style={{
              marginTop: 50,
              backgroundColor: "green",
            }}>
            <Text>This is Modal Content</Text>
          </View>

        <Button title="Go back" onPress={this.handlerModal} />
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    marginBottom: 200,
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 20,
    fontSize: 25,
  },
});

export default ModalComponent;
