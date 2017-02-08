import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default class LayoutExample extends Component {
  render() {
    return <View style={styles.container}>
      <View style={[styles.box, {flex: 1, backgroundColor: 'purple'}]}/>
      <View style={[styles.box, {flex: 1, backgroundColor: 'gold'}]}/>
      <View style={[styles.box, {flex: 1, backgroundColor: 'green'}]}/>
      <View style={[styles.box, {
        position: 'absolute',
        bottom: 0,
        left: 40,
        width: 40,
        backgroundColor: 'blue'
      }]}/>
    </View>
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    width: 120,
    backgroundColor: '#dfdfdf',
  },
  box: {
    height: 40,
  },
});

// flex: 2
// width: 40
// remove absolute
// overflow hidden
// flexWrap: wrap
// justifyContent: center
// remove container height
