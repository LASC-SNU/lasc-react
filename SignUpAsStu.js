import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,Picker} from 'react-native';

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
      <Text style={stuSignUp.textStyle}>
      Enter your name :-
      </Text>
      <TextInput
          style={stuSignUp.inputStyle}
          placeholder="Enter your name here"
        />
      </View>
      <View style={stuSignUp.innerContainer}>
      <Text style={stuSignUp.textStyle}>
      Enter your id :-
      </Text>
      <TextInput
      style={stuSignUp.inputStyle}
      placeholder="Enter your id here"/>
      </View>
      <View style={stuSignUp.innerContainer}>
      <Text style={stuSignUp.textStyle}>
      Enter your netid :-
      </Text>
      <TextInput style={stuSignUp.inputStyle}
      placeholder="Enter your netid here"/>
      </View>
      /*<Picker
      selectedValue={this.state.subject}
      onValueChange={(value,index) => this.setState({language : value})}>
      <Picker.Item label="Physics" value="Physics"/>
      <Picker.Item label="Chemistry" value="Chemistry"/>
      <Picker.Item label="Mathematics" value="Mathematics"/>
      </Picker> */
      </View>
    );
  }
}

const stuSignUp = StyleSheet.create({
  container : {
    flex : 1,
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center'
  },
  innerContainer : {
    flex : 1,
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    marginTop : 10
  },
  textStyle : {
    fontSize : 20
  },
  inputStyle : {
    height : 40,
    marginLeft : 10
  }
});
