import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppTabNavigator } from './components/AppTabNavigator';
import FaceBook from './screens/Facebook'
import Instagram from './screens/Instagram'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'

export default class App extends React.Component {
  render(){
  return (<AppContainer />
  )
  }
}

const switchNavigator = createBottomTabNavigator({
  FaceBook: { screen: FaceBook},
  Instagram: { screen: Instagram}
});

const AppContainer = createAppContainer(switchNavigator);
