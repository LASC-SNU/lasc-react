import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  Button,
  TouchableOpacity,
  FlatList
} from 'react-native';

export default class DashBoard extends Component<{}>{

  static navigationOptions = {
    title : 'DashBoard'
  };


  render(){
    const{navigate} = this.props.navigation;
    return (
      <View style={style.container}>
      <View style={style.body}>
      <FlatList
        style={style.list}
        data={[{key: 'CSD207'}]}
        renderItem={({item}) => <Text>{item.key}</Text>}
        onPress = {() =>
          navigate("Home",{})
        }
        />
      </View>
      <View style={style.tabbar}>
        <TouchableOpacity style={style.tabitem}>
        <Button title="LogOut" color="#ffffff" borderRadius={1} onPress = {() =>
          navigate("LogOutScreen",{})
        }/>
        </TouchableOpacity>
        <TouchableOpacity style={style.tabitem}>
        <Button title="Attendance" color="#ffffff" borderRadius={1} onPress = {() =>
          navigate("MarkAttendance",{})
        }/>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#ffffff'
    },
  title : {
    width: 98,
    height: 22,
    resizeMode: 'contain'
  },
  list : {
    paddingTop: 10,
    borderRadius: 3,
    borderColor: 'grey'
  },
  body : {
    flex: 1,
    alignItems: 'center'
  },
  tabbar : {
    backgroundColor: '#00a2f9',
    height: 60,
    borderTopWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  tabitem : {
    borderRadius: 5,
    borderColor: 'white'
  }
});
