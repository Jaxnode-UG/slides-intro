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
        <Slide title={"Getting Started With\nReact Native"} />

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
          <BulletPoint text="Productivity" />
        </Slide>

        <Slide title="Companies Investing In React Native">
          <BulletPoint text="Facebook" />
          <BulletPoint text="Instagram" />
          <BulletPoint text="Microsoft: Codepush, Mobile Center, VS Code" />
          <BulletPoint text="Wix" />
          <BulletPoint text="Airbnb" />
          <BulletPoint text="Walmart" />
          <Link url="https://facebook.github.io/react-native/showcase.html" />
        </Slide>

        <Slide title="Pain Points">
          <BulletPoint text="Breaking changes" />
          <BulletPoint text="Platform differences" />
          <BulletPoint text="Experimental features: Navigation" />
          <BulletPoint text="JS errors" />
          <BulletPoint text="Performance" />
          <Link url="https://productpains.com/product/react-native" />
        </Slide>

        <Slide title="React Native Setup">
          <BulletPoint text="iOS Requirements: Mac, Xcode, Simulators, iOS Device, Developer account, Provisioning profile" />
          <BulletPoint text="Android Requirements: OS (Mac, Windows, Linux), Java, Android Studio, Emulators" />
          <BulletPoint text="Node.js" />
          <BulletPoint text="npm install -g react-native-cli" />
          <BulletPoint text="react-native init FirstApp" />
          <BulletPoint text="cd FirstApp && react-native run-ios" />
          <BulletPoint text="Entry files: index.android.js and index.ios.js" />
          <Link url="https://facebook.github.io/react-native/docs/getting-started.html" />
        </Slide>

        <Slide title="Exponent Setup">
          <BulletPoint text="Install Exponent XDE: Mac, Windows & Linux" />
          <BulletPoint text="Install iOS or Android mobile app" />
          <BulletPoint text="Create new app using XDE" />
          <BulletPoint text="Send link and open app on phone" />
          <BulletPoint text="Entry file: main.js" />
          <Link url="https://docs.getexponent.com/versions/v13.0.0/introduction/installation.html" />
        </Slide>

        <Slide title="Dev Menu">
          <BulletPoint text="Device: Shake it" />
          <BulletPoint text="Simulator: Ctrl + Command + z" />
          <BulletPoint text="Live Reload and Hot Reload" />
          <BulletPoint text="Debug" />
        </Slide>

        <Slide title="Tutorial">
          <BulletPoint text="React Native Express" />
          <Link url="http://www.reactnativeexpress.com/" />
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
          <BulletPoint text="ListView" />
          <Link url="https://facebook.github.io/react-native/docs/listview.html" />
          <BulletPoint text="Exponent components" />
          <Link url="http://exp.host/@notbrent/native-component-list" />
        </Slide>

        <Slide title="React Native Layout">
          <BulletPoint text="Stylesheet class or inline" />
          <BulletPoint text="Flexbox" />
          <BulletPoint text="Absolute positioning" />
          <LayoutExample />
        </Slide>

        <Slide title="Code Walkthrough" />

        <Slide title="Worth Following">
          <BulletPoint text="React Native Radio" />
          <Link url="https://devchat.tv/react-native-radio" />
          <BulletPoint text="Use React Native" />
          <Link url="http://www.reactnative.com/" />
          <BulletPoint text="Medium" />
          <Link url="https://medium.com/tag/react-native" />
        </Slide>

      </ScrollView>
    );
  }
}

