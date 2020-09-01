// @flow
import React, { Component } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import FastImage from 'react-native-fast-image'
import PropTypes from 'prop-types';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

import Specifications from "./components/Specifications";
import { getArtistName } from '../../utils/helpers';
import type { ArtworkType } from "../types/Gallery";

type Props = {
  navigation: {
    navigate: Object,
    state: {
      params: {
        query: string,
        artwork: ArtworkType
      }
    }
  }
};

class Exhibit extends Component<Props> {
  _onClosePressed: Function;
  constructor() {
    super();
    this._onClosePressed = this._onClosePressed.bind(this);
  }

  _onClosePressed() {
    // Poor way to pass the props between the views.
    // Idealy you would have a state management system like Redux or Mobx 
    //  handling the Data storage that is idependent of the view.
    const { navigation: { state, navigate } } = this.props;
    const { params: { query } } = state;

    // $FlowFixMe Add types for navigate method    
    navigate('Gallery', {
      query
    });
  }
  
  _renderBackground(artwork: ArtworkType) {
    return (
      <FastImage
        resizeMode='cover'
        source={{ uri: artwork.primaryimageurl }}
        style={styles.coverImage}
      />
    )
  }

  _renderForeground(artwork: ArtworkType) {
    const { people, title } = artwork;

    const artist = getArtistName(people);

    return (
      <View style={styles.meta}>
        <Text style={styles.title}>
          { title }
        </Text>
        <Text style={styles.artist}>
          { artist }
        </Text>
        <TouchableOpacity
          onPress={this._onClosePressed}
          style={styles.close}
        >
          <FastImage
            style={styles.xIcon}
            source={require('../../assets/back-icon.png')}
          />
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    const { navigation: { state } } = this.props;
    const { params: { artwork } } = state;

    return (
      <ParallaxScrollView
        backgroundColor="#000"
        backgroundSpeed={10}
        contentBackgroundColor="#fff"
        parallaxHeaderHeight={450}
        renderBackground={() => this._renderBackground(artwork)}
        renderForeground={() => this._renderForeground(artwork)}
      >
        <Specifications artwork={artwork} />
      </ParallaxScrollView>
    );
  }
}

Exhibit.propTypes = {};

export default Exhibit;

const styles = StyleSheet.create({
  coverImage: {
    height: 450,
    width: undefined
  },
  meta: {
    position: 'relative',
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50,
    paddingLeft: 25
  },
  close: {
    position: 'absolute',
    top: 40,
    left: 40,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  xIcon: {
    height: 20,
    width: 20,
  },
  artist: {
    color: '#fff',
    fontSize: 18
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8 
  }
})