/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const Header = props => (
  <>
    <TouchableOpacity
      style={styles.header}
      onPress={() => alert('HELLO WORLD')}
      onLongPress={() => alert('HELLO WORLD LONG')}
      onPressIn={() => alert('HELLO WORLD IN')}
      >
      <View>
        <Text>{props.name}</Text>
      </View>
    </TouchableOpacity>
    <TouchableWithoutFeedback onPress={() => alert('HELLO WORLD')}>
      <View style={styles.header}>
        <Text>{props.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  </>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Header;
