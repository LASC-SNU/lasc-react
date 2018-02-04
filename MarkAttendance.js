import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Button,
  Alert
} from 'react-native';

export default class MarkAttendance extends Component<{}>{

  static navigationOptions = {
    title : 'Attendance'
  };

  alertFunction = () => {
    const{navigate} = this.props.navigation;
    Alert.alert(
  'Attendance',
  'Sucessful!',
  [
    {text: 'Done', onPress: () => navigate("DashBoard",{})},
  ],
  { cancelable: false }
)
  }

  render(){
    const{navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={style.container}>
        <Button title="Submit Attendance" color="#ffffff" onPress = {this.alertFunction}/>
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
