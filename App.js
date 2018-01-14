/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  View,
  Button
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        marginTop : 100,
        alignItems: 'center',
      }}>
        <Image
            style={{width: 150, height: 150}}
            source={{uri: 'https://avatars2.githubusercontent.com/u/32908260?s=200&v=4'}}
          />
        <View style={{backgroundColor: "#272828", borderRadius: 10,paddingLeft :60 ,paddingRight :60 ,paddingTop :10 ,paddingBottom :10 ,marginTop: 20}}>
          <Button title="Login" color="#ffffff"/>
        </View>
        <View style={{backgroundColor: "#272828", borderRadius: 10,paddingLeft :60 ,paddingRight :60 ,paddingTop :10 ,paddingBottom :10  ,marginTop: 20}}>
          <Button title="Sign Up" color="#ffffff"/>
        </View>
      </View>
    );
  }
}

const buttonStyle = StyleSheet.create({
  button: {
    backgroundColor: "#272828",
    borderRadius: 10,
    paddingLeft :60,
    paddingRight :60,
    paddingTop :10,
    paddingBottom :10,
    marginTop: 20
  }
});
