import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import App from './App';
import DashBoard from './DashBoard';
import MarkAttendance from './MarkAttendance';
import LogOutScreen from './LogoutScreen';

const main = StackNavigator({
  Home : {screen : App},
  DashBoard : {screen : DashBoard},
  MarkAttendance : {screen : MarkAttendance},
  LogOutScreen : {screen : LogOutScreen}
});

export default main;
