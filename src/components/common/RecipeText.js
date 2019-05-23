import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class RecipeText extends Component {
  
 
  render() {
    const {title,publisher,titleStyle} =  this.props;
    return (
        <View style={{ padding:20}}>
       <Text style={[styles.title,titleStyle] }>{title}</Text>

       <Text style={ styles.publisher}>{publisher}</Text>
      </View>
    );
  }
}

const styles={
    title:{
        fontSize:18,
         color: '#303030', 
         fontWeight:'bold',
    },
    
    publisher:{
        fontSize:14, 
        color: '#999999', 
        paddingTop:4,
    },
};