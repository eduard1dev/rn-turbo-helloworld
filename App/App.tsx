/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

import widget from 'rtn-widget/js/NativeWidget';

function App(): JSX.Element {
  async function handleHelloWorld() {
    const helloWorld = await widget?.getHelloWorld();
    Alert.alert(helloWorld ?? '');
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => handleHelloWorld()}
        style={styles.button}>
        <Text>Hello World!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'pink',
  },
});

export default App;
