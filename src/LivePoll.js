import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import * as firebase from 'firebase';
import Exponent from 'exponent';
import { Ionicons } from '@exponent/vector-icons';
import colors from './colors';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const firebaseConfig = {
  apiKey: "<API-KEY>",
  authDomain: "<SUBDOMAIN>.firebaseapp.com",
  databaseURL: "https://<SUBDOMAIN>.firebaseio.com",
  storageBucket: "<SUBDOMAIN>.appspot.com",
};

const initialPolls = [
  {question: 'Javascript Experience', options: ['None', '< 1 year', '< 3 years', '+ 3 years']},
  {question: 'React Experience', options: ['None', '< 1 year', '< 3 years', '+ 3 years']},
  {question: 'React Native Experience', options: ['None', '< 1 year', '+ 1 year']},
  {question: 'iOS Experience', options: ['None', '< 1 year', '< 3 years', '+ 3 years']},
  {question: 'Android Experience', options: ['None', '< 1 year', '< 3 years', '+ 3 years']},
];

class Options extends Component {
  render() {
    const { poll } = this.props;
    return <View style={styles.optionsContainer}>
      {poll.options.map(this._renderOption)}
    </View>
  }

  _renderOption = (option, index) => {
    const { poll } = this.props;
    let count = 0;
    if (poll.votes) {
      const votes = Object.values(poll.votes);
      count = votes.reduce((acc, vote) => {
        return vote.option === index ? acc + 1 : acc
      }, 0);
    }

    return <TouchableOpacity key={index}
      activeOpacity={0.7}
      style={styles.optionContainer}
      onPress={() => {this.props.onVote(index)}}>
      <Text style={styles.optionText}>{option}</Text>
      <Text style={styles.optionCount}>{count}</Text>
    </TouchableOpacity>
  }

  static propTypes = {
    poll: React.PropTypes.object,
    onVote: React.PropTypes.func,
  }
}

export default class LivePoll extends Component {
  state = {
    selectedPoll: 0,
    polls: [],
  };

  constructor(props) {
    super(props);
    const firebaseApp = firebase.initializeApp(firebaseConfig);
    this.pollsRef = firebaseApp.database().ref('polls');

    initialPolls.forEach((poll, i) => {
      this.pollsRef.child(`${i}`).update(poll);
    });
  }

  render() {
    const { selectedPoll, polls } = this.state;
    if (polls.length == 0) {
      return <Text>Loading...</Text>
    }
    const poll = polls[selectedPoll];
    return (
      <View style={styles.container}>
        <Text style={styles.question}>{poll.question}</Text>
        <Options poll={poll} onVote={(option) => {
          this._vote(selectedPoll, option)
        }} />
        <View style={styles.navigationContainer}>
          {this._renderPrevious()}
          {this._renderNext()}
        </View>
      </View>
    );
  }

  componentDidMount() {
    this.pollsRef.on('value', (items) => {
      let polls = items.val() || [];
      this.setState({ polls });
    });
  }

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  _renderNext() {
    const { selectedPoll, polls } = this.state;
    if (selectedPoll < polls.length - 1) {
      return <TouchableOpacity style={styles.navigation} onPress={() => this.setState({selectedPoll: selectedPoll + 1})}>
        <Ionicons name="ios-arrow-round-forward-outline" size={44} color={colors.blue} />
      </TouchableOpacity>
    }
  }

  _renderPrevious() {
    const { selectedPoll } = this.state;
    if (selectedPoll > 0) {
      return <TouchableOpacity style={styles.navigation} onPress={() => this.setState({selectedPoll: selectedPoll - 1})}>
        <Ionicons name="ios-arrow-round-back-outline" size={44} color={colors.blue} />
      </TouchableOpacity>
    }
  }

  _vote(poll, option) {
    this.pollsRef.child(`${poll}/votes/${Exponent.Constants.deviceId}`).set({ option })
  }

}

const screen = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: screen.height * 0.55,
    width: screen.width - 40,
    backgroundColor: colors.darkGray,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 5,
  },
  question: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  optionsContainer: {
    alignSelf: 'stretch',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.blue,
    margin: 4,
    borderRadius: 20,
    height: 40,
    padding: 10,
  },
  optionText: {
    color: 'white',
    fontWeight: '700'
  },
  optionCount: {
    paddingLeft: 10,
    backgroundColor: 'transparent',
    color: 'white',
    fontWeight: '800'
  },
  navigationContainer: {
    flexDirection: 'row',
  },
  navigation: {
    backgroundColor: 'transparent',
    width: 80,
    alignItems: 'center',
    paddingHorizontal: 10,
  }
});
