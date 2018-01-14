import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,Button,Picker} from 'react-native';

export default class SignUpAsStu extends Component{
  constructor(props){
    super(props);
    this.state = {subject : 'Physics'};
  }
  static navugationOptions = {
    title : 'Sign Up As Student'
  };
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View style={stuSignUp.container}>
        <View style={stuSignUp.innerContainer}>
          <TextInput
            style={stuSignUp.inputStyle}
            placeholder="Full name"
          />
        </View>
        <View style={stuSignUp.innerContainer}>
          <TextInput
          style={stuSignUp.inputStyle}
          placeholder="Roll number"/>
        </View>
        <View style={stuSignUp.innerContainer}>
          <TextInput style={stuSignUp.inputStyle}
          placeholder="Net ID"/>
        </View>
        <View style={stuSignUp.button}>
          <Button title="Get started" color = "#ffffff"/>
        </View>
      </View>
    );
  }
}

const stuSignUp = StyleSheet.create({
  container : {
    flex : .5,
    flexDirection : 'column',
    alignItems : 'center',
    backgroundColor: "white",
  },
  innerContainer : {
    flex : 1,
    backgroundColor: "#d5dbe0",
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    borderRadius: 15,
    paddingLeft :80,
    paddingRight :80,
    paddingTop :25,
    paddingBottom :25,
    marginTop: 30,
    borderColor : '#00ffff',
  },
  textStyle : {
    fontSize : 20,
  },
  button: {
    backgroundColor: "#00a2f9",
    borderRadius: 10,
    paddingLeft :80,
    paddingRight :80,
    paddingTop :10,
    paddingBottom :10,
    marginTop: 30
  },
  inputStyle : {
    height : 40,
    marginLeft : 20,
    color : '#ffffff',
    textAlign : 'left',
  }
});
