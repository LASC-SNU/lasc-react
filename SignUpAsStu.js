import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';

export default class SignUpAsStu extends Component<{}>{
  static navugationOptions = {
    title : 'Sign Up As Student'
  };
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View>
      <View style={signupStyles.container}>
        <View style={signupStyles.innerContainer}>
        <Text style={signupStyles.textStyle}>
        Name:-
        </Text>
        <TextInput style={signupStyles.inputStyle}
        placeHolder = "Enter your name"/>
        </View>
        <View style={signupStyles.innerContainer}>
        <Text style={signupStyles.textStyle}>
        Id:-
        </Text>
        <TextInput style={signupStyles.inputStyle}
        placeholder = "Enter your roll no."/>
        </View>
        <View style={signupStyles.innerContainer}>
        <Text style={signupStyles.textStyle}>
        Net Id:-
        </Text>
        <TextInput style={signupStyles.inputStyle}
        placeHolder="Enter your net "/>
        </View>
      </View>
      </View>
    );
  }
}

const signupStyles = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  innerContainer : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center'
  },
  textStyle : {
    fontSize : 42
  },
  inputStyle : {
    height : 40
  }
});
