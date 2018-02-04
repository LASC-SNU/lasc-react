import React, {Component} from 'react';
import {StyleSheet,View, Image, Text, Button} from 'react-native';

export default class DashBoard extends Component<{}>{

  static navigationOptions = {
    title : 'DashBoard'
  };

  render(){
    const{navigate} = this.props.navigation;
    return (
      <View style={style.container}>
      <View style={style.button}>
        <Button title="Mark Attendance" color="#ffffff" onPress = {() =>
          navigate("MarkAttendance",{})
        }/>
      </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#3498db'
  },
  button: {
    backgroundColor: "#00a2f9",
    borderRadius: 10,
    paddingLeft :60,
    paddingRight :60,
    paddingTop :10,
    paddingBottom :10,
    marginTop: 20
  }
});
