// @flow
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

type Props = {};

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Art explorer
      </Text>
      <View style={{flexDirection:'row', marginTop:10}}>
        <Text style={styles.subtitle}>
        powered by 
        </Text>
        <Image source={require('../../../assets/harvardartmusueums.png')} style={{height: 25, width:120, marginTop:-5}}/>
      </View>
    </View>
  );
};

Header.propTypes = {};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    paddingBottom: 18,
    paddingLeft: 20,
    paddingRight: 10,
  },
  logo: {
    color: '#000',
    fontSize: 24
  },
  subtitle: {
    fontSize: 14,
    color: '#7f8c8d',
    marginRight: 10
  }
})