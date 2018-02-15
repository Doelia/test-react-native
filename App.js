import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from "react-navigation";
import MapPage from "./src/MapPage";
import FormPage from "./src/FormPage";
import ListPage from "./src/ListPage";

const Tabs = TabNavigator({
    Map: { screen: MapPage },
    Form: { screen: FormPage },
    List: { screen: ListPage },
}, {
    tabBarOptions: {
    }
});

export default class App extends React.Component {
  render() {
    return (
        <Tabs/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
