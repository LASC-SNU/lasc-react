import React, {Component} from 'react';
import {StyleSheet,View, Text, KeyboardAvoidingView, Button} from 'react-native';

export default class MarkAttendance extends Component<{}>{

  static navigationOptions = {
    title : 'Attendance'
  };

  render(){
    const{navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={style.container}>
        <Button title="Submit Attendance" color="#ffffff" onPress = {() =>
        navigate("AttendanceConfirm",{})}/>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#3498db'
  },
  buttoncontainer : {
    backgroundColor: '#2980b9',
    paddingVertical: 15
  },
  buttontext : {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700'
  }
});
