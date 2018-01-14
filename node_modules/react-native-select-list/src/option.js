import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Option extends Component {
  render() {
    const { children, last } = this.props;

    return (
      <View style={[styles.option, last ? styles.last : {}, this.props.optionStyle]}>
        <Text style={[styles.text, this.props.optionTextStyle]}>{ children }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  option: {
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  last: {
    borderBottomWidth: 0,
  },
  text: {
    paddingHorizontal: 5,
  },
});

module.exports = Option;
