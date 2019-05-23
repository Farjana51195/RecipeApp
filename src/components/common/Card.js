import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Card extends Component{
 
  render() {
    return ( <View style={styles.container}>
              {this.props.children} 
              </View> );
  }
}


const styles = {
    container: {
        margin: 20,
        borderRadius: 8, 
        overflow:'hidden',
        borderWidth: 1,
        borderColor: "#ddd",
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: '#fff',
        shadowOffset: {width:0,height:4},
    },
};