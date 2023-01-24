/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import configureStore from './config/configureStore';
import {Provider} from 'react-redux';
import StackNavigator from './navigation/index';

global.ip = '192.168.1.217';
const store = configureStore();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: 'main',
      id: null,
    };
  }
 
  render() {

    return (
      <Provider store={store}>
          <StackNavigator />
         
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  buttonContainer: {
    width: '33.33%',
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
  },
});
