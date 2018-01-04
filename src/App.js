// @flow

import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import Routing, {Router} from './helpers/routing/';
import Main from './scenes/Main';
import Extra from './scenes/Extra';

const Route = Routing.Route;
const Navigation = Routing.Navigation;
const Card = Routing.Card;

const App = () =>
  Platform.OS === 'web' ? (
    <Router>
      <View style={{flex: 1}}>
        <Route exact path="/" component={Main} />
        <Route path="/extra" component={Extra} />
      </View>
    </Router>
  ) : (
    <Router>
      <Navigation title="React Native Web">
        <Card exact path="/" component={Main} />
        <Card path="/extra" component={Extra} />
      </Navigation>
    </Router>
  );

export default App;

// export {default} from './scenes/Main';
