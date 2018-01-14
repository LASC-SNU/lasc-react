import React,{Component} from 'react';
import {View,Text,TextInput,StyleSheet,Button} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown';

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
    const data = [{
      value : 'PHY-101'
    },{
      value : 'CHD-101'
    },{
      value : 'MAT-101'
    }];
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
        <Dropdown style={stuSignUp.dropdownStyle}
        value="PHY-101"
        itemTextStyle={stuSignUp.textStyle}
        selectedItemColor="#000000"
        label="LASC Subject"
        data={data}
        itemCount={2}/>
        <View style={stuSignUp.button}>
          <Button title="Get started" color = "#ffffff"/>
        </View>
      </View>
    );
  }
}

const stuSignUp = StyleSheet.create({
  container : {
    flex : .8,
    flexDirection : 'column',
    alignItems : 'center'
  },
  innerContainer : {
    flex : 1,
  //  backgroundColor: "#cccccc",
    flexDirection : 'row',
    justifyContent : 'space-around',
    alignItems : 'center',
    borderRadius: 15,
    paddingLeft :80,
    paddingRight :80,
    paddingTop :25,
    paddingBottom :25,
    marginTop: 30,
    //borderColor : '#00ffff',
  },
  textStyle : {
    fontSize : 20,
  },
  button: {
    backgroundColor: "#272828",
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
  },
  dropdownStyle : {
    borderRadius : 10,
    paddingTop : 10,
    paddingLeft : 80,
    paddingRight : 80,
    marginTop : 30,
    height : 40
  }
});
