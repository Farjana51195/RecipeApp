import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity, Linking } from "react-native";
import RecipeText from "../components/common/RecipeText";

export default class DetailsScreen extends Component {
  static navigationOptions = {
    headerStyle: { backgroundColor: "#9806a8" }
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const recipe = this.props.navigation.getParam("recipe", "");

    console.log("recipe", recipe);
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: recipe.image_url }}
          style={{
            width: 250,
            height: 250,
            borderRadius: 500,
            justifyContent: "center",
            marginLeft: 50,
            borderColor: "#D0D3D4",
            borderRadius: 500,
            borderWidth: 1
          }}
          resizeMode="cover"
        />

        <RecipeText
          title={recipe.title}
          publisher={recipe.publisher}
          titleStyle={{
            color: "#9806a8",
            fontSize: 24,
            fontWeight: "normal",
          }}
        />

        <Text style={{ fontWeight: "bold", marginLeft: 20 }}>
          Go to the publisher site:
        </Text>

        <TouchableOpacity
          onPress={() => Linking.openURL(recipe.publisher_url)}
          style={{ marginHorizontal: 25 }}
        >
          <Text
            style={{
              fontSize: 14,
              textDecorationLine: "underline",
              color: "blue"
            }}
          >
            {recipe.publisher_url}
          </Text>
        </TouchableOpacity>

        <Text style={{ fontWeight: "bold", marginLeft: 20, marginTop: 20 }}>
          For more details:
        </Text>

        <TouchableOpacity
          onPress={() => Linking.openURL(recipe.source_url)}
          style={{ marginHorizontal: 25 }}
        >
          <Text
            style={{
              fontSize: 14,
              textDecorationLine: "underline",
              color: "blue"
            }}
          >
            {recipe.source_url}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
