import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

class Caret extends Component {
  render() {
    const { element, size, color } = this.props;

    if (!element) {
      return null;
    }

    if (typeof(element) !== "string") {
      return element;
    } else {
      return <View style={[
        styles.caret,
        styles[element],
        {
          borderLeftWidth: size/2,
          borderRightWidth: size/2,
          borderTopWidth: size - 5,
          borderTopColor: color,
        }
      ]} />;
    }
  }
}

const styles = StyleSheet.create({
  caret: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  up: {
    transform: [
      {rotate: '180deg'}
    ]
  }
});

Caret.propTypes = {
  size: React.PropTypes.number,
  color: React.PropTypes.string,
};

Caret.defaultProps = {
  size: 15,
  color: '#333333',
};

module.exports = Caret;
