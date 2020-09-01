// @flow
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import PropTypes from 'prop-types';

import Gallery from './screens/Gallery'
import Exhibit from './screens/Exhibit'; 

type Props = {};

const ArtExplorer = StackNavigator({
  Gallery: {
    screen: Gallery
  },
  Exhibit: {
    screen: Exhibit
  }
}, {
  headerMode: 'none',
  cardStyle: {
    backgroundColor: '#fff'
  }
});

class AppRoot extends Component<Props> {
  render() {
    return (
      <View style={{flex: 1}}>
        <ArtExplorer />
      </View>
    );
  }
}

AppRoot.propTypes = {};

export default AppRoot;