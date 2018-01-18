import React, {Component} from 'react';
import {View,Button,StyleSheet,Text} from 'react-native';

export default class Login extends Component<{}>{
  /*static navigationOptions = {
    title : 'SignUp'
  };*/
  render(){
    //const {navigate} = this.props.navigation;
    return(
      <View /*style={loginStyles.container}*/>
      /*<Text style={loginStyles.textStyle}>
      Sign up as
      </Text>
      <View style={loginStyles.button}>
      <Button title="Instructor"
      color = "#ffffff"
      onPress = { () => navigate("SignUpAsIns")}/>
      </View>
      <View style={loginStyles.button}>
      <Button title="Student"
      color = "#ffffff"
      onPress = { () => navigate("SignUpAsStu")}/>
      </View>*/
      </View>
    );
  }
}

/*const loginStyles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  button: {
    backgroundColor: "#00a2f9",
    borderRadius: 10,
    paddingLeft :60,
    paddingRight :60,
    paddingTop :10,
    paddingBottom :10,
    marginTop: 30
  },
  textStyle : {
    fontWeight : 'bold',
    fontSize : 40,
    color : '#46484c',
    marginBottom : 30
  }
});*/
