import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import App from './App';
import Login from './Login';
import SignUp from './SignUp';

const main = StackNavigator({
  Home : {screen : App},
  Login : {screen : Login},
  SignUp : {screen : SignUp}
});

export default main;
