/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

class Input extends Component {
  state = {
    myTextInput: 'asd',
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
          maxLength={100}
          autoCapitalize={"none"}
          editable={true}
        />
        <Text>Hello World</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default Input;
