import React from'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottonTabNavigator } from 'react-navigation-tabs';
import TransactionScreen from './bookTransactionScreen';
import SearchScreen from './searchScreen';

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
}

var TabNavigator = createBottonTabNavigator({
  Transaction : {screen:TransactionScreen},
  Search:{screen:SearchScreen}
})
const Appcontainer = createAppContainer(TabNavigator)
