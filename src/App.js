import React, { Component } from 'react';
import {
  ScrollView,
  Image,
} from 'react-native';

import LivePoll from './LivePoll';
import LayoutExample from './LayoutExample';
import Slide from './Slide';
import BulletPoint from './BulletPoint';
import Link from './Link';

export default class App extends Component {
  render() {
    return (
      <ScrollView horizontal={true} pagingEnabled={true}>
        <Slide title="Getting started with React Native" />

        <Slide title="Sponsor">
          <Image style={{alignSelf: 'center'}} source={require('../assets/hashrocket.png')} />
          <Link url="https://hashrocket.com" />
        </Slide>

        <Slide title="Jacksonville Tech Community">
          <BulletPoint text="Slack channel #react-native-jax" />
          <BulletPoint text="+80 members" />
          <Link url="http://jacksonville-tech.com" />
        </Slide>

        <Slide title="Live Poll">
          <LivePoll />
        </Slide>

        <Slide title="Why React Native?">
          <BulletPoint text="Development experience" />
          <BulletPoint text="Code reuse between platforms" />
        </Slide>

        <Slide title="React Native Setup">
          <BulletPoint text="Dev OS: Mac, Windows & Linux" />
          <BulletPoint text="Mobile OS: iOS & Android" />
          <BulletPoint text="Node.js®" />
          <Link url="https://facebook.github.io/react-native/docs/getting-started.html" />
        </Slide>

        <Slide title="Exponent Setup">
          <BulletPoint text="Exponent XDE: Mac, Windows & Linux" />
          <BulletPoint text="iOS and Android mobile app" />
          <Link url="https://docs.getexponent.com/versions/v13.0.0/introduction/installation.html" />
        </Slide>

        <Slide title="Dev Menu">
          <BulletPoint text="Device: Shake it" />
          <BulletPoint text="Simulator: Ctrl + Command + z" />
          <BulletPoint text="Live Reload and Hot Reload" />
          <BulletPoint text="Debug" />
        </Slide>

        <Slide title="React">
          <BulletPoint text="Compose app with components" />
          <BulletPoint text="Components have props and state" />
          <BulletPoint text="Component Lifecycle" />
          <Link url="https://facebook.github.io/react/docs/react-component.html" />
        </Slide>

        <Slide title="React Native Components">
          <BulletPoint text="View" />
          <BulletPoint text="Image" />
          <BulletPoint text="Text" />
          <BulletPoint text="TextInput" />
          <BulletPoint text="Touchable*" />
          <BulletPoint text="Button" />
          <Link url="https://facebook.github.io/react-native/docs/listview.html" />
          <Link url="http://exp.host/@notbrent/native-component-list" />
        </Slide>

        <Slide title="React Native Layout">
          <BulletPoint text="Stylesheet class or inline" />
          <BulletPoint text="Flexbox" />
          <BulletPoint text="Absolute positioning" />
          <LayoutExample />
        </Slide>

        <Slide title="Thank you" />

      </ScrollView>
    );
  }
}

