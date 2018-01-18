import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import App from './App';
import Login from './Login';

const main = StackNavigator({
  Home : {screen : App},
  Login : {screen : Login}
});

export default main;
