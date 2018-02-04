import React, {Component} from 'react';
import {StyleSheet,View, Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';

export default class LogOutScreen extends Component<{}>{

  static navigationOptions = {
    title : 'Logged Out'
  };

    componentDidMount(){
         const{navigate} = this.props.navigation;
         this.timeoutHandle = setTimeout(()=>{
           navigate("Home",{})
         }, 2000);
       }

    componentWillUnmount(){
         clearTimeout(this.timeoutHandle);
       }

  render(){
    const{navigate} = this.props.navigation;
    return (
      <KeyboardAvoidingView behavior="padding" style={style.container}>
            <Text style={style.buttontext}>Sucessfully Logged Out!</Text>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center'
  },
  buttontext : {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700'
  }
});
