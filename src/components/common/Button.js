import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, onPress, customStyle } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, customStyle]}
      >
        <Text style={styles.titleStyle}> {title} </Text>
      </TouchableOpacity>
    );
  }
}

const styles = {
  container: {
    padding: 15,
    alignSelf: "center",
    backgroundColor: "#9806a8",
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20
  },
  titleStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center"
  }
};
