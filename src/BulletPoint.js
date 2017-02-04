import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from './colors';

class Circle extends Component {
  render() {
    const { size, color } = this.props;
    const style = { width: size, height: size, borderRadius: size / 2, backgroundColor: color };
    return <View style={style} />
  }

  static propTypes = {
    size: PropTypes.number,
    color: PropTypes.string,
  }
}

export default class BulletPoint extends Component {
  render() {
    return <View style={styles.itemContainer}>
      <Circle size={8} color={colors.blue} />
      <Text style={styles.itemText}>
        {this.props.text}
      </Text>
    </View>
  }

  static propTypes = {
    text: PropTypes.string,
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    padding: 10,
    fontSize: 16,
    color: colors.darkGray,
  },
});
