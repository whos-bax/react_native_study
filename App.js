/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Button,
  TextInput,
} from 'react-native';
import Header from './src/hearder';
import Generator from './src/generator';
import Numlist from './src/numlist';
import Input from './src/input';
import Picker from './src/picker';

class App extends Component {
  state = {
    appName: 'MY FIRST APP',
    random: [36, 999],
  };

  onAddRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    this.setState(prevState => {
      return {
        random: [...prevState.random, randomNum],
      };
    });
  };

  onNumDelete = position => {
    const newArray = this.state.random.filter((num, index) => {
      return position != index;
    });
    this.setState({
      random: newArray,
    });
    alert('delete', position);
  };

  // --------------------------------------
  state = {
    myTextInput: '',
    alphabet: ['a', 'b', 'c', 'd'],
  };

  onChangeInput = event => {
    this.setState({
      myTextInput: event,
    });
  };

  onAddTextInput = () => {
    this.setState(prevState => {
      if (prevState.myTextInput !== '') {
        return {
          myTextInput: '',
          alphabet: [...prevState.alphabet, prevState.myTextInput],
        };
      } else {
        alert('add message!');
      }
    });
  };

  render() {
    return (
      <View style={styles.mainView}>
        <Picker />
        {/* <Header name={this.state.appName} />
        <View style={styles.subView}>
          <Text
            style={styles.mainText}
            onPress={() => alert('text touch event')}>
            hello world
          </Text>
        </View>

        <Generator add={this.onAddRandomNum} />

        <ScrollView
          style={{width: '100%'}}
          // onMomentumScrollBegin={() => alert('begin')}
          // onMomentumScrollEnd={() => alert('begin')}
          // onScroll={() => alert('scrolling')}
          // onContentSizeChange={(width, height) => alert(height)}
          bounces={false}>
          <Numlist num={this.state.random} delete={this.onNumDelete} />
        </ScrollView> */}

        {/* <TextInput
          value={this.state.myTextInput}
          style={styles.input}
          onChangeText={this.onChangeInput}
          multiline={true}
          maxLength={100}
          autoCapitalize={'none'}
          editable={true}
        />
        <Button title="Add Text Input" onPress={this.onAddTextInput} />
        <ScrollView style={{width: '100%'}}>
          {this.state.alphabet.map((item, idx) => (
            <Text style={styles.mainText} key={idx}>
              {item}
            </Text>
          ))}
        </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 50,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  subView: {
    backgroundColor: 'yellow',
    marginBottom: 10,
  },
  anotherSubView: {
    flex: 2,
    backgroundColor: 'yellow',
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'red',
    padding: 20,
    margin: 20,
    backgroundColor: 'pink',
  },
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 20,
    fontSize: 25,
    padding: 10,
  },
});

export default App;
