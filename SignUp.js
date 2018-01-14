import React, {Component} from 'react';
import {View,Button,StyleSheet} from 'react-native';

export default class SignUp extends Component<{}>{
  static navigationOptions = {
    title : 'SignUp'
  };
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={signupStyles.container}>
      <View style={signupStyles.button}>
      <Button title="Sign Up as Instructor"
      color = "#ffffff"
      onPress = { () => navigate("SignUpAsIns")}/>
      </View>
      <View style={signupStyles.button}>
      <Button title="Sign Up as Student"
      color = "#ffffff"
      onPress = { () => navigate("SignUpAsStu")}/>
      </View>
      </View>
    );
  }
}

const signupStyles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center'
  },
  button: {
    backgroundColor: "#272828",
    borderRadius: 10,
    paddingLeft :60,
    paddingRight :60,
    paddingTop :10,
    paddingBottom :10,
    marginTop: 20
  }
});
