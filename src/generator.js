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
  Button,
} from 'react-native';

const Generator = () => {
  return (
    <View style={styles.generator}>
      <Button title="Add Number" />
    </View>
  );
};

const styles = StyleSheet.create({
  generator: {
    backgroundColor: '#123242',
    alignItems: 'center',
    padding: 5,
    width: '100%',
  },
});

export default Generator;
