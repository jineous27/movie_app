import React, { Component } from 'react';
import { AppLoading } from "expo";
import * as Font from 'expo-font'
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  state = {
    loaded: false
  };
  loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  render() {
    const { loaded } = this.state;
    if (loaded) {
      return (
        <View>
          <Text>Open up App.js to start working on your app</Text>
        </View>
      );

    } else {
      return (
        <View>
          <Text>3a Burton street, Harristown</Text>
        </View>
      );
    }
 
 
  }
}
