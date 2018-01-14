import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import App from './App';
import Login from './Login';
import SignUp from './SignUp';
import SignUpAsStu from './SignUpAsStu';
import SignUpAsIns from './SignUpAsIns';

const main = StackNavigator({
  Home : {screen : App},
  Login : {screen : Login},
  SignUp : {screen : SignUp},
  SignUpAsIns : {screen : SignUpAsIns},
  SignUpAsStu : {screen : SignUpAsStu}
});

export default main;
