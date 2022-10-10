/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {Picker} from '@react-native-picker/picker';
import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';

class PickerComponent extends Component {
  state = {
    country : "korea"
  }
  render() {
    return (
      <View style={styles.container}>
        <Picker style={{height: 50, width: 250}}
        selectedValue={this.state.country}
        onValueChange={(val, idx) =>
          this.setState({country: val})
        }
        >
          <Picker.Item label='Korea' value="korea"/>
          <Picker.Item label='Canada' value="canada"/>
        </Picker>
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
});

export default PickerComponent;
