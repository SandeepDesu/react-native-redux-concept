/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import LoginComponent from './containers/login';
import HomeComponent from './containers/home';
export default class pasha extends Component {


  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={LoginComponent} hideNavBar={true} initial={true} />
          <Scene key="home" component={HomeComponent} hideNavBar={true} />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('pasha', () => pasha);
