// @flow

import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends Component<Object> {
  render() {
    return (
      <View style={styles.app}>
        <View style={styles.appHeader}>
          <Text style={styles.appTitle}>Main Page ⚛️</Text>
        </View>
        <Text
          style={styles.appIntro}
          onPress={() => this.props.history.push('/extra')}
        >
          Hi there. This is main page.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
  appHeader: {
    flex: 1,
    backgroundColor: '#222',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 16,
    color: 'white',
  },
  appIntro: {
    flex: 2,
    fontSize: 30,
    textAlign: 'center',
  },
});
