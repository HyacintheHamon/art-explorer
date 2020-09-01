// @flow
import React, { PureComponent } from 'react';
import {
  Dimensions,
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image'
import { getArtistName } from '../../../../utils/helpers';

import type { ArtworkType } from '../../../types/Gallery';

type Props = {
  artwork: ArtworkType,
  onPress: (ArtworkType) => void
};

const window = Dimensions.get('window');
const HEIGHT = window.height;
const ARTWORK_IMAGE_HEIGHT = Math.round(HEIGHT * 0.51);

class Artwork extends PureComponent<Props> {
  _onPress: Function
  constructor() {
    super();
    this._onPress = this._onPress.bind(this);
  }

  _onPress() {
    const { artwork, onPress} = this.props;
    onPress(artwork);
  }
  
  render() {
    const {
      artwork: {
        century,
        primaryimageurl,
        people = [],
        medium,
        title
      }
    } = this.props;
    const artist = getArtistName(people);

    return (
      <TouchableOpacity
       style={styles.container}
       onPress={this._onPress}
      >
        <FastImage
          style={styles.artworkImage}
          source={{uri: primaryimageurl}}
          resizeMode='cover'
        />
        <View style={styles.metaContainer}>
          <Text style={styles.metaPrimary}>
            {
              title
            }
          </Text>
          <Text style={styles.metaPrimary}>
            {
              artist
            }
          </Text>
          <Text style={styles.metaSecondary}>
            {
              medium
            }
          </Text>
          <Text style={styles.metaSecondary}>
            {
              century
            }
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Artwork.propTypes = {};

export default Artwork;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor:"#FFF",
    borderColor: 'rgba(0,0,0, .4)',
    borderWidth: 0.5
    // elevation: 3,
    // shadowColor: 'rgba(0,0,0, .4)', 
    // shadowOffset: { height: 1, width: 1 },
    // shadowOpacity: 1, 
    // shadowRadius: 1, 
  },
  artworkImage: {
    height: ARTWORK_IMAGE_HEIGHT,
    width: undefined
  },
  metaContainer: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 14,
    paddingRight: 14
  },
  metaPrimary: {
    color: '#2c3e50',
    marginBottom: 5,
    fontSize: 18
  },
  metaSecondary: {
    color: '#95a5a6',
    fontSize: 16,
    marginBottom: 2
  }
})