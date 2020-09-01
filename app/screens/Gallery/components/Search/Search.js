// @flow
import React, { Component } from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types';

type Props = {
  onSubmit: (query: string) => void,
  query: string
};
type State = {
  query: string
};

class Search extends Component<Props, State> {
  handleChange: Function;
  handleSubmit: Function;
  constructor(props: Props) {
    super(props);
    this.state = {
      query: props.query
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(text: string) {
    this.setState({
      query: text
    });
  }

  handleSubmit() {
    if (!this.state.query.trim()) return this.setState({ query: '' });

    this.props.onSubmit(this.state.query);
  }
  
  render() {
    return (
      <View style={{
        flexDirection:"row",
        alignItems:"center",
        elevation:2,
        width:"85%",
        paddingHorizontal:20,
        height:35,
        marginLeft:20
        }}>
        <Icon 
          name="ios-search"
          size={22}
          color="#4f4a4a" 
        />
        <TextInput
          placeholder="Search by keyword, title, artist"
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleSubmit}
          value={this.state.query}
          underlineColorAndroid='transparent'
          style={{
            paddingHorizontal:10,
            fontSize:12
          }}
        />
      </View>
    );
  }
}

Search.propTypes = {};

export default Search;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 14,
    marginRight: 14,
    borderWidth: 1,
    borderColor: '#34495e'
  },
  input: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 20
  }
});