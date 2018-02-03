import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import App from './App';
import DashBoard from './DashBoard';
import MarkAttendance from './MarkAttendance';
import AttendanceConfirm from './AttendanceConfirm';

const main = StackNavigator({
  Home : {screen : App},
  DashBoard : {screen : DashBoard},
  MarkAttendance : {screen : MarkAttendance},
  AttendanceConfirm : {screen : AttendanceConfirm}
});

export default main;
