import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import colors from './colors';

export default class Slide extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        {this.props.subtitle && <Text style={styles.subtitle}>{this.props.subtitle}</Text>}
        <View style={styles.itemsContainer}>
          {this.props.children}
        </View>
      </View>
    );
  }

  static propTypes = {
    title: React.PropTypes.string,
    subtitle: React.PropTypes.string,
    children: React.PropTypes.node,
  }
}

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: screen.width,
    height: screen.height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 60,
    paddingVertical: 10,
    alignSelf: 'stretch',
    backgroundColor: colors.blue,
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'center',
  },
  itemsContainer: {
    padding: 20,
  },
});
