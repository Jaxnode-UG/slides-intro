import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import colors from './colors';

export default class Link extends Component {
  render() {
    return <TouchableOpacity onPress={this._openLink}>
      <Text numberOfLines={1} style={styles.text}>
        {this.props.url}
      </Text>
    </TouchableOpacity>
  }

  _openLink = () => {
    Linking.openURL(this.props.url);
  }

  static propTypes = {
    url: React.PropTypes.string,
  }
}

const styles = StyleSheet.create({
  text: {
    padding: 10,
    fontSize: 16,
    color: colors.blue,
  },
});
