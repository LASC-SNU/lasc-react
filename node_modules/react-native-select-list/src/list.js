import React, { Component } from 'react';
import { StyleSheet, View, Modal, TouchableWithoutFeedback, Dimensions, Text, ScrollView, Animated } from 'react-native';

const window = Dimensions.get('window');
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

class List extends Component {
  constructor() {
    super();

    this.state = {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      list: 0,
    }
  }

  measureProps() {
    this.refs.list.measure((x, y, width, height) => {
      this.setState({
        list: height,
      });
    });
    this.props.select.measureInWindow((x, y, width, height) => {
      this.setState({
        x: x,
        y: y,
        width: width,
        height: height,
      });
    });
  }

  render() {
    const { children, position } = this.props;

    return (
      <Modal
        transparent={true}>
        <TouchableWithoutFeedback onPress={this.props.onOverlayPress}>
          <View style={{ flex: 1}}></View>
        </TouchableWithoutFeedback>
        <View
          onLayout={this.measureProps.bind(this)}
          ref="list"
          style={[
            styles.list,
            {
              width: this.state.width,
              maxHeight: this.props.height,
              left: this.state.x,
              top: this.state.y + (position === 'down' ? this.state.height : -this.state.list),
              opacity: this.state.list ? 1 : 0,
            },
            this.props.style
          ]}>
          <View>
            <AnimatedScrollView
              automaticallyAdjustContentInsets={false}
              bounces={false}>
                {
                  children.map((item, index) => {
                    return (
                      <TouchableWithoutFeedback
                        key={index}
                        onPress={() => { this.props.onOptionPressed(item.props.value, item.props.children)}}
                        >
                        <View>
                          {item}
                        </View>
                      </TouchableWithoutFeedback>
                    );
                  })
                }
            </AnimatedScrollView>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: 'white',
    borderRadius: 2,
  },
});

module.exports = List;
