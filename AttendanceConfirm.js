import React, {Component} from 'react';
import {StyleSheet,View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class AttendanceConfirm extends Component<{}>{

  static navigationOptions = {
    title : 'Confirmation'
  };

  render(){
    const{navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={style.container}>
            <Text style={style.buttontext}>Attendance Marked!</Text>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#3498db'
  },
  buttontext : {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700'
  }
});
