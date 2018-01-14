import React, {Component} from 'react'
import {Text,TextView,View,StyleSheet} from 'react-native';

export default class SignUpAsIns extends Component<{}>{
  static navigationOptions = {
    title : 'Sign Up As Instructor'
  };
  render(){
    const {navigate} = this.props.navigation;
    return(
      <View>
      </View>
    );
  }
}
